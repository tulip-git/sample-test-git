import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

export const UserListSecond = () => {
    const [usersList, setUsersList] = useState([])


    const apiUrl = "https://reqres.in/api/users"

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const result = await axios.get(apiUrl)
        setUsersList(result.data.data)
    }

    return (
        <div>
            <div>
                <button >Insert</button>
            </div>
            <table style={{ border: "3px solid red" }}>
                <thead>
                    <tr style={{ border: "1px solid red" }}>
                        <th>first name</th>
                        <th>last name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((user, index) =>
                        <tr key={user.id} style={{ border: "1px solid red" }} >
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>
                                <button >view</button>
                            </td>

                            <td> <button>Edit</button>  </td>
                            <td><button>Delete</button></td>
                            <td>
                                <Link to={'ViewUserList/' + user.id}>
                                    not working view
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
