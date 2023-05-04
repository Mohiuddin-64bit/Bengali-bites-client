import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  GithubAuthProvider
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider
  const [loading, setLoading] = useState(true);

  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubSign = () => {
    return signInWithPopup(auth, gitHubProvider)
  }
  

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
      setLoading(false)
    };
  }, []);

  const forgotPassword = () => {
    return sendPasswordResetEmail(user.email);
  }


  const authInfo = {
    loading,
    user,
    createUser,
    singIn,
    logOut,
    googleSign,
    forgotPassword,
    sendEmailVerification,
    gitHubSign
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
