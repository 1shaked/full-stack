import express from 'express';
import { userRouter } from './example';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './trpc';
import { hashRouter } from './crypto/hash';
import { saltRouter } from './crypto/salt';
import { saltRouterCrypto } from './crypto/saltCrypto';
import { hmacRouter } from './crypto/hmac';


const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({});

const app = express();
const port = process.env.PORT || 4000 ;
import cors from 'cors';
import symmetricEncryptionRouter from './crypto/symmetricEncryption';

app.use(cors({
  origin: ['http://localhost:5173', 'http://another-domain.com']
}));

// Middleware to parse JSON requests
app.use(express.json());
// added trpc express middleware
app.use('/trpc', trpcExpress.createExpressMiddleware({ router: appRouter, createContext }));

app.get('/', (req, res) => {
  res.send({hey: 'ssws'});
});

app.use('/users', userRouter);
app.use('/crypto/hash', hashRouter)
app.use('/crypto/salt', saltRouter)
app.use('/crypto/saltCrypto', saltRouterCrypto)
app.use('/crypto/hmac', hmacRouter)
app.use('/crypto/symmetricEncryption', symmetricEncryptionRouter)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});