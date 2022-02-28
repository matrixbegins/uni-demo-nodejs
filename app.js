const os = require("os");
const pjson = require('./package.json');
const hostname = os.hostname();

const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    status: "Error",
    message: message || 'An Error occurred.',
  }),
});

const returnError = (error) => {
  console.log(error);
  if (error.name) {
    const message = `Invalid ${error.path}: ${error.value}`;
    callback(null, createErrorResponse(400, `Error:: ${message}`));
  } else {
    callback(
      null,
      createErrorResponse(error.statusCode || 500, `Error:: ${error.name}`)
    );
  }
};

module.exports.home = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "OK",
      message: "Index Route coming from server: " + hostname,
      version: pjson.version,
      timestamp: new Date().toISOString()
    })
  });

}

module.exports.createUser = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: "OK",
        message: "Your request is submitted",
        data: JSON.parse(event.body),
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    returnError(error);
  }
}

