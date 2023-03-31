export interface IContactRequest {
  name: string;
  email: string;
  telefone: string;
}

export interface IContactRequestUpdate {
  name?: string;
  email?: string;
  telefone?: string;
}

export interface IContactResponse {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
}

export interface IContactUpdateRequest {
  name?: string;
  email?: string;
  telefone?: string;
}
