import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserResponse } from "../../interfaces/users.interface";
import { userWithoutPasswordSerializer } from "../../schemas/users.schemas";

const listUserService = async (
  userIdListed: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userIdListed,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  const returnUser = await userWithoutPasswordSerializer.validate(user, {
    stripUnknown: true,
  });

  return returnUser;
};

export default listUserService;
