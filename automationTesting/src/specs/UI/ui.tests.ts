import { timedStep } from "../../../utils/allureLogsUtils";
import { visitManagerAssertions } from "../../components/UI/assertions/visitManager.assertions";
import { visitManagerOperations } from "../../components/UI/operations/visitManager.operations";

describe("UI Tests", () => {

    it("[TC-001][UI] Create and user with missing date", async () => {
        await timedStep("Click open modal button", () =>
        visitManagerOperations.openCreateVisitModal());
        await timedStep("Set Adress", () =>
        visitManagerOperations.setAddress('Test Address 12345'));
        await timedStep("Set visitor name", () =>
        visitManagerOperations.setVisitorName('Bingo Bingo'));
        await timedStep("Set houmer name", () =>
        visitManagerOperations.setHoumerName('Bongo Bongo'));
        await timedStep("Click Create Btn", () =>
        visitManagerOperations.clickCreateVisitSubmitBtn());
        await timedStep("Validate missing schedule time error", () =>
        visitManagerAssertions.validateInputErrorMsg("Invalid date"));
    });

    it("[TC-002][UI] Create and user with missing Address", async () => {
        await timedStep("Click open modal button", () =>
        visitManagerOperations.openCreateVisitModal());
        await timedStep("Set visitor name", () =>
        visitManagerOperations.setVisitorName('Bingo Bingo'));
        await timedStep("Set houmer name", () =>
        visitManagerOperations.setHoumerName('Bongo Bongo'));
        await timedStep("Set schedule Time", () =>
        visitManagerOperations.setScheduleTime("01012010","0100PM"));
        await timedStep("Click Create Btn", () =>
        visitManagerOperations.clickCreateVisitSubmitBtn());
        await timedStep("Validate missing address error", () =>
        visitManagerAssertions.validateInputErrorMsg("String must contain at least 1 character(s)"));
    });
});