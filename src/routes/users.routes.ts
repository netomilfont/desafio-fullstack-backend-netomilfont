import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
