import { Action } from './types';

const START = 'loading/start';
const STOP = 'loading/stop';

export default function reducer(state = { loading: false }, action: Action<boolean>) {
  if (action.type === START) {
    return { ...state, loading: true };
  }

  if (action.type === STOP) {
    return { ...state, loading: false };
  }

  return state;
}

export const startLoading = () => {
  return {
    type: START,
  };
};

export const stopLoading = () => {
  return {
    type: STOP,
  };
};
