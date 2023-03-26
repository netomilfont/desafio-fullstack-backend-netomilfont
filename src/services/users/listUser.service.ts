import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserService = async (userId: string, userIdListed: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOneBy({
    id: userIdListed,
  });

  if (!user) {
    throw new Error("User not found!");
  }

  if (userId !== userIdListed) {
    throw new Error("You don't have permition");
  }

  return user;
};

export default listUserService;
