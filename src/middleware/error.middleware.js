export const errorResponder = (err, request, response, next) => {
    response.header("Content-Type", 'application/json')

    const statusCode = err.statusCode || err.status || 500;
    const message = err.message || 'Internal Server Error';

    response.status(statusCode).send(message)
}