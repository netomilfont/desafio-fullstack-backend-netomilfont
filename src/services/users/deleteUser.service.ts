import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const deleteUserService = async (userId: string): Promise<{}> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  await userRepository.delete(user.id);

  return {};
};

export default deleteUserService;
