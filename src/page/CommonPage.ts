import { Page } from "@playwright/test";


export default class CommonPage{

    constructor(private page: Page) {
        
    }


    async fillForm(attribute, type, mandatory, data) {
        
        if (type.length != 0) {
            for (var i = 0; i < type.length; i++){

            }
        }



    }


    async hardWait(milliSeconds) {
        await this.page.waitForTimeout(milliSeconds);
    }

    async waitForURL(URL) {
        await this.page.waitForURL(URL);
    }

}