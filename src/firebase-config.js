import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // add your firebase config here
};

export const initFirebase = () => {
  return initializeApp(firebaseConfig);
};
