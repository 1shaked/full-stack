import express, { NextFunction } from 'express';
import { exampleRouter58 } from './example58';
import cors from 'cors'
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';
import { prismaDB } from './dbConnection';
import { exampleRouterAuth } from './exampleAuth';
import { RequestCustom } from './types/expressCustom';
import expressSession from 'express-session';
import { googleKey } from './client';
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');

const app = express();
const port = 4000 ;

app.use(passport.initialize());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false
// }));


app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      prismaDB,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);

app.use(passport.session());


app.use(cors(
  {
    origin: ['http://localhost:5173', 'http://another-domain.com']
  }
));


passport.serializeUser((user: any, done) => {
  done(null, user?.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prismaDB.user.findUnique({ where: { id: parseInt(id) } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});


passport.use(new GoogleStrategy(
  googleKey,
  async (accessToken: string, refreshToken: string, profile: any, done: any) => {
    try {
      let user = await prismaDB.user.findUnique({ where: { email: profile.emails[0].value } });
  
      if (!user) {
        // Create a new user
        user = await prismaDB.user.create({
          data: {
            name: profile.displayName,
            email: profile.emails[0].value,
            authMethods: {
              create: {
                provider: "google",
                externalId: profile.id
              }
            }
          }
        });
      } else {
        // Check if the user has logged in with Google before
        const googleAuth = await prismaDB.authMethod.findFirst({
          where: {
            userId: user.id,
            provider: "google"
          }
        });
  
        if (!googleAuth) {
          // If the user hasn't logged in with Google before, add this auth method
          await prismaDB.authMethod.create({
            data: {
              provider: "google",
              externalId: profile.id,
              userId: user.id
            }
          });
        }
      }
  
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
));


// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req: Request, res: Response) => {
//   // res.statusText = 'OK';
//   res.json()
// });

// app.get('/profile', ensureAuthenticated, (req: Request, res: Response) => {
//   res.json(req.user);
// });


function ensureAuthenticated(req: RequestCustom, res: Response, next: NextFunction): void {
  if (req.isAuthenticated()) {
    
    return next();
  }
  res.json( );
}

// Middleware to parse JSON requests
app.use(express.json());

// app.get('/shaked', (req, res) => {

//   res.send({hey: 'shaked'});
// });

app.use('/example', exampleRouter58);
app.use('/example59', exampleRouter58)
app.use('/auth', exampleRouterAuth)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});