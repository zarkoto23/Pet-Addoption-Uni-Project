import { createContext, useContext } from "react";

export const UserContext=createContext({
    _id:'',
    email:'',
    password:'',
    token:'',

    userLoginHandler:()=>null

})

export function useUserContext(){
    const data=useContext(UserContext)

    return data
}