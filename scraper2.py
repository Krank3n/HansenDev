#!/usr/bin/env python3
"""
Round 2: Scrape the slow Wix pages with domcontentloaded + manual wait.
Also grab the wake-park page (with hyphen) and screenshots.
"""

import json
from playwright.sync_api import sync_playwright

URLS = [
    "https://www.cairnswakepark.com/wake-park",
    "https://www.cairnswakepark.com/wakepark",
    "https://www.cairnswakepark.com/aqua-park",
    "https://www.cairnswakepark.com/contact",
    "https://www.cairnswakepark.com/gift-cards",
]


def scrape_page(page, url, idx):
    print(f"\n{'='*60}")
    print(f"SCRAPING: {url}")
    print(f"{'='*60}")

    try:
        page.goto(url, wait_until="domcontentloaded", timeout=20000)
        # Let Wix render
        page.wait_for_timeout(6000)
    except Exception as e:
        print(f"  ERROR loading {url}: {e}")
        return None

    title = page.title()
    print(f"  Title: {title}")

    if "404" in title:
        print("  -> 404, skipping")
        return None

    # Take screenshot
    screenshot_path = f"/tmp/cwp_page_{idx}.png"
    page.screenshot(path=screenshot_path, full_page=True)
    print(f"  Screenshot: {screenshot_path}")

    text = page.inner_text("body")

    images = page.evaluate("""
        () => {
            const imgs = [];
            document.querySelectorAll('img').forEach(img => {
                if (img.src && !img.src.includes('data:') && img.width > 30) {
                    imgs.push({
                        src: img.src,
                        alt: img.alt || '',
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    });
                }
            });
            // Also grab video sources
            document.querySelectorAll('video source, video').forEach(v => {
                const src = v.src || v.getAttribute('src');
                if (src) imgs.push({ src, alt: 'VIDEO', width: 0, height: 0 });
            });
            // Wix video players
            document.querySelectorAll('[data-testid*="video"] video, wix-video video').forEach(v => {
                if (v.src) imgs.push({ src: v.src, alt: 'WIX-VIDEO', width: 0, height: 0 });
            });
            return imgs;
        }
    """)

    booking = page.evaluate("""
        () => {
            const bookLinks = [];
            document.querySelectorAll('a[href*="book"], a[href*="fareharbor"]').forEach(el => {
                bookLinks.push({ text: el.innerText?.trim().substring(0, 100), href: el.href });
            });
            return bookLinks;
        }
    """)

    print(f"  Text length: {len(text)} chars")
    print(f"  Images: {len(images)}")
    print(f"\n--- TEXT CONTENT ---")
    print(text[:4000])
    print(f"\n--- IMAGES ---")
    for img in images[:20]:
        print(f"  {img['alt'][:40]:40s} | {img['src'][:140]}")
    print(f"\n--- BOOKING ---")
    for b in booking[:10]:
        print(f"  {b['text'][:50]:50s} | {b['href'][:140]}")

    return {"url": url, "title": title, "text": text[:5000], "images": images, "booking": booking}


def main():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        )
        page = ctx.new_page()

        for i, url in enumerate(URLS):
            r = scrape_page(page, url, i)
            if r:
                results.append(r)

        browser.close()

    with open("/tmp/cwp_scrape2.json", "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nSaved to /tmp/cwp_scrape2.json")


if __name__ == "__main__":
    main()
