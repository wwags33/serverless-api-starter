/* eslint-disable node/no-missing-require, node/no-unpublished-require */
// const AWSXRay = require('aws-xray-sdk-core');
// const AWS = AWSXRay.captureAWS(require('aws-sdk'));
const { metricScope, Unit } = require('aws-embedded-metrics');
/* eslint-enable node/no-missing-require, node/no-unpublished-require */

// response helper
const response = (statusCode, body, additionalHeaders) => ({
  statusCode,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    ...additionalHeaders,
  },
});

function isValidRequest(event) {
  return event !== null && event.pathParameters !== null;
}

/**
 * A Lambda function that returns a static string
 */
exports.goodbyeFromLambdaHandler = metricScope(
  (metrics) => async (event, context) => {
    metrics.setNamespace(process.env.METRICS_NAMESPACE);
    metrics.putDimensions({ Service: 'goodbye' });
    metrics.setProperty('RequestId', context.awsRequestId);
    if (!isValidRequest(event)) {
      metrics.putMetric('Error', 1, Unit.Count);
      return response(400, { message: 'Error: Invalid request' });
    }
    try {
      const message = 'Goodbye from Lambda!';
      // All log statements are written to CloudWatch
      console.info(`${message}`);
      metrics.putMetric('Success', 1, Unit.Count);
      return response(200, { message });
    } catch (err) {
      metrics.putMetric('Error', 1, Unit.Count);
      return response(400, { message: err.message });
    }
  },
);
