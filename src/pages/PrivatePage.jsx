import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivatePage({ children, ...rest }) {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivatePage;
