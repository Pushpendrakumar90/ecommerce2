import React from 'react';
import {auth} from './auth';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  return auth() ? <Outlet/> : <Navigate to='/login' replace/>;
}
