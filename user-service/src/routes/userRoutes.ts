import { Router } from "express";
import { User } from "../models/User.ts";

const router = Router();

router
  .post("/", async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = new User({ name, email });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: "Could not create user" });
    }
  })
  .get("/", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: "Could not fetch users" });
    }
  });

export default router;
