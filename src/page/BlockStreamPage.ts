import { Page } from "@playwright/test";



export default class BlockStreamPage{

    private readonly transCount = '//div[@class="transactions"]/h3'
    // private readonly 
    // private readonly 


    constructor(private page:Page) {
        
    }

    async getTransactionsCount() {
        let transactions = this.page.locator(this.transCount).first();
        console.log(transactions);
        return transactions.textContent();
    }





}