import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IContactUpdateRequest } from "../../interfaces/contacts.interface";

const updateContactUserService = async (
  userId: string,
  contactId: string,
  contactData: IContactUpdateRequest
) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found!", 404);
  }

  if (contact.user.id !== user!.id) {
    throw new AppError("You don't have permission to see this contact", 403);
  }

  const updatedContact = contactRepository.create({
    ...contact,
    ...contactData,
  });

  await contactRepository.save(updatedContact);

  return updatedContact;
};

export default updateContactUserService;
