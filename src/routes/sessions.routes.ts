import { Router } from "express";
import { createSessionController } from "../controllers/sessions.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataisValid.middleware";
import { userLoginSerializer } from "../schemas/users.schemas";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(userLoginSerializer),
  createSessionController
);

export default sessionRoutes;
