import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCWADqHF_gtNokgvuLk6kWYn5z_P7wE3vs',
  authDomain: 'fizz-food.firebaseapp.com',
  projectId: 'fizz-food',
  storageBucket: 'fizz-food.appspot.com',
  messagingSenderId: '516737292426',
  appId: '1:516737292426:web:57e44cd48ad589b0f1b573',
};

export const initFirebase = () => {
  return initializeApp(firebaseConfig);
};
