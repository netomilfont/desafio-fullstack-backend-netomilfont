import { Request, Response } from "express";

const createUserController = (req: Request, res: Response) => {
  const userData = req.body;
};

export { createUserController };
