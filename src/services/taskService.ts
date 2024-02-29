import db from '../db';

export const createTask = async (taskData: Omit<Task, 'id' | 'completed_at'>): Promise<Task> => {
  const [taskId] = await db('tasks').insert(taskData).returning('id');
  return { id: taskId, ...taskData };
};
export const getAllTasks = async (): Promise<Task[]> => {
  return db('tasks').select();
};

export const getTaskById = async (id: string): Promise<Task | undefined> => {
  return db('tasks').where({ id }).first(); // Get a task by its ID
};