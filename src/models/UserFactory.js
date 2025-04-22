import { Trainee } from "./users/Trainee";
import { Mentor } from "./users/Mentor";
import { Head } from "./users/Head";
import { Hr } from "./users/Hr";

export class UserFactory {
  static create(data) {
    switch (data.role) {
      case "trainee":
        return new Trainee(data);
      case "mentor":
        return new Mentor(data);
      case "head":
        return new Head(data);
      case "hr":
        return new Hr(data);
      default:
        throw new Error(`Неизвестная роль: ${data.role}`);
    }
  }
}
