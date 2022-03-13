// Import all functions from hello-from-lambda.js
const helloLambda = require('../../helloLambda');

// This includes all tests for helloLambda
describe('Test for helloLambda', function () {
  // This test invokes helloLambda handler and checks the result
  it('Verifies successful response', async () => {
    // Invoke helloFromLambdaHandler()
    const result = await helloLambda.handler({}, { awsRequestId: 0 });
    /*
     * The expected result should match the return from your Lambda function.
     * e.g.
     * if you change from `const message = 'Hello from Lambda!';` to `const message = 'Hello World!';` in helloLambda.js
     * you should change the following line to `const expectedResult = 'Hello World!';`
     */
    const expectedResult = 'Hello from Lambda!';
    // Compare the result with the expected result
    expect(JSON.parse(result.body).message).toEqual(expectedResult);
  });
});
