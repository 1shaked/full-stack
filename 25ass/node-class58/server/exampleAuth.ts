import { Router, Request, Response } from "express";
import passport from "passport";
import { RequestCustom } from "./types/expressCustom";

export const exampleRouterAuth = Router();

exampleRouterAuth.get('/googleSignIn', async ( req , res) => {
    res.send(
        req.params
    )
})


exampleRouterAuth.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

exampleRouterAuth.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req: Request, res: Response) => {
  // res.statusText = 'OK';
  console.log('req.user', req.user);
  res.json({ user: req.user });
});


  exampleRouterAuth.get('/logout', (req: any, res: Response) => {
    req.logout();
    res.redirect('/');
});