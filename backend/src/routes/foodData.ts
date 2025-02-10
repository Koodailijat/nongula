import { Router } from 'express';
import passport from 'passport';
export const router_food = Router();
import { addFood, deleteFood } from '../controllers/foodData.js';

router_food.post(
    '/food',
    passport.authenticate('jwt', { session: false }),
    addFood
);

router_food.delete(
    'food',
    passport.authenticate('jwt', { session: false }),
    deletefood
);
