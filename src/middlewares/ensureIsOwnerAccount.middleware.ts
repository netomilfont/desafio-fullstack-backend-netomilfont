import { Request, Response } from "express";
import { NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appErrors";

const ensureUserisOwnerAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id != req.user.id) {
    throw new AppError("You don't have permition", 403);
  }

  next();
};

export default ensureUserisOwnerAccount;
