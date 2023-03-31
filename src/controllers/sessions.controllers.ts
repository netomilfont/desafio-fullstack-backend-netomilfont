import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interface";
import createSessionService from "../services/sessions/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const loginData: IUserLogin = req.body;
  const responseLogin = await createSessionService(loginData);
  return res.json(responseLogin);
};

export { createSessionController };
