import { Router } from "express";
import { Task } from "../models/Task.ts";

const router = Router();

router
  .post("/", async (req, res) => {
    try {
      const { title, description, userId } = req.body;
      const task = new Task({ title, description, userId });
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: "Could not create task" });
    }
  })
  .get("/", async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: "Could not fetch tasks" });
    }
  });

export default router;
