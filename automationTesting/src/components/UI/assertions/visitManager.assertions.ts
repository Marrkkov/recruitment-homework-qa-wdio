import { createVisitModal } from "../pageObjects/modals/createVisit.modal";



class VisitManagerAssertions {
    
    async validateInputErrorMsg(error: string) {
        expect(await createVisitModal.missingInputErrorMsg.isDisplayed()).toEqual(true);
        const errorMsg = await createVisitModal.missingInputErrorMsg.getText();
        expect(errorMsg).toEqual(error);
    }
}

export const visitManagerAssertions = new VisitManagerAssertions();