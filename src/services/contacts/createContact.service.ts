import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const createContactService = async (
  contactData,
  userId: string
): Promise<Contact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = userRepository.findOneBy({
    id: userId,
  });

  const contact = contactRepository.create({
    ...contactData,
    user,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
