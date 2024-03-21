import Ajv from 'ajv';
import { expect } from 'chai';

class ApiAssertions {

async validate200OkReponse(response: any) {
    expect(response.status).to.equal(200);
}

async validateResponseSchema(response: any, expectedSchema: object) {
        const ajv = new Ajv();
        const validate = ajv.compile(expectedSchema);
        expect(validate(response.data), ajv.errorsText(validate.errors)).to.be.true;
    }
}

export const apiAssertions = new ApiAssertions();