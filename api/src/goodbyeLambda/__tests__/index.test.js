const goodbyeLambda = require('../../goodbyeLambda');

describe('Test for goodbye-from-lambda', function () {
  it('Verifies successful response', async () => {
    const result = await goodbyeLambda.handler({}, { awsRequestId: 0 });
    const expectedResult = 'Goodbye from Lambda!';
    expect(JSON.parse(result.body).message).toEqual(expectedResult);
  });
});
