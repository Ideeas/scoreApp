export interface Action<TPayload> {
  type: string;
  payload: TPayload;
}

export interface PersonalInformations {
  name: string;
  email: string;
  cpf: string;
  address: string;
  occupation: string;
}
