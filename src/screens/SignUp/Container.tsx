import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, User } from '../../redux/ducks/User';
import { startLoading, stopLoading } from '../../redux/ducks/Loading';
import { axios } from '../../services/Api';

import * as UserTypes from '../../redux/ducks/types';

import SignUpView from './SignUp';
export type UserData = UserTypes.PersonalInformations;

interface RootState {
  loadingReducer: { loading: boolean };
  userReducer: { data: User };
}

export default function Container() {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loadingReducer.loading);
  const user = useSelector((state: RootState) => state.userReducer.data);

  const handleSignUp = (payload: UserData) => {
    return async () => {
      try {
        dispatch(startLoading());
        const { data } = await axios.post('user/create', payload, {
          headers: { 'content-type': 'application/json' },
        });
        console.log(user);
        dispatch(createUser(data));
      } catch (error) {
        console.log(error);
        throw new Error(error as string);
      } finally {
        dispatch(stopLoading());
      }
    };
  };

  return <SignUpView handleSignUp={handleSignUp} loading={loading} />;
}
