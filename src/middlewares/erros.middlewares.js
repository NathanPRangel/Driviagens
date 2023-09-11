import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    console.error(error);

    const errorTypes = {
        conflict: httpStatus.CONFLICT,
        notFound: httpStatus.NOT_FOUND,
        incompleteData: httpStatus.UNPROCESSABLE_ENTITY,
        invalidId: httpStatus.UNPROCESSABLE_ENTITY,
        InternalServerError: httpStatus.INTERNAL_SERVER_ERROR,
        UnprocessableEntityforDate: httpStatus.UNPROCESSABLE_ENTITY,
        UnprocessableEntity: httpStatus.UNPROCESSABLE_ENTITY,
        BadRequest: httpStatus.BAD_REQUEST,
    };

    const statusCode = errorTypes[error.type] || httpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = error.message || "Desculpe, houve um erro! 😢";

    res.status(statusCode).send(errorMessage);
}
