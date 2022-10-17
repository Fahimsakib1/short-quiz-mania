import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider(); 
    const providerFacebook = new FacebookAuthProvider(); 
    
    
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("Auth State Changed User", user);
        })

        return () => unsubscribe();

    }, [])
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, providerGithub);
    }

    const signInWithFacebook = () => {
        return signInWithPopup(auth, providerFacebook)
    }
    

    const authInfo = {user, createUser, signInUser, handleSignOut, signInWithGoogle, signInWithGithub, signInWithFacebook, loading}
    
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;