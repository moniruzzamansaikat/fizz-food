import { useEffect, useState } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { initFirebase } from '../firebase-config';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

// init firebase app
initFirebase();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(() => ({
    name: '',
    phone: '',
    city: '',
    housex: '',
  }));
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const add = localStorage.getItem('address');
    setAddress({ ...JSON.parse(add), name: user?.displayName });
  }, [user?.displayName]);

  // listen for auth state changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  // update address
  const updateAddress = ({ phone, city, house }) => {
    setAddress({
      name: user?.displayName,
      house: house,
      phone,
      city,
    });
    localStorage.setItem('address', JSON.stringify(address));
    swal('Success', 'Address updated successfully', 'success');
  };

  // sign up with email and password
  const signUp = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: '/img/user.png',
        }).then(() => {
          swal('Success', 'Sign up success', 'success');
          navigate('/');
        });
      })
      .catch((error) => {
        swal('Error', error.code, 'error');
      });
  };

  // sign in with email and password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        navigate('/');
        swal('Success', 'Sign in success', 'success');
      })
      .catch((error) => {
        swal('Error', 'Wrong user credential!', 'error');
      });
  };

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        setUser(res.user);
        navigate('/');
        swal('Success', 'Sign in success', 'success');
      })
      .catch(() => {
        swal('Error', 'Something went wrong', 'error');
      });
  };

  // logout user
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        swal('Success', 'Logout success', 'success');
        navigate('/');
      })
      .catch(() => {
        swal('Error', 'Logout error', 'error');
      });
  };

  return {
    user,
    address,
    updateAddress,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  };
};

export default useFirebase;
