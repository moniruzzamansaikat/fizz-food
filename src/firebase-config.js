import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // todo: add firebase config
};

export const initFirebase = () => {
  return initializeApp(firebaseConfig);
};
