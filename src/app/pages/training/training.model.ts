export interface Training {
  id: number;
  title: string;
  author: string;
  duration: number;
  institution: string;
  imgUrl: string;
  dateCompleted: string;
  trainingUrl: string;
  trainingType: string;
  authorURL: string;
}

export enum TrainingType {
    VIDEO = "Video",
    BOOK = "Book"
}