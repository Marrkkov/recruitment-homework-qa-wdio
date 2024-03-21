import { apiOperations } from "../../components/API/api.operations";
import * as apiSchemasData from "../../../resources/API/responseSchemas";
import { apiAssertions } from "../../components/API/api.assetions";

describe("API Tests", () => {

    it('[TC-003][API] Validate GET /visits response', async () => {
        const response = await apiOperations.getRequest('http://localhost:8000/visits/');
        await apiAssertions.validateResponseSchema(response, apiSchemasData.getVisits);
    });

});