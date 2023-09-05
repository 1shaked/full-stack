import { publicEncrypt, privateDecrypt, generateKeyPairSync } from "crypto";
import { Request, Response, Router } from "express";

export const asymmetricEncryptionRouter = Router();

asymmetricEncryptionRouter.get("/", (req: Request, res: Response) => {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048, // the length of your key in bits
    publicKeyEncoding: {
      type: "spki", // recommended to be 'spki' by the Node.js docs
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
      format: "pem",
      // cipher: 'aes-256-cbc',
      // passphrase: 'top secret'
    },
  });
  // const message: string = "the british are coming!";
const message = req.query.message as string || "example message"; 

  const encryptedData: Buffer = publicEncrypt(publicKey, Buffer.from(message));

  console.log(encryptedData.toString("hex"));

  const decryptedData: Buffer = privateDecrypt(privateKey, encryptedData);

  console.log(decryptedData.toString("utf-8"));
  res.send({
    encryptedData: encryptedData.toString("hex"),
    decryptedData: decryptedData.toString("utf-8"),
    privateKey, publicKey
  })
});
