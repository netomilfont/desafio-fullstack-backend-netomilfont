import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData = req.body;
  const userId = req.user.id;
  const createdContact = await createContactService(contactData, userId);
  return res.status(201).json(createdContact);
};

export { createContactController };
