import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";
import { userWithoutPasswordSerializer } from "../../schemas/users.schemas";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    email: userData.email,
  });

  if (findUser) {
    throw new AppError("User already exists!");
  }

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userReturn = await userWithoutPasswordSerializer.validate(user, {
    stripUnknown: true,
  });

  return userReturn;
};

export { createUserService };
