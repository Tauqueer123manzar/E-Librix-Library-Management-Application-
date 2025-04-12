const ErrorHandler=require("./ErrorHandler");

const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.code === 11000) {
        err = new ErrorHandler(`Duplicate ${Object.keys(err.keyValue)} Entered`, 400);
    }

    if (err.name === "JsonWebTokenError") {
        err = new ErrorHandler("Invalid Token", 400);
    }

    if (err.name === "TokenExpiredError") {
        err = new ErrorHandler("Token Expired", 400);
    }

    if (err.name === "CastError") {
        err = new ErrorHandler("Invalid Id", 400);
    }

    const errorMessage = err.errors
        ? Object.values(err.errors)
              .map((error) => error.message)
              .join(" ")
        : err.message;

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage
    });
};
module.exports = errorMiddleware;
