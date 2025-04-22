import { BaseUser } from "./BaseUser";
import { Task } from "../Task";

export class Trainee extends BaseUser {
  constructor(data) {
    super(data);
    this.tasks = (data.tasks || []).map((t) => new Task(t));
  }

  addTask(taskData) {
    const task = new Task(taskData);
    this.tasks.push(task);
    return task;
  }

  completeTask(taskId) {
    const task = this.getTask(taskId);
    task.complete();
  }

  rateTask(taskId, rating) {
    const task = this.getTask(taskId);
    task.rate(rating);
  }

  getTask(taskId) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) throw new Error("Задача не найдена");
    return task;
  }

  getCompletedTasks() {
    return this.tasks.filter((t) => t.status === "completed");
  }
}
