import {Note} from "./note.model";
import {Lecture} from "./lecture.model";

export interface Content {
  id: number;
  title: string;
  description: string;
  type: ContentType;
  isPublished: boolean;
  isPaid: boolean;
  moduleId: number;
  lecture: Lecture;
  note: Note;
}

export enum ContentType {
  LECTURE = "LECTURE",
  NOTE = "NOTE",
}
