/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Search developers.google.com/web for articles tagged
 * "Headless Chrome" and scrape results from the results page.
 */

'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://it.wikipedia.org/wiki/Pagina_principale');

    // Wait for suggest overlay to appear and click "show all results".
    const startSelector = '.mw-footer';
    await page.waitForSelector(startSelector);

  // Type into search box.
  await page.type('.vector-search-box-input', 'Leonardo');

  // Wait for the results page to load and display the results.
  // dont works fine
  /*const allResultsSelector = '.searchButton';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);
  page.keyboard.press('ArrowDown');*/


  page.keyboard.press('Enter');

  // Wait for the results page to load and display the results.

  const resultsSelector = '.mw-footer';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  await page.waitForTimeout(3000);
  await page.screenshot({path: 'example.png', fullPage: true});


  await browser.close();
})();
