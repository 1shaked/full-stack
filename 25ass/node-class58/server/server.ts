import express from 'express';
import { exampleRouter58 } from './example58';

const app = express();
const port = 4000 ;

// Middleware to parse JSON requests
app.use(express.json());

// app.get('/shaked', (req, res) => {

//   res.send({hey: 'shaked'});
// });

app.use('/example', exampleRouter58);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});