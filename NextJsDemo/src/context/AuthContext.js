import { createContext, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "../hooks/useStorage";


const initials = {
    isLoggedIn: useLocalStorage("access_token", "get") ? true : false,
    user: useLocalStorage('access_token', "get") ? jwtDecode(useLocalStorage('access_token', "get")) : {}
};

export const AuthContext = createContext({
    settings: initials
});

export const AuthProvider = ({children}) => {
    const [auth, setAuth]= useState({...initials});

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}