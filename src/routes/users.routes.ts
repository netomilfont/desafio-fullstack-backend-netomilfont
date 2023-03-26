import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.get("/:id", ensureAuthMiddleware, listUserController);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
