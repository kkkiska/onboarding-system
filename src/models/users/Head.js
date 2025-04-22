import { Mentor } from "./Mentor";

export class Head extends Mentor {
  promoteSubordinate(user) {
    if (!this._subordinatesIds.includes(user.id)) {
      throw new Error("Этот сотрудник не является вашим подчинённым");
    }
    user.role = "mentor";
  }
}
