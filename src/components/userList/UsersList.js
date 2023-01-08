import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'


export const UsersList = () => {
    const [usersList, setUsersList] = useState([])
    const [viewUser, setViewUser] = useState({})
    const [viewUserInside, setViewUserInside] = useState(false)
    const [insertUser, setInsertUser] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const nameRef = useRef()
    const lastNameRef = useRef()

    const apiUrl = "https://reqres.in/api/users"

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const result = await axios.get(apiUrl)
        setUsersList(result.data.data)
    }
    const getUserById = async (id) => {

        const apiUrls = `${apiUrl}/${id}`
        const results = await axios.get(apiUrls)
        setViewUser(results.data.data)

    }
    const whichTable = async (id, wichType) => {
        switch (wichType) {
            case 1:
                {
                    setViewUserInside(true)
                    setEditUser(false)
                    setInsertUser(false)
                    getUserById(id)
                }
                break;
            case 2:
                {
                    setInsertUser(true)
                    setViewUserInside(false)
                    setEditUser(false)
                }
                break;
            case 3:
                {
                    setEditUser(true)
                    setViewUserInside(false)
                    setInsertUser(false)
                    getUserById(id)
                }
                break;
        }
    }
    const addOrEdit = async (mode) => {
        let user = {}
        user.name = nameRef.current.defaultValue
        user.lastName = lastNameRef.current.value

        if (mode) {
            user.id = viewUser.id
            await updateUser(user)
        }
        else {
            await insert(user)
        }
    }
    const insert = async (user) => {
        const result = await axios.post(apiUrl, user)
        alert("insert is done")
    }
    const updateUser = async (user) => {
        const editUrl = `${apiUrl}/${user.id}`
        const result = await axios.put(editUrl, user)
        alert("update is done")
        setViewUser({})
        setEditUser(false)
    }
    const deleteUser = async (id) => {
        if (!window.confirm("Are You Sure?")) return
        const deleteUrl = `${apiUrl}/${id}`
        const result = await axios.delete(deleteUrl)
        alert("Done!")
        const tempList = usersList.filter(item => item.id != id)
        setUsersList(tempList)
    }
    return (
        <div>
            <>
                <div>
                    <button onClick={async () => await whichTable(null, 2)}>Insert</button>
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
                                    <button onClick={async () => await whichTable(user.id, 1)}>view</button>
                                </td>

                                <td> <button onClick={async () => await whichTable(user.id, 3)}>Edit</button>  </td>
                                <td><button onClick={async () => await deleteUser(user.id)}>Delete</button></td>
                                <td>
                                    <Link to={'ViewUserList/' + user.id}>
                                        not working view
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br />
                <table style={{ display: viewUserInside ? 'block' : 'none' }}>
                    <tr>
                        <td>
                            First Name:
                            <label>{viewUser.first_name}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name:
                            <label>{viewUser.last_name}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <label>{viewUser.email}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={viewUser.avatar} />
                        </td>
                    </tr>
                </table >
                <table style={{ display: insertUser ? 'block' : 'none' }}>
                    <tr>
                        <td>
                            First Name:
                            <input ref={nameRef} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name:
                            <input ref={lastNameRef} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <input />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button onClick={async () => addOrEdit(false)}>add</button>
                        </td>
                    </tr>
                </table >
                <table style={{ display: editUser ? 'block' : 'none' }}>
                    <tr>
                        <td>
                            First Name:
                            <input ref={nameRef} defaultValue={viewUser.first_name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name:
                            <input ref={lastNameRef} defaultValue={viewUser.last_name} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                            <input defaultValue={viewUser.email} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={viewUser.avatar} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={async () => addOrEdit(true)}> edit </button>
                        </td>
                    </tr>
                </table >
            </>
        </div >

    )
}
