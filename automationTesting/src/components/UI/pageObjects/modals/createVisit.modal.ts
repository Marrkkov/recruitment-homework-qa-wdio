class CreateVisitModal {

    get adress() {
        return $("input[name='address']");
    }

    get visitorName() {
        return $("input[name='visitor_name']");
    }

    get houmerName() {
        return $("input[name='houmer_name']");
    }

    get scheduledTime() {
        return $("input[name='scheduled_at']");
    }

    get cancelBtn() {
        return $("button[class*='bg-neutral']");
    }

    get createBtn() {
        return $("button[type='submit']");
    }

    get missingInputErrorMsg() {
        return $("p[class*='text-sm text-red'");
    }

}

export const createVisitModal = new CreateVisitModal();