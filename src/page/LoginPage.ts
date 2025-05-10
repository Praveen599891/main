import { Page } from "@playwright/test";



export default class LoginPage{

    constructor(private page:Page) {
        
    }

    async navigateToTransactions() {
        await this.page.goto('/6587550e410fa1815cf180decc03ef84dcddd19478a081097bd2090c5e85b4b6')
    }



}