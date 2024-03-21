import { createVisitModal } from "../pageObjects/modals/createVisit.modal";
import { visitManagerPage } from "../pageObjects/pages/visitManager.page";
import { Key } from 'webdriverio'



class VisitManagerOperations {
    
    async openCreateVisitModal() {
        await visitManagerPage.createVisitButton.waitForClickable();
        await visitManagerPage.createVisitButton.click();
    };

    async setAddress(adress: string) {
        await createVisitModal.adress.waitForDisplayed();
        await createVisitModal.adress.setValue(adress);
    }

    async setVisitorName(visitorName: string) {
        await createVisitModal.visitorName.waitForDisplayed();
        await createVisitModal.visitorName.setValue(visitorName);
    }

    async setHoumerName(houmerName: string) {
        await createVisitModal.houmerName.waitForDisplayed();
        await createVisitModal.houmerName.setValue(houmerName);
    }

    async setScheduleTime(date: string, hour: string) {
        await createVisitModal.scheduledTime.waitForDisplayed();
        await createVisitModal.scheduledTime.setValue(date);
        await browser.keys([Key.Tab]);
        await createVisitModal.scheduledTime.setValue(hour);
    }

    async clickCreateVisitSubmitBtn() {
        await createVisitModal.createBtn.click();
    }

}

export const visitManagerOperations = new VisitManagerOperations();