import config from '../config';
import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';

passport.use(
  new BearerStrategy(function (token, done) {
    // Dummy global single token authentication
    done(null, token === config.token);
  })
);

const auth = passport.authenticate('bearer', { session: false });

export default auth;
