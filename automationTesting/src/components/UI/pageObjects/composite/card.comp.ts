class VisitCardComp {
    getCardEditBtn(card: WebdriverIO.Element) {
        return card.$('button');
    }
}

export const visitCardComp = new VisitCardComp();
