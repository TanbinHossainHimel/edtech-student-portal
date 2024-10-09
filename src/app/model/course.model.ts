import {Teacher} from "./teacher.model";
import {Module} from "./module.model";

export interface Course {
  id: number;
  title: string;
  description: string;
  isPublished: boolean;
  isPaid: boolean;
  price: number;
  discount: number;
  discountType: DiscountType;
  teacherId: number;
  teacher: Teacher;
  modules: Module[];
}


export enum DiscountType {
  FLAT = 'FLAT',
  PERCENTAGE = 'PERCENTAGE',
}
