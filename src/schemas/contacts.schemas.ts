import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContactRequest,
  IContactResponse,
} from "../interfaces/contacts.interface";

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
});

const contactResponseSerializer: SchemaOf<IContactResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required(),
    createdAt: yup.date().required(),
  });

export { contactSerializer, contactResponseSerializer };
