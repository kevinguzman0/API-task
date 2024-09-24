const express = require("express");
const { check, validationResult } = require("express-validator");
const Task = require("../models/Task");

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error get tasks" });
  }
});

// POST create new task
router.post(
  "/",
  [check("title", "Title is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description } = req.body;
    try {
      const newTask = new Task({ title, description });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Error create task" });
    }
  }
);

// PUT update task
router.put(
  "/:id",
  [check("title", "Title is required").optional().not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: "Error update task" });
    }
  }
);

// DELETE task
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error delete task" });
  }
});

module.exports = router;
