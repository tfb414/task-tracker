import db from '../db';
import {TaskType} from "../models/taskTypes";

export const addTaskType = async (taskName: string): Promise<{ success: boolean, error?: string }> => {
    try {
        await db('taskTypes').insert({ taskName });
        return { success: true };
    } catch (error) {
        console.error("Error retrieving task types:", error);
        throw new Error(error as string)
    }
};

export const getTaskTypes = async (): Promise<{ success: boolean, taskTypes?: TaskType[], error?: string }> => {
    try {
        const taskTypes = await db<TaskType>('taskTypes').select();
        return { success: true, taskTypes };
    } catch (error) {
        console.error("Error retrieving task types:", error);
        throw new Error(error as string)
    }
};