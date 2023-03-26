import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserisOwnerAccount from "../middlewares/ensureIsOwnerAccount.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUserisOwnerAccount,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUserisOwnerAccount,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUserisOwnerAccount,
  deleteUserController
);

export default userRoutes;
