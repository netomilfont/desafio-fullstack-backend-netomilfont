import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
} from "../interfaces/users.interface";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  password: yup.string().required(),
});

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required(),
    createdAt: yup.date().required(),
  });

const listAllUsersSerializer = yup.array(userWithoutPasswordSerializer);

const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  telefone: yup.string().notRequired(),
});

export {
  userSerializer,
  userWithoutPasswordSerializer,
  listAllUsersSerializer,
  userUpdateSerializer,
};
