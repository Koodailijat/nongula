import createHttpError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

export function unknownEndpoint(
    _req: Request,
    _res: Response,
    next: NextFunction
) {
    next(createHttpError(404));
}
