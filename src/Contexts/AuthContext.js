import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import "./../firebase/firebase";

//creating context
const AuthContext = createContext();

//using the context
export const useAuth = () => {
    return useContext(AuthContext);
};

//creating auth provider which will wrap app.js
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    //observer
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    //sign up function
    const signup = async (email, password, username) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });
        //updating local state
        const user = auth.currentUser;
        setCurrentUser({ ...user });
    };

    //login function
    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };
    //logout function
    const logout = () => {
        const auth = getAuth();
        return signOut(auth);
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
