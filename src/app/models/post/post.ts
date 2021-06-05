export interface Post {
  title: string;
  date: string;
  resources: {
    filename: string,
    file: File
  }[];
}
