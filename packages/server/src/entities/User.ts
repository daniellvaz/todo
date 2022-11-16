export class User {
  public _id?: string;
  public firstName: string;
  public lastName: string;
  public image: string;
  public email: string;
  public password?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public resetPasswordToken?: number;

  constructor(data: User) {
    this._id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.image = data.image;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
    this.resetPasswordToken = data.resetPasswordToken;
  }
}