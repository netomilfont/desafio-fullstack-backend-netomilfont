import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";

const createUserController = (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export { createUserController };
