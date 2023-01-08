import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

const MyUserList = () => {
    const [users, setUsers] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const apiUrl = `${process.env.REACT_APP_API_URL}/users`
        const result = await axios.get(apiUrl);
        setUsers([...result.data.data]);
    }


    return (
        <>
            <h2>My User List</h2>
            <Button onClick={() => navigate('/my-user-list/add')} className="mb-1" variant="warning">Add new User</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <img src={user.avatar}/>
                                </td>
                                <td>
                                    <Button onClick={() => navigate("/my-user-list/" + user.id)} size="sm" variant='info'>edit</Button>
                                    {/* <Button size="sm" variant='primary'>
                                        <Link to={"my-user-list/" + user.id}>Edit</Link>
                                    </Button> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default MyUserList