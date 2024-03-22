import { timedStep } from '../../../utils/allureLogsUtils';
import { generateRandomString } from '../../../utils/utils';
import { visitManagerAssertions } from '../../components/UI/assertions/visitManager.assertions';
import { visitManagerOperations } from '../../components/UI/operations/visitManager.operations';

describe('UI Tests', async function () {
    // Retry all tests in this suite up to 2 times
    this.retries(2);

    beforeEach(async () => {
        await browser.setWindowSize(1920, 1000);
        await browser.url('http://localhost:5173/');
    });

    it('[TC-001][UI] Create and user with missing date', async () => {
        await timedStep('Click open modal button', () => visitManagerOperations.openCreateVisitModal());
        await timedStep('Set Adress', () => visitManagerOperations.setAddress('Test Address 12345'));
        await timedStep('Set visitor name', () => visitManagerOperations.setVisitorName('Bingo Bingo'));
        await timedStep('Set houmer name', () => visitManagerOperations.setHoumerName('Bongo Bongo'));
        await timedStep('Click Create Btn', () => visitManagerOperations.clickCreateVisitSubmitBtn());
        await timedStep('Validate missing schedule time error', () => visitManagerAssertions.validateInputErrorMsg('Invalid date'));
    });

    it('[TC-002][UI] Create and user with missing Address', async () => {
        await timedStep('Click open modal button', () => visitManagerOperations.openCreateVisitModal());
        await timedStep('Set visitor name', () => visitManagerOperations.setVisitorName('Bingo Bingo'));
        await timedStep('Set houmer name', () => visitManagerOperations.setHoumerName('Bongo Bongo'));
        await timedStep('Set schedule Time', () => visitManagerOperations.setScheduleTime('01012010', '0100PM'));
        await timedStep('Click Create Btn', () => visitManagerOperations.clickCreateVisitSubmitBtn());
        await timedStep('Validate missing address error', () => visitManagerAssertions.validateInputErrorMsg('String must contain at least 1 character(s)'));
    });

    it('[TC-003][UI] Create visit E2E - final status: Complete', async () => {
        const address = generateRandomString(12);
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        await timedStep('Click open modal button', () => visitManagerOperations.openCreateVisitModal());
        await timedStep('Set Adress', () => visitManagerOperations.setAddress(address));
        await timedStep('Set visitor name', () => visitManagerOperations.setVisitorName(visitorName));
        await timedStep('Set houmer name', () => visitManagerOperations.setHoumerName(houmerName));
        await timedStep('Set schedule Time', () => visitManagerOperations.setScheduleTime('01012010', '0100PM'));
        await timedStep('Click Create Btn', () => visitManagerOperations.clickCreateVisitSubmitBtn());

        await timedStep('Validate card was created', () => visitManagerAssertions.validateCardIsPresent(address, visitorName, houmerName, 'PENDING'));

        await timedStep('Move created card to Complete', () => visitManagerOperations.changeCardStatusTo(address, 'COMPLETED'));
        await timedStep('Validate card is in Complete Section', () => visitManagerAssertions.validateCardIsPresent(address, visitorName, houmerName, 'COMPLETED'));
    });

    it('[TC-004][UI] Create visit E2E - final status: Canceled', async () => {
        const address = generateRandomString(12);
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        await timedStep('Click open modal button', () => visitManagerOperations.openCreateVisitModal());
        await timedStep('Set Adress', () => visitManagerOperations.setAddress(address));
        await timedStep('Set visitor name', () => visitManagerOperations.setVisitorName(visitorName));
        await timedStep('Set houmer name', () => visitManagerOperations.setHoumerName(houmerName));
        await timedStep('Set schedule Time', () => visitManagerOperations.setScheduleTime('01012010', '0100PM'));
        await timedStep('Click Create Btn', () => visitManagerOperations.clickCreateVisitSubmitBtn());

        await timedStep('Validate card was created', () => visitManagerAssertions.validateCardIsPresent(address, visitorName, houmerName, 'PENDING'));

        await timedStep('Move created card to Complete', () => visitManagerOperations.changeCardStatusTo(address, 'CANCELED'));

        await timedStep('Validate card is in Complete Section', () => visitManagerAssertions.validateCardIsPresent(address, visitorName, houmerName, 'CANCELED'));
    });
});
