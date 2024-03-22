class VisitManagerPage {
    get title() {
        return $('h1');
    }

    get createVisitButton() {
        return $('button');
    }

    get pendingCards() {
        return $$("[class='w-56 shrink-0']")[0];
    }

    get delayedCards() {
        return $$("[class='w-56 shrink-0']")[1];
    }

    get inProgressCards() {
        return $$("[class='w-56 shrink-0']")[2];
    }

    get canceledCards() {
        return $$("[class='w-56 shrink-0']")[3];
    }

    get completeCards() {
        return $$("[class='w-56 shrink-0']")[4];
    }

    async getLatestPendingCard() {
        const cards = await this.pendingCards.$$("[class*='cursor-pointer rounded']");
        const cardsLength = await cards.length;
        return cards[cardsLength - 1];
    }

    async getLatestCompleteCard() {
        const cards = await this.completeCards.$$("[class*='cursor-pointer rounded']");
        const cardsLength = await cards.length;
        return cards[cardsLength - 1];
    }

    async getLatestCanceledCard() {
        const cards = await this.canceledCards.$$("[class*='cursor-pointer rounded']");
        const cardsLength = await cards.length;
        return cards[cardsLength - 1];
    }

    async getCardByAddress(address: string) {
        const cards = await $$("[class*='cursor-pointer rounded']");
        for (const card of cards) {
            const cardText = await card.getText();
            if (cardText.includes(address)) {
                return card;
            }
        }
        throw new Error(`No card with address '${address}' found.`);
    }

    async refreshPage() {
        await browser.refresh();
        await visitManagerPage.createVisitButton.waitForClickable();
    }
}

export const visitManagerPage = new VisitManagerPage();
