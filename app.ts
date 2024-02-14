import puppeteer, { Browser } from "puppeteer";

const url = "https://books.toscrape.com";

async function main(url: string) {
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  // evaluate - exam the whole page
  const bookData = await page.evaluate(() => {
    const bookPods = Array.from(document.querySelectorAll(".product_pod"));
    // const data = bookPods.map((book: any) => {
    //     title:
    // })
    return bookPods;
  });
  console.log(bookData);

  await browser.close();
}

main(url);
