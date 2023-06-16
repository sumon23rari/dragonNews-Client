import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const LogIn = () => {
    const {logInUser,loading,setLoading}=useContext(AuthContext);
    const [error,setError]=useState('');
    const location=useLocation();
    const navigate=useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        logInUser(email,password)
        .then((result)=>{
            console.log(result.user)
            const user=result.user;
            form.reset();
            setError('');
            if (user.emailVerified) {
                navigate(from, { replace: true });
            } 
            else {
                toast.error('your email is not verified')
            }
           
        })
        .catch((error)=>{
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finall(()=>{
            setLoading(false)
        })
    }
 
    return (
        <Container>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">

</Form.Text>
<Form.Text className="text-danger">
    {error}
</Form.Text>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
               
            </Form>
           </Container>
    );
};

export default LogIn;