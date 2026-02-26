#!/usr/bin/env python3
"""Scrape full text from wake park + aqua park pages (no truncation)."""

import json
from playwright.sync_api import sync_playwright

URLS = [
    "https://www.cairnswakepark.com/wakepark",
    "https://www.cairnswakepark.com/aqua-park",
]

def scrape_page(page, url):
    print(f"\nSCRAPING: {url}")
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=20000)
        page.wait_for_timeout(8000)
    except Exception as e:
        print(f"  ERROR: {e}")
        return None

    title = page.title()
    if "404" in title:
        return None

    text = page.inner_text("body")
    print(f"  Text length: {len(text)} chars")
    return {"url": url, "title": title, "text": text}

def main():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        )
        page = ctx.new_page()
        for url in URLS:
            r = scrape_page(page, url)
            if r:
                results.append(r)
        browser.close()

    with open("/tmp/cwp_prices.json", "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nSaved to /tmp/cwp_prices.json")

if __name__ == "__main__":
    main()
