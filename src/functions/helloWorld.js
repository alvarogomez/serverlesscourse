exports.handler = async (event) => {
    const {name} = event.pathParameters
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello ${name}`)
    };
    return response;
};
