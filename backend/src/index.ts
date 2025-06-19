import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import { Task } from './entity/Task';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(() => {
  const taskRepository = AppDataSource.getRepository(Task);

  app.get('/tasks', async (request, response) => {
    const tasks = await taskRepository.find();
    response.json(tasks);
  });

  app.post('/tasks', async (request, response) => {
    const { title, description, status, dueDate } = request.body;


    if (!title || !status) {
      return response.status(400).json({ error: 'Title and status are required.' });
    }

    const task = taskRepository.create({
      title,
      description,
      status,
      dueDate,
    });

    await taskRepository.save(task);
    response.status(200).json({message : "Task Added Successfully"});
  });

  app.put('/tasks/:id', async (request, response) => {
    const { id } = request.params;
    const task = await taskRepository.findOneBy({ id });

    if (!task) {
      return response.status(404).json({ error: 'Task not found.' });
    }

    const { title = task.title, description = task.description, status = task.status, dueDate = task.dueDate } = request.body;
    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;

    await taskRepository.save(task);
    response.status(200).json({message : "Task Upsated Successfully"});
  });

  app.delete('/tasks/:id', async (request, response) => {
    const { id } = request.params;
    const result = await taskRepository.delete({ id });
   
    if (result.affected === 0) {
      return response.status(404).json({ error: 'Task not found.' });
    }

    response.status(200).json({message : "Task Deleted Successfully"});
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Database initialization failed:', err.message);
});
