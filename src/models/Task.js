import { TASK_STATUSES, RATING_VALUES } from "../utils/constants";

export class Task {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description || "";
    this.dateCreation = data.dateCreation || new Date().toISOString();
    this.dateDeadline = data.dateDeadline;
    this._status = data.status || "inWork";
    this._rating = null;
    this.dateCompleted = null;
  }

  complete() {
    if (this._status === "completed") {
      throw new Error("Задача уже завершена");
    }
    this._status = "completed";
    this.dateCompleted = new Date().toISOString();
  }

  rate(rating) {
    if (this._status !== "completed") {
      throw new Error("Можно оценивать только завершенные задачи");
    }
    if (!RATING_VALUES.includes(rating)) {
      throw new Error("Оценка должна быть 1, 2 или 3");
    }
    this._rating = rating;
  }

  get status() {
    return TASK_STATUSES[this._status] || this._status;
  }

  get rating() {
    return this._rating;
  }

  get isRated() {
    return this._rating !== null;
  }
}
