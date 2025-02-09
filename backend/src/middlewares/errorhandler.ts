import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

export function errorHandler(
    err: HttpError,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (process.env.NODE_ENV === 'development' && !err.status) {
        console.error(err);
    }
    res.status(err.status || 500).json({
        status: err.status,
        message: err.message,
    });
}
