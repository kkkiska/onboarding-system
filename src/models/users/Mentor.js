import { BaseUser } from "./BaseUser";

export class Mentor extends BaseUser {
  constructor(data) {
    super(data);
    this._subordinatesIds = data.subordinatesIds || [];
  }

  addSubordinate(user) {
    if (user.role !== "trainee") {
      throw new Error("Можно добавлять только стажёров");
    }
    this._subordinatesIds.push(user.id);
  }
}
