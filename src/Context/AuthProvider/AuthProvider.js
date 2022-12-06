import { React, useState, createContext, useEffect } from 'react';
import app from '../../FireBase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const updateUserName = (userName) => {
        return updateProfile(auth.currentUser, userName)
    }
    const Logout = () => {
        return signOut(auth)
    }
    const authInfo = { user, createUser, SignIn, loading, Logout, updateUserName, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;