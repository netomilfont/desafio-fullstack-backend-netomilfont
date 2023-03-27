import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contacts.interface";
import createContactService from "../services/contacts/createContact.service";
import listContactService from "../services/contacts/listContact.service";
import listContactUserService from "../services/contacts/listContactUser.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData: IContactRequest = req.body;
  const userId: string = req.user.id;
  const createdContact = await createContactService(contactData, userId);
  return res.status(201).json(createdContact);
};

const listContactsUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contacts = await listContactUserService(userId);
  return res.status(200).json(contacts);
};

const listContactController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contactId: string = req.params.id;
  const contact = await listContactService(userId, contactId);
  return res.status(200).json(contact);
};

const updateContactUserController = async (req: Request, res: Response) => {
  const userId: string = req.user.id;
  const contactId: string = req.params.id;
  const contactData = req.body;
  const updatedContact = await updateContactService(
    userId,
    contactId,
    contactData
  );
  return res.status(200).json(updatedContact);
};

export {
  createContactController,
  listContactsUserController,
  listContactController,
};
