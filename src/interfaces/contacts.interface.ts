export interface IContactRequest {
  name: string;
  email: string;
  telefone: string;
}

export interface IContactUpdateRequest {
  name?: string;
  email?: string;
  telefone?: string;
}
