import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import Home from "../static-components/Home"
import { Outlet } from "react-router-dom"

export default function GuestGuard() {
    const {accessToken}=useContext(UserContext)
    if(accessToken){
        return <Home/>
    }
  return(
    <Outlet/>
    
)
}