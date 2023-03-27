import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import {
  IUserResponse,
  IUserUpdateRequest,
} from "../../interfaces/users.interface";
import { userWithoutPasswordSerializer } from "../../schemas/users.schemas";

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  const updatedUser = userRepository.create({
    ...user,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const userReturn = await userWithoutPasswordSerializer.validate(updatedUser, {
    stripUnknown: true,
  });

  return userReturn;
};

export default updateUserService;
