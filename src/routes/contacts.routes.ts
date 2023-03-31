import { Router } from "express";
import {
  createContactController,
  deleteContactUserController,
  listContactController,
  listContactsUserController,
  updateContactUserController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataisValid.middleware";
import {
  contactSerializerRequest,
  contactSerializer,
} from "../schemas/contacts.schemas";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSerializer),
  createContactController
);
contactRoutes.get("/user", ensureAuthMiddleware, listContactsUserController);
contactRoutes.get("/:id", ensureAuthMiddleware, listContactController);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(contactSerializerRequest),
  updateContactUserController
);
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactUserController);

export default contactRoutes;
