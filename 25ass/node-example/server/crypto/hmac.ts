import { createHmac } from "crypto";

import express, { Router, Request, Response } from "express";
export const hmacRouter: Router = express.Router();

hmacRouter.get("/", async (req: Request, res: Response) => {
  const queryParams = req.query;
  const queryPassword = (queryParams.password as string) ?? "";
  const key: string = "super-secret!";
  const message: string = "boo 👻";

  const hmac: string = createHmac("sha256", key).update(message).digest("hex");

  console.log(hmac);

  const key2: string = "other-password";
  const hmac2: string = createHmac("sha256", key2)
    .update(message)
    .digest("hex");

  console.log(hmac2);

  res.send({
    queryParams,
    hmac,
    key2,
    hmac2,
  });
});
