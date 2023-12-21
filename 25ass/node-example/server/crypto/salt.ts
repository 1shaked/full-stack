import * as bcrypt from 'bcrypt';
import express, { Router, Request, Response } from "express";
export const saltRouter: Router = express.Router();

const saltRounds = 15;

async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password: ' + error);
    }
}

async function checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error checking password: ' + error);
    }
}
saltRouter.get("/", async (req: Request, res: Response) => {
  const queryParams = req.query; 
  const queryPassword = queryParams.password as string ?? '';
  // Compare two hashed passwords

  let password = "super-password!";
  const hashed = await hashPassword(password);

  const isMatch = await checkPassword(queryPassword, hashed);

  console.log(isMatch ? "✔️  good password" : "❌  password does not match");

  res.send({
    queryParams,
    password,
    hashed,
    isMatch,
  });
});