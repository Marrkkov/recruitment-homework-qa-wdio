import Ajv from 'ajv';
import { expect } from 'chai';

class ApiAssertions {
    async validate200Reponse(response: any) {
        expect(response.status).to.equal(200);
    }

    async validate201Reponse(response: any) {
        expect(response.status).to.equal(201);
    }

    async validate204Reponse(response: any) {
        expect(response.status).to.equal(204);
    }

    async validate400BadRequestReponse(response: any) {
        expect(response.status).to.equal(404);
    }

    async validateResponseData(responseData: object, expectedData: object) {
        for (const expectedDataKey in expectedData) {
            const expectedDataValue = expectedData[expectedDataKey];
            expect(responseData).to.have.property(expectedDataKey).that.deep.equals(expectedDataValue);
        }
    }

    async validateResponseSchema(response: any, expectedSchema: object) {
        const ajv = new Ajv();
        const validate = ajv.compile(expectedSchema);
        expect(validate(response.data), ajv.errorsText(validate.errors)).to.be.true;
    }

    async validateRequestFailed(error: string, expectedError: string) {
        expect(error).to.equal(expectedError);
    }
}

export const apiAssertions = new ApiAssertions();
