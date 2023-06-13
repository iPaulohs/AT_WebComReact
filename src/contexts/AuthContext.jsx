import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export default function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        localStorage.setItem('authUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('authUser');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const expirationTime =86400 * 1000; 
    const authUser = JSON.parse(localStorage.getItem('authUser'));

    if (authUser && authUser.stsTokenExpiresAt) {
      const tokenExpiration = new Date(authUser.stsTokenExpiresAt).getTime();
      const currentTime = new Date().getTime();

      if (tokenExpiration - currentTime <= expirationTime) {
        const auth = getAuth();
        signOut(auth);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
