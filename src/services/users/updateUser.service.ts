import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdateRequest } from "../../interfaces/users.interface";

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string,
  userDataId: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const userLogged = await userRepository.findOneBy({
    id: userDataId,
  });

  if (!user) {
    throw new Error("User not found!");
  }

  //   if (userId !== userDataId) {
  //     throw new Error("You don't have permition");
  //   }

  const updatedUser = userRepository.create({
    ...user,
    ...userData,
  });

  await userRepository.save(updatedUser);

  return updatedUser;
};

export default updateUserService;
