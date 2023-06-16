import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profiles = () => {
  const {user}=useContext(AuthContext) ;
  const [name,setName]=useState(user.displayName);
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(photoURLRef.current.value)
  }
  const handleOnChange=(event)=>{
        setName(event.target.value)
      
  }
  const photoURLRef=useRef(user.photoURL)
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" readOnly defaultValue={user?.email} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" onChange={handleOnChange}  defaultValue={user?.displayName}  placeholder="user name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="photourl">
        <Form.Label>User Photo</Form.Label>
        <Form.Control type="text" ref={photoURLRef} defaultValue={user?.photoURL}  placeholder="user photo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Profiles;