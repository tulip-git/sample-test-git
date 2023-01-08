import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import axios from 'axios';
import {toast } from 'react-toastify';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState({});
  const { register, handleSubmit, watch,reset , formState: { errors } } = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(id)
    {
      getUserInfo(id);
    }
  }, [])

  const getUserInfo = async(id) => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/users/${id}`;
    const result = await axios.get(apiUrl);
    setUser(result.data.data);
    reset(result.data.data);
  }
  const onSubmit = (user) => {
    if(id) {
      //update
      user.id = id;
      toast("update user info succ....")
    } else{
      //insert
      toast.success("insert user info succ....")
    }

    console.log(user)
    navigate("/my-user-list");
  }


  return (
    <Row>
      <Col>
        <h3>User Info</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control {...register("first_name",{ required: true })} type="text" />
            <Form.Text className="text-danger">
            {errors.first_name && <span>This field is required</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control {...register("last_name")} type="text"  />
            <Form.Text className="text-muted">
              enter valid last name
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register("email")} type="email" />
          </Form.Group>
          <Button variant="primary" type="submit" className='mr-2'>
            Submit
          </Button>
          <Link to="/my-user-list">back to list</Link>
        </Form>
      </Col>
    </Row>
  )
}

export default UserDetails