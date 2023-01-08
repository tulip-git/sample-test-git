import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const ViewUserList = () => {
    const [viewUser, setViewUser] = useState({})
    const { id } = useParams();
    
    useEffect = (() => {
        console.log("use 1")
        getUserById()
        console.log("use 2")
    }, [])

    
 
     

    const apiUrl = `https://reqres.in/api/users/${id}`

    const getUserById = async () => {
        debugger
        const result = await axios.get(apiUrl)
        setViewUser(result.data.data)
    }

    return (
        <div>
            <ul>
                <li>
                    First Name:{viewUser.first_name}</li>
                <li>
                    Ladt Name:{viewUser.last_name}</li>
                <li>
                    Email:{viewUser.email}</li>
                <li><img src={viewUser.avatar} /></li>
            </ul>
        </div>
    )
}
