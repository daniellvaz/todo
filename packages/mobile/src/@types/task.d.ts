export interface Task {
  _id: string;
  title: string;
  status: "open" | "closed";
}
