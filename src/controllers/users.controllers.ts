import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const listUserController = async (req: Request, res: Response) => {
  const user = await listUserService(res.locals.foundUser, req.user.id);
  return res.status(200).json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const newUserData = req.body;
  const foundUser = res.locals.foundUser;

  const updatedUser = await updateUserService(
    newUserData,
    foundUser,
    req.params.id
  );
  return res.status(200).json(updatedUser);
};

export {
  createUserController,
  listUsersController,
  listUserController,
  updateUserController,
};
