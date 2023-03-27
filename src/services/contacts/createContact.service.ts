import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import {
  IContactRequest,
  IContactResponse,
} from "../../interfaces/contacts.interface";
import { contactResponseSerializer } from "../../schemas/contacts.schemas";

const createContactService = async (
  contactData: IContactRequest,
  userId: string
): Promise<IContactResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const contact = contactRepository.create({
    ...contactData,
    user: user!,
  });

  await contactRepository.save(contact);

  const returnContact = await contactResponseSerializer.validate(contact, {
    stripUnknown: true,
  });

  return returnContact;
};

export default createContactService;
