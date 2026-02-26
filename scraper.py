#!/usr/bin/env python3
"""
Quick scraper for Cairns Wake Park (Wix JS-rendered site).
Uses Playwright to render the page, then extracts text + images.
"""

import json
import sys
from playwright.sync_api import sync_playwright


URLS = [
    "https://www.cairnswakepark.com/",
    "https://www.cairnswakepark.com/wakepark",
    "https://www.cairnswakepark.com/aqua-park",
    "https://www.cairnswakepark.com/pro-shop",
    "https://www.cairnswakepark.com/about",
    "https://www.cairnswakepark.com/contact",
    "https://www.cairnswakepark.com/pricing",
    "https://www.cairnswakepark.com/faq",
]


def scrape_page(page, url):
    """Navigate to a URL, wait for content, extract text + images."""
    print(f"\n{'='*60}")
    print(f"SCRAPING: {url}")
    print(f"{'='*60}")

    try:
        page.goto(url, wait_until="networkidle", timeout=30000)
        # Extra wait for Wix dynamic content
        page.wait_for_timeout(3000)
    except Exception as e:
        print(f"  ERROR loading {url}: {e}")
        return None

    # Check if we got a 404 or redirect
    title = page.title()
    print(f"  Title: {title}")

    # Extract all visible text
    text = page.inner_text("body")

    # Extract all image URLs
    images = page.evaluate("""
        () => {
            const imgs = [];
            // Regular img tags
            document.querySelectorAll('img').forEach(img => {
                if (img.src && !img.src.includes('data:') && img.width > 50) {
                    imgs.push({
                        src: img.src,
                        alt: img.alt || '',
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    });
                }
            });
            // Background images
            document.querySelectorAll('[style*="background-image"]').forEach(el => {
                const match = el.style.backgroundImage.match(/url\\("?(.+?)"?\\)/);
                if (match) imgs.push({ src: match[1], alt: 'bg-image', width: 0, height: 0 });
            });
            // Wix image containers
            document.querySelectorAll('wow-image img, wix-image img, [data-testid*="image"] img').forEach(img => {
                if (img.src && !imgs.find(i => i.src === img.src)) {
                    imgs.push({ src: img.src, alt: img.alt || '', width: img.naturalWidth, height: img.naturalHeight });
                }
            });
            return imgs;
        }
    """)

    # Extract all links
    links = page.evaluate("""
        () => {
            const links = [];
            document.querySelectorAll('a[href]').forEach(a => {
                const text = a.innerText?.trim();
                if (text && a.href) {
                    links.push({ text: text.substring(0, 100), href: a.href });
                }
            });
            return links;
        }
    """)

    # Extract social media links
    socials = page.evaluate("""
        () => {
            const socials = [];
            document.querySelectorAll('a[href*="facebook"], a[href*="instagram"], a[href*="tiktok"], a[href*="youtube"]').forEach(a => {
                socials.push(a.href);
            });
            return [...new Set(socials)];
        }
    """)

    # Try to find booking links
    booking = page.evaluate("""
        () => {
            const bookLinks = [];
            document.querySelectorAll('a[href*="book"], a[href*="reservation"], button').forEach(el => {
                const text = el.innerText?.trim();
                const href = el.href || el.getAttribute('data-link') || '';
                if (text) bookLinks.push({ text: text.substring(0, 100), href });
            });
            return bookLinks;
        }
    """)

    result = {
        "url": url,
        "title": title,
        "text": text[:5000],  # First 5000 chars
        "images": images[:30],
        "links": links[:30],
        "socials": socials,
        "booking": booking[:10],
    }

    # Print summary
    print(f"  Text length: {len(text)} chars")
    print(f"  Images: {len(images)}")
    print(f"  Links: {len(links)}")
    print(f"  Socials: {socials}")
    print(f"  Booking links: {len(booking)}")
    print(f"\n--- TEXT CONTENT (first 3000 chars) ---")
    print(text[:3000])
    print(f"\n--- IMAGES ---")
    for img in images[:15]:
        print(f"  {img['alt'][:50]:50s} | {img['src'][:120]}")
    print(f"\n--- BOOKING LINKS ---")
    for b in booking[:10]:
        print(f"  {b['text'][:50]:50s} | {b['href'][:120]}")

    return result


def main():
    all_results = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()

        for url in URLS:
            result = scrape_page(page, url)
            if result:
                all_results.append(result)

        browser.close()

    # Save full results to JSON
    output_path = "/tmp/cwp_scrape.json"
    with open(output_path, "w") as f:
        json.dump(all_results, f, indent=2)
    print(f"\n\nFull results saved to {output_path}")


if __name__ == "__main__":
    main()
