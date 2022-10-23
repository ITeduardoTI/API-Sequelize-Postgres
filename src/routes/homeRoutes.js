import { Router } from 'express';
import homeController from '../controllers/homeController.js';

const router = new Router();
router.post('/novoAluno', homeController.index);

export default router;
