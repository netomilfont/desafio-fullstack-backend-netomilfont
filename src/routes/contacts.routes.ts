import { Router } from "express";
import {
  createContactController,
  listContactController,
  listContactsUserController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.get("/user", ensureAuthMiddleware, listContactsUserController);
contactRoutes.get("/:id", ensureAuthMiddleware, listContactController);
contactRoutes.patch("/:id", ensureAuthMiddleware);

export default contactRoutes;
