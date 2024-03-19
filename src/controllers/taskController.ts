import express from 'express';
import * as taskService from '../services/taskService';
import { taskSchema } from './schema/task.schema';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // TODO throw some meaningful errors for the love
    const validatedTask = await taskSchema.validate(req.body);
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
