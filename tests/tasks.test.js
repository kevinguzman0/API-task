const request = require("supertest");
const app = require("../index");
const Task = require("../models/Task");

describe("API Tasks", () => {
  // clean DB before each test
  beforeEach(async () => {
    await Task.deleteMany({});
  });

  it("It should get all the tasks", async () => {
    const task = new Task({ title: "Just a task" });
    await task.save();

    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe("Just a task");
  });

  it("It should create a new task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "New task", description: "Just a description" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.title).toBe("New task");
  });

  it("It should update a task", async () => {
    const task = new Task({
      title: "Original task",
      description: "Original desc",
    });
    await task.save();

    const res = await request(app)
      .put(`/tasks/${task._id}`)
      .send({ title: "Update task", description: "Update desc" });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Update task");
  });

  it("It should delete a task", async () => {
    const task = new Task({ title: "Delete this task" });
    await task.save();

    const res = await request(app).delete(`/tasks/${task._id}`);
    expect(res.statusCode).toBe(200);

    const deletedTask = await Task.findById(task._id);
    expect(deletedTask).toBeNull();
  });

  it("It should return error 400 if it does not have a title", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ description: "No title task" });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors[0].msg).toBe("Title is required");
  });
});
