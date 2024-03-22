import { visitCardComp } from '../pageObjects/composite/card.comp';
import { createOrEditVisitModal } from '../pageObjects/modals/createEditVisit.modal';
import { visitManagerPage } from '../pageObjects/pages/visitManager.page';
import { Key } from 'webdriverio';

class VisitManagerOperations {
    async openCreateVisitModal() {
        await visitManagerPage.createVisitButton.waitForClickable();
        await visitManagerPage.createVisitButton.click();
    }

    async setAddress(adress: string) {
        await createOrEditVisitModal.adress.waitForDisplayed();
        await createOrEditVisitModal.adress.setValue(adress);
    }

    async setVisitorName(visitorName: string) {
        await createOrEditVisitModal.visitorName.waitForDisplayed();
        await createOrEditVisitModal.visitorName.setValue(visitorName);
    }

    async setHoumerName(houmerName: string) {
        await createOrEditVisitModal.houmerName.waitForDisplayed();
        await createOrEditVisitModal.houmerName.setValue(houmerName);
    }

    async setScheduleTime(date: string, hour: string) {
        await createOrEditVisitModal.scheduledTime.waitForDisplayed();
        await createOrEditVisitModal.scheduledTime.setValue(date);
        await browser.keys([Key.Tab]);
        await createOrEditVisitModal.scheduledTime.setValue(hour);
    }

    async clickCreateVisitSubmitBtn() {
        await createOrEditVisitModal.createOrEditBtn.click();
    }

    async changeCardStatusTo(address: string, status: string) {
        await visitManagerPage.refreshPage();
        const card = await visitManagerPage.getCardByAddress(address);
        await visitCardComp.getCardEditBtn(card).moveTo();
        await visitCardComp.getCardEditBtn(card).waitForClickable();
        await visitCardComp.getCardEditBtn(card).click();
        await createOrEditVisitModal.statusDropdown.waitForDisplayed();
        await createOrEditVisitModal.statusDropdown.click();
        await createOrEditVisitModal.getSelectDropdownStatus(status).click();
        await createOrEditVisitModal.resolutionComment.waitForDisplayed();
        await createOrEditVisitModal.resolutionComment.setValue('DONE!!');
        await createOrEditVisitModal.createOrEditBtn.click();
        await visitManagerPage.createVisitButton.waitForClickable();
    }
}

export const visitManagerOperations = new VisitManagerOperations();
