import express from 'express';
import * as taskTypeService from '../services/taskTypes';
import * as yup from 'yup';
import { taskTypeSchema } from './schema/task.schema';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const validatedTaskType = await taskTypeSchema.validate(req.body);
        const { success } = await taskTypeService.addTaskType(
            validatedTaskType.description,
            validatedTaskType.taskName
        );

        if (success) {
            res.status(201).json({ message: "Task type added successfully" });
        } else {
            res.status(500).json({ error: "Error adding task type" }); // Adjust message if needed
        }
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
});

// Get All Task Types
router.get('/', async (req, res) => {
    try {
        const { success, taskTypes, error } = await taskTypeService.getTaskTypes();
        if (success) {
            res.json(taskTypes);
        } else {
            res.status(500).json({ error }); // Adjust message if needed
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
