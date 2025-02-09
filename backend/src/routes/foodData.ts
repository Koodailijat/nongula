import { Router } from 'express';
import passport from 'passport';
export const router_food = Router();
import { addFood } from '../controllers/foodData.js';

router_food.post(
    '/addFood',
    passport.authenticate('jwt', { session: false }),
    addFood
);
