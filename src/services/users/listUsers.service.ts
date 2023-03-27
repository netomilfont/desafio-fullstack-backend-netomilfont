import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { listAllUsersSerializer } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<User[] | any> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersList = await listAllUsersSerializer.validate(users, {
    stripUnknown: true,
  });

  return usersList;
};

export default listUsersService;
