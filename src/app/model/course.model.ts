import {Teacher} from "./teacher.model";

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
}

enum DiscountType {
  FLAT = 'FLAT',
  PERCENTAGE = 'PERCENTAGE',
}
