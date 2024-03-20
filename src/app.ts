import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = 3333;

app.use(express.json()); // Body parsing middleware

app.use('/api', routes);

app.listen(port,() => {
  console.log(`Server listening on port ${port}`);
});
