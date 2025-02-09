import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import { jwtStrategy } from './strategies/jwt.js';
import { router } from './routes/auth.js';

const app = express();
passport.use(jwtStrategy);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.listen(process.env.PORT);
