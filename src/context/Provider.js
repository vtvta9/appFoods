import React, { createContext, useReducer } from "react"
import { SignInReducer } from "../reducers/authReducer"

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
        userToken: null,
    });

    return (
        <GlobalContext.Provider
            value={{signedIn, dispatchSignedIn}}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
