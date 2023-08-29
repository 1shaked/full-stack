import { Request, Response, Router } from 'express';
import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';


const symmetricEncryptionRouter = Router();

symmetricEncryptionRouter.get('/', (req: Request, res: Response) => {
    const message = req.query.password as string || 'example message';
    /// Cipher
    const key: Buffer = randomBytes(32);
    const iv: Buffer = randomBytes(16);

    const cipher = createCipheriv('aes256', key, iv);

    /// Encrypt

    const encryptedMessage: string = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
    console.log(`Encrypted: ${encryptedMessage}`);

    /// Decrypt

    const decipher = createDecipheriv('aes256', key, iv);
    const decryptedMessage: string = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

    console.log(`Deciphered: ${decryptedMessage}`);

    res.json({
        encryptedMessage: encryptedMessage,
        key: key.toString('hex'),
        iv: iv.toString('hex'),
        decryptedMessage
    });
});


export default symmetricEncryptionRouter;
