import { Request, Response } from "express";

const createSessionController = async (req: Request, res: Response) => {
  const loginData = req.body;
  const token = await createLoginService(loginData);
  return res.json({ token });
};

export { createSessionController };
