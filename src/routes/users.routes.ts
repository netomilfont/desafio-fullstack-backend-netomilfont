import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataisValid.middleware";
import ensureUserisOwnerAccount from "../middlewares/ensureIsOwnerAccount.middleware";
import { userSerializer, userUpdateSerializer } from "../schemas/users.schemas";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
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
  ensureDataIsValidMiddleware(userUpdateSerializer),
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
