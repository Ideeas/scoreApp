import { Action, PersonalInformations } from './types';

interface User {
  token: string | null;
  data: PersonalInformations;
}

const initialState: User = {
  token: null,
  data: {} as PersonalInformations,
};

const CREATE = 'user/create';

export default function reducer(state = initialState, action: Action<{}>) {
  switch (action.type) {
    case CREATE: {
      return { ...state, payload: action.payload };
    }
  }

  return state;
}

type CreateUser = Omit<User, 'token'>;

export const createUser = (payload: Action<CreateUser>) => {
  return {
    type: CREATE,
    payload,
  };
};
