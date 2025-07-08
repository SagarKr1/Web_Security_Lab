// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const isLoggedIn = localStorage.getItem('token'); // or your login check logic

    return isLoggedIn ? children : <Navigate to="/login" />;
}
