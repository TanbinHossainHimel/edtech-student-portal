import {User} from "./user.model";

export interface Teacher {
  id: number;
  isActive: boolean;
  teacherId: number;
  user: User;
}
