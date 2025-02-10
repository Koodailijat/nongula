import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { prisma } from '../utils/prisma.js';

export const jwtStrategy = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.AUTH_SECRET,
    },
    async (payload, done) => {
        try {
            const user = await prisma.user.findUnique({
                where: { email: payload.email },
            });

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(error, false);
        }
    }
);
