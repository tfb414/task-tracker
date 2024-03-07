import express from 'express';
import taskController from './controllers/taskController';
import taskTypeController from "./controllers/taskTypeController";

const router = express.Router();

router.use('/tasks', taskController);
router.use('/taskTypes', taskTypeController);

export default router;