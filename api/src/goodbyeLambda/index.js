/* eslint-disable node/no-missing-require, node/no-unpublished-require */
// const AWSXRay = require('aws-xray-sdk-core');
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
exports.handler = metricScope((metrics) => async (event, context) => {
  metrics.setNamespace(process.env.METRICS_NAMESPACE);
  metrics.putDimensions({ Service: 'goodbye' });
  metrics.setProperty('RequestId', context.awsRequestId);
  metrics.setProperty('Event', event);
  // If POST, metrics.setProperty('Payload', ...) after successful JSON parse
  if (!isValidRequest(event)) {
    metrics.putMetric('InvalidRequest', 1, Unit.Count);
    return response(400, {
      status: 'Error',
      message: 'Invalid request',
    });
  }
  try {
    const message = 'Goodbye from Lambda!';
    console.info(`${message}`);
    metrics.putMetric('Success', 1, Unit.Count);
    return response(200, { status: 'OK', message });
  } catch (err) {
    console.error(err);
    metrics.putMetric('UnknownError', 1, Unit.Count);
    return response(500, { status: 'Error', message: 'Server error!' });
  }
});
