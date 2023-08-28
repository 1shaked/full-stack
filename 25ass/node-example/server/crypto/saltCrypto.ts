import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
import express, { Router, Request, Response } from "express";

export const saltRouterCrypto: Router = express.Router();

// Define a User type for better type checking
type User = {
    email: string;
    password: string;
};

let users: User[] = [];

function signup(email: string, password: string): User {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user: User = { email, password: `${salt}:${hashedPassword}` };
  
    users.push(user);

    return user;
}

function login(email: string, password: string): string {
    const user = users.find(v => v.email === email);

    if (!user) {
        throw new Error('User not found.');
    }

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!';
    } else {
        return 'login fail!';
    }
}




saltRouterCrypto.get("/signup", async (req: Request, res: Response) => {
    const queryParams = req.query;
    const email = queryParams.email as string ?? '';
    const password = queryParams.password as string ?? '';
    signup(email , password);
    res.send({
        result: 'success',
        email,
    });
});

saltRouterCrypto.get("/login", async (req: Request, res: Response) => {
    const queryParams = req.query;
    const email = queryParams.email as string ?? '';
    const password = queryParams.password as string ?? '';
    // get the session from the db
    const result = login(email, password);
    res.send({
        result,
        email,
    });
});

saltRouterCrypto.get("/", async (req: Request, res: Response) => {
    const queryParams = req.query; // user input
    const password = queryParams.password as string ?? ''; // getting password from user input
    const salt = randomBytes(16).toString('hex'); // create salt
    const hashedPassword = scryptSync(password, salt, 64).toString('hex'); // create hashed password
    // const exampleSalt = randomBytes(16).toString('hex');
    // const hashedPasswordExample = scryptSync('example', salt, 64).toString('hex');
    const hashedBuffer = scryptSync('example', salt, 64);
    const keyBuffer = Buffer.from(hashedPassword, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    res.send({
        hashedPassword,
        salt,
        // exampleSalt,
        // hashedPasswordExample,
        fullDbPassword: `${salt}:${hashedPassword}`,
        match,
        password,
        e: hashedBuffer.toString('hex')
    });
});