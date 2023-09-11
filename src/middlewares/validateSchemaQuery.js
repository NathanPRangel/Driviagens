import httpStatus from "http-status";

export function validateSchemaQuery(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.query, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            const errorMessage = "O formato esperado de data é: dd-mm-aaaa";
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);
        }

        next();
    };
}
