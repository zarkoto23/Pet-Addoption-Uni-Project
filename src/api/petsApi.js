import { use, useEffect, useState } from "react"
import requester from "../utils/requester"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const petsUrl='http://localhost:3030/data/pets'


export const usePets=()=>{
    const navigate=useNavigate()
    const[pets, setPets]=useState([])
    

    useEffect(()=>{
        requester.get(petsUrl)
        .then(setPets)
        .catch((err)=>{
            toast.error(err.message||'Something went wrong!')
            navigate('/')
        })
        
    },[navigate])

    return {pets}


}

export const usePet=(petId)=>{
    const [pet, setPet]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
        requester.get(`${petsUrl}/${petId}`
        )
        .then(setPet)
        .catch((err)=>{
            toast.error(err.message||'Something went wrong')
            navigate('/')

        })

    },[petId,navigate])

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