import { useEffect, useState } from "react"
import requester from "../utils/requester"
import { toast } from "react-toastify"

const petsUrl='http://localhost:3030/data/pets'


export const usePets=()=>{
    const[pets, setPets]=useState([])
    

    useEffect(()=>{
        requester.get(petsUrl)
        .then(setPets)
        .catch((err)=>{
            toast.error(err.message||'Something went wrong!')
        })
        
    },[])

    return {pets}


}

export const usePet=(petId)=>{
    const [pet, setPet]=useState({})

    useEffect(()=>{
        requester.get(`${petsUrl}/${petId}`
        )
        .then(setPet)
        .catch((err)=>{
            toast.error(err.message||'Something went wrong')
        })

    },[petId])

    return pet
}


export const useCreate=()=>{

    const create=(data)=>{
    const authData = JSON.parse(localStorage.getItem('auth'));

    requester.post(petsUrl ,data, {headers:{'X-Authorization':authData.accessToken} })
    }


    return {
        create
    }
    
}