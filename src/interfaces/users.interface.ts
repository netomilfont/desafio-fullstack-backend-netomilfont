export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  telefone: string;
}

export interface IUserResponse extends IUserRequest {
  id: string;
  createdAt: Date;
}
