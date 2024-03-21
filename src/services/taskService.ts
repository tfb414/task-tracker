import db from '../db';
import {getTaskTypes} from "./taskTypes";

export const createTask = async (taskData: Omit<Task, 'id' | 'completed_at'>): Promise<Task> => {
  const allTaskTypes = await getTaskTypes();
  if (!allTaskTypes.success) {
    throw new Error('Failed to fetch task types');
  }

  const existingTaskType = allTaskTypes.taskTypes?.find(type => type.taskName === taskData.task);
  if (!existingTaskType) {
    throw new Error(`Task type '${taskData.task}' does not exist please add it`);
  }

  const [taskId] = await db('tasks').insert(taskData).returning('id');
  return { id: taskId, ...taskData };
};
export const getAllTasks = async (): Promise<Task[]> => {
  return db('tasks').select();
};

export const getTaskById = async (id: string): Promise<Task | undefined> => {
  return db('tasks').where({ id }).first(); // Get a task by its ID
};