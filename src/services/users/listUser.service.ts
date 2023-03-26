import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const listUserService = async (userIdListed: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOneBy({
    id: userIdListed,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  return user;
};

export default listUserService;
