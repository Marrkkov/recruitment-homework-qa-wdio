class CreateOrEditVisitModal {

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

    get createOrEditBtn() {
        return $("button[type='submit']");
    }

    get statusDropdown() {
        return $("select");
    }

    get resolutionComment() {
        return $("input[name='resolution_comment']");
    };

    get missingInputErrorMsg() {
        return $("p[class*='text-sm text-red'");
    }

    getSelectDropdownStatus(status: string) {
        return $(`option[value='${status}']`);
    }

}

export const createOrEditVisitModal = new CreateOrEditVisitModal();