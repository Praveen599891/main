import { test, type expect, type Page } from "@playwright/test";
import LoginPage from "../src/page/LoginPage.ts";
import BlockStreamPage from "../src/page/BlockStreamPage.ts";
// import LoginPage from "../src/page/LoginPage.ts";

test.describe("Verify Transactions", () => {
  // test("Login and verify homepage", async ({ page }) => {
  //   // var LoginPage = new LoginPage(page);
  //   // var BlockStreamPage = new BlockStreamPage(page);
  //   await page.goto(
  //     "block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732"
  //   );
  //   let transactions = await page.locator('//div[@class="transactions"]/h3').first();
  //   let contentText = await transactions.textContent();
  //   console.log(contentText);
  //   // LoginPage.navigateToTransactions();
  //   // console.log(BlockStreamPage.getTransactionsCount());
  // });

  test("Print Specific transactions", async ({ page }) => {
    await page.goto(
      "block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732"
    );

    var allTransactions = await page.locator('//div[@class="txn font-p2"]');
    let count = await allTransactions.count();
    console.log("<any>allTransactions).length    ", count);
    for (var i = 0; i < count; i++) {
      console.log(await page
          .locator(
            '//div[@class="transaction-box"]//div[@class="vout"]//div[@class="vout-header-container"]'
          )
          .count())
      if (
        (await page
          .locator(
            '//div[@class="transaction-box"]//div[@class="vout"]//div[@class="vout-header-container"]'
          )
          .count()) == 2
      ) {
        let trans = await page.locator(
          '//div[@class="transaction-box"]//div[@class="vout"]//div[@class="vout-header-container"]'
        );
        for (var j = 0; j < 2; j++) {
          let transactions = await page.locator(
            '//div[@class="transaction-box"]//div[@class="vout"]//div[@class="vout-header-container"]/span/a'
          );
          let contentText = await transactions.textContent();
          console.log(contentText);
        }
      }
    }

    var twoOutput = await page.locator("");
  });
});
