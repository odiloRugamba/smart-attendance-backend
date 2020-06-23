import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import bodyparser from 'body-parser';
import router from './routes';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public/`));

app.use(router);

if (!isProduction) {
  app.use(errorhandler());
}

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'welcome to smart gate API'
  });
});

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && isProduction) {
    const newUrl = `https://${req.get('host') + req.originalUrl}`;
    res.redirect(newUrl);
  }
  next();
});

export default app;
