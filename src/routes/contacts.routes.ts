import { Router } from "express";
import {
  createContactController,
  listContactsUserController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.get("/user", ensureAuthMiddleware, listContactsUserController);

export default contactRoutes;
