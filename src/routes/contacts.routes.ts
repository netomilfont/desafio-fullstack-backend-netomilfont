import { Router } from "express";
import { createContactController } from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);

export default contactRoutes;
