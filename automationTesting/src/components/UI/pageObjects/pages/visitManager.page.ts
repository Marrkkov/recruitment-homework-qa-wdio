class VisitManagerPage {

    get title() {
        return $("h1");
    }

    get createVisitButton() {
        return $("button")
    }

}

export const visitManagerPage = new VisitManagerPage();