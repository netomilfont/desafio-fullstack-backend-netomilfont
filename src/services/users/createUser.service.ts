import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users.interface";

const createUserService = async (userData: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    email: userData.email,
  });

  const user = userRepository.create(userData);
  await userRepository.save(user);

  return user;
};
