export interface Post {
  title: string;
  date: string;
  resources: {
    filename: string,
    file: File,
    filePath?: string,
    s3SignedUrl?: string
  }[];
}
