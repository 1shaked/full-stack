// const { createHash } = require('crypto');
import { createHash } from "crypto";
import express, { Router, Request, Response } from "express";

export const hashRouter: Router = express.Router();

// Create a string hash

function hash(input: string) {
  return createHash("sha256").update(input).digest("base64");
}

hashRouter.get("/", async (req: Request, res: Response) => {
  const queryParams = req.query;

  // Compare two hashed passwords

  let password = "super-password!";
  const hash1 = hash(password); // in the db this is how it look like
  console.log(hash1);
  const userPassword: string = req.query.password?.toString() as string ?? '';
  const hash2 = hash(userPassword);
  const match = hash1 === hash2;

  console.log(match ? "✔️  good password" : "❌  password does not match");

  res.send({
    queryParams,
    hash1,
    hash2,
    passwordDbHash1: password,
    userPasswordHash2: userPassword,
  });
});
