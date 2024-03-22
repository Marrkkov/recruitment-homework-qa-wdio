import { createOrEditVisitModal } from "../pageObjects/modals/createEditVisit.modal";
import { visitManagerPage } from "../pageObjects/pages/visitManager.page";



class VisitManagerAssertions {
    
    async validateInputErrorMsg(error: string) {
        expect(await createOrEditVisitModal.missingInputErrorMsg.isDisplayed()).toEqual(true);
        const errorMsg = await createOrEditVisitModal.missingInputErrorMsg.getText();
        expect(errorMsg).toEqual(error);
    }

    async validateCardIsPresent(adress: string, visitorName: string, houmerName: string, status: string) {
        await visitManagerPage.refreshPage();
        let card: WebdriverIO.Element;
        if (status === 'PENDING') {
            card = await visitManagerPage.getLatestPendingCard();
        } else if (status === 'COMPLETED') {
            card = await visitManagerPage.getLatestCompleteCard();
        } else if (status === 'CANCELED') {
            card = await visitManagerPage.getLatestCanceledCard();
        }
        const cardText = await card.getText();
        expect(await card.isExisting()).toEqual(true);
        expect(cardText).toContain(adress);
        expect(cardText).toContain('Visitor: '+ visitorName);
        expect(cardText).toContain('Houmer: '+ houmerName);
    }
}

export const visitManagerAssertions = new VisitManagerAssertions();