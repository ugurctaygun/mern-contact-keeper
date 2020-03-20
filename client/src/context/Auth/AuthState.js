import React, { useReducer } from 'react';
import authReducer from '../Auth/authReducer';
import AuthContext from '../Auth/authContext';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };

    const [state,dispatch] = useReducer(authReducer, initialState);

   // Load User

   // Register User

   // Login User

   // Logout

   // Clear Errors

    return (
    <AuthContext.Provider
    value={{
       token: state.token,
       isAuthenticated: state.isAuthenticated,
       loading: state.loading,
       user: state.user,
       error: state.error
    }}
    >
        {props.children}
    </AuthContext.Provider>
    )
};

export default AuthState;