import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IContactRequest } from "../../interfaces/contacts.interface";

const createContactService = async (
  contactData: IContactRequest,
  userId: string
): Promise<Contact> => {
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

  return contact;
};

export default createContactService;
