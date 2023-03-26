import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";

const createSessionController = async (req: Request, res: Response) => {
  const loginData: IUserLogin = req.body;
  const token = await createLoginService(loginData);
  return res.json({ token });
};

export { createSessionController };
