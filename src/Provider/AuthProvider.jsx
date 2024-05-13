import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebease.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const githubSignIn = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };

    const login = (email, password) => {
        setLoading(loading);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(loading);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    const authInfo = { user, loading, createUser, googleSignIn, githubSignIn, login, logout };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}