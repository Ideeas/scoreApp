import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/ducks/User';
import { axios } from '../../services/Api';
import * as UserTypes from '../../redux/ducks/types';

import SignUpView from './SignUp';

export type UserData = UserTypes.PersonalInformations;

export default function Container() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  const handleSignUp = (payload: UserData) => {
    return async () => {
      try {
        const { data } = await axios.post('/user/create', payload);
        dispatch(createUser(data));
      } catch (error) {
        throw new Error(error as string);
      }
    };
  };

  return <SignUpView handleSignUp={handleSignUp} />;
}
