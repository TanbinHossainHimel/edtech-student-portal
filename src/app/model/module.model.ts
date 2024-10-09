import {Content} from "./content.model";

export interface Module {
  id: number;
  title: string;
  description: string;
  isPublished: boolean;
  courseId: number;
  contents: Content[];
}
