import { Request, Response } from "express";
import { IContactRequest } from "../interfaces/contacts.interface";
import createContactService from "../services/contacts/createContact.service";
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

const listContactController = async (req: Request, res: Response) => {};

export {
  createContactController,
  listContactsUserController,
  listContactController,
};
