import { Action } from './types';

const START = 'loading/start';
const STOP = 'loading/stop';

export default function reducer(state = false, action: Action<boolean>) {
  if (action.type === START) {
    return true;
  }

  if (action.type === STOP) {
    return false;
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
