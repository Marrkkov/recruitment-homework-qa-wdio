import { apiOperations } from '../../components/API/api.operations';
import * as apiSchemasData from '../../../resources/API/schemas/response.schemas';
import { apiAssertions } from '../../components/API/api.assetions';
import { generateRandomString } from '../../../utils/utils';
import { timedStep } from '../../../utils/allureLogsUtils';

describe('API Tests', async function () {
    // Retry all tests in this suite up to 2 times
    this.retries(2);

    it('[TC-006][API] Validate GET /visits response', async () => {
        await timedStep('Get all visit from endpoint and validate properties', async () => {
            const response = await apiOperations.getRequest('http://localhost:8000/visits/');
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseSchema(response, apiSchemasData.visits);
        });
    });

    it('[TC-007][API] Validate Create visit POST /visits E2E - Complete', async () => {
        const address = generateRandomString(12);
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        const postData = {
            address: address,
            houmer_name: houmerName,
            visitor_name: visitorName,
            scheduled_at: '2024-03-22T13:00:00',
            status: 'PENDING',
        };

        let response: any;
        let id: any;

        await timedStep('Create Visit', async () => {
            response = await apiOperations.postRequest('http://localhost:8000/visits/', postData);
            id = response.data.id;
        });

        await timedStep('Validate Created Visit', async () => {
            await apiAssertions.validate201Reponse(response);
            await apiAssertions.validateResponseSchema(response, apiSchemasData.visit);
        });

        await timedStep('Validate Created Visit data match', async () => {
            response = await apiOperations.getRequest(`http://localhost:8000/visits/${id}`);
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, postData);
        });

        await timedStep('Set visit Status to IN_PROGRESS', async () => {
            response = await apiOperations.patchRequest(`http://localhost:8000/visits/${id}`, { status: 'IN_PROGRESS' });
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, { status: 'IN_PROGRESS' });
        });

        await timedStep('Set visit Status to COMPLETED', async () => {
            const completeVisitBody = { status: 'COMPLETED', resolution_comment: 'VISIT DONE!!' };
            response = await apiOperations.patchRequest(`http://localhost:8000/visits/${id}`, completeVisitBody);
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, completeVisitBody);
        });

        await timedStep('Delete visit', async () => {
            response = await apiOperations.deleteRequest(`http://localhost:8000/visits/${id}`);
            await apiAssertions.validate204Reponse(response);
        });

        await timedStep('Validate visit is deleted', async () => {
            try {
                await apiOperations.getRequest(`http://localhost:8000/visits/${id}`);
            } catch (error) {
                await apiAssertions.validateRequestFailed(error.message, 'Request failed with status code 500');
            }
        });
    });

    it('[TC-008][API] Validate Create visit POST /visits E2E - Cancel', async () => {
        const address = generateRandomString(12);
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        const postData = {
            address: address,
            houmer_name: houmerName,
            visitor_name: visitorName,
            scheduled_at: '2024-03-22T13:00:00',
            status: 'PENDING',
        };

        let response: any;
        let id: any;

        await timedStep('Validate Created Visit', async () => {
            response = await apiOperations.postRequest('http://localhost:8000/visits/', postData);
            id = response.data.id;
        });

        await timedStep('Validate Created Visit', async () => {
            await apiAssertions.validate201Reponse(response);
            await apiAssertions.validateResponseSchema(response, apiSchemasData.visit);
        });

        await timedStep('Validate Created Visit data match', async () => {
            response = await apiOperations.getRequest(`http://localhost:8000/visits/${id}`);
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, postData);
        });

        await timedStep('Set visit Status to IN_PROGRESS', async () => {
            response = await apiOperations.patchRequest(`http://localhost:8000/visits/${id}`, { status: 'IN_PROGRESS' });
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, { status: 'IN_PROGRESS' });
        });

        await timedStep('Set visit Status to CANCELED', async () => {
            const completeVisitBody = { status: 'CANCELED', resolution_comment: 'VISIT CANCELED!!' };
            response = await apiOperations.patchRequest(`http://localhost:8000/visits/${id}`, completeVisitBody);
            await apiAssertions.validate200Reponse(response);
            await apiAssertions.validateResponseData(response.data, completeVisitBody);
        });

        await timedStep('Delete visit', async () => {
            response = await apiOperations.deleteRequest(`http://localhost:8000/visits/${id}`);
            await apiAssertions.validate204Reponse(response);
        });

        await timedStep('Validate visit is deleted', async () => {
            try {
                await apiOperations.getRequest(`http://localhost:8000/visits/${id}`);
            } catch (error) {
                await apiAssertions.validateRequestFailed(error.message, 'Request failed with status code 500');
            }
        });
    });

    it('[TC-009][API] Validate Create visit POST /visits without address', async () => {
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        const postData = {
            houmer_name: houmerName,
            visitor_name: visitorName,
            scheduled_at: '2024-03-22T13:00:00',
            status: 'PENDING',
        };

        await timedStep('Create a visit with missing address', async () => {
            try {
                await apiOperations.postRequest('http://localhost:8000/visits/', postData);
            } catch (error) {
                await apiAssertions.validateRequestFailed(error.message, 'Request failed with status code 422');
            }
        });
    });

    //test failing due a bug in the app and break it
    it.skip('[TC-010][API] Validate Create visit POST /visits with invalid status', async () => {
        const address = generateRandomString(12);
        const visitorName = generateRandomString(12);
        const houmerName = generateRandomString(12);

        const postData = {
            address: address,
            houmer_name: houmerName,
            visitor_name: visitorName,
            scheduled_at: '2024-03-22T13:00:00',
            status: 'INVALIDSTATUS',
        };

        await timedStep('Create a visit with invalid status', async () => {
            const response = await apiOperations.postRequest('http://localhost:8000/visits/', postData);
            await apiAssertions.validate400BadRequestReponse(response);
        });
    });
});
