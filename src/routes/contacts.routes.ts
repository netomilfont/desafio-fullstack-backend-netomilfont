import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware);

export default contactRoutes;
