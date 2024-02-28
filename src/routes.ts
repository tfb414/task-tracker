import express from 'express';
import taskController from './controllers/taskController';

const router = express.Router();

router.use('/tasks', taskController);

export default router;