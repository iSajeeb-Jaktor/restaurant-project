import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';


const AuthContest = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const authInfo = {
        user,
        loading
    } 

    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;