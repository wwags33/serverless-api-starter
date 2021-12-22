const lambda = require('../../goodbyeLambda');

describe('Test for goodbye-from-lambda', function () {
  it('Verifies successful response', async () => {
    const result = await lambda.goodbyeFromLambdaHandler();
    const expectedResult = 'Goodbye from Lambda!';
    expect(JSON.parse(result.body).message).toEqual(expectedResult);
  });
});
