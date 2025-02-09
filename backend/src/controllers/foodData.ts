import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma.js';
import createHttpError from 'http-errors';

export const addFood = [
    body('date', 'Date must be a valid ISO 8601 date')
        .isISO8601()
        .withMessage('Invalid date format'),
    body('calories', 'Calories must be a number greater than 0')
        .isInt({ gt: 0 })
        .withMessage('Calories must be a positive integer'),
    body('name', 'Name must be provided and cannot be empty')
        .trim()
        .isLength({ min: 1 })
        .escape(),

    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
                return;
            }

            const userId = (req.user as { id: string })?.id;

            if (!userId) {
                return next(createHttpError(401, 'User not authenticated'));
            }

            const { date, calories, name } = req.body;

            const foodLog = await prisma.foodLog.create({
                data: {
                    date: new Date(date),
                    calories: Number(calories),
                    name,
                    user: {
                        connect: { id: userId },
                    },
                },
            });

            res.status(201).json(foodLog);
        } catch (error) {
            console.error('Error adding food log:', error);
            next(createHttpError(500, 'Internal server error'));
        }
    },
];
