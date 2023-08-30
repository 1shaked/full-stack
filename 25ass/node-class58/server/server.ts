import express from 'express';
import { exampleRouter58 } from './example58';
import cors from 'cors'



const app = express();
const port = 4000 ;
app.use(cors(
  {
    origin: ['http://localhost:5173', 'http://another-domain.com']
  }
))
// Middleware to parse JSON requests
app.use(express.json());

// app.get('/shaked', (req, res) => {

//   res.send({hey: 'shaked'});
// });

app.use('/example', exampleRouter58);
app.use('/example59', exampleRouter58)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});