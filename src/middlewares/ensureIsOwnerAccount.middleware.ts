import { Request, Response } from "express";
import { NextFunction } from "express";
import AppDataSource from "../data-source";

const ensureUserisOwnerAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id != req.user.id) {
    throw new Error("You don't have permition");
  }

  next();
};

export default ensureUserisOwnerAccount;
