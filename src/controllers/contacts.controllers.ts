import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contacts.interface";
import createContactService from "../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const userId: string = req.user.id;
  const createdContact = await createContactService(contactData, userId);
  return res.status(201).json(createdContact);
};

export { createContactController };
