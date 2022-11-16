export class Task {
  public title: string;
  public status?: "open" | "closed";
  public owner: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(task: Task){
    this.title = task.title;
    this.status = task.status;
    this.owner = task.owner;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}