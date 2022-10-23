import express from 'express';
import dotenv from 'dotenv';
import './src/database';
import bodyParser from 'body-parser';
import homeRoutes from './src/routes/homeRoutes.js';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
