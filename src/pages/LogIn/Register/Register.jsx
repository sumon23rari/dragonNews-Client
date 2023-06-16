import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const {createUser,updateUserProfile,verifyEmail}=useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [error,setError]=useState('');
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
       createUser(email,password)
       .then((result)=>{
        const user=result.user;
        console.log(user)
        setError('');
       
        handleUpdateUserProfile(name,photo)
        handleEmailVerify()
        toast.success('please! verify your email address')
        form.reset()
       })
       .catch((error)=>{
        const errorMessage = error.message;
            setError(errorMessage)
       })
    }
    const handleUpdateUserProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
                }
        updateUserProfile(profile)
        .then(result=>{})
        .catch((error)=>console.log(error))
    }
    const handleEmailVerify=()=>{
        verifyEmail()
        .then(()=>{})
        .catch((error)=>{
            console.error(error)
        })
    }
    const handleChecked=(event)=>{
        setAccepted(event.target.checked)
    }
    return (
        <Container>
        <h3>Please register</h3>
        <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      
                        type="checkbox"
                        onClick={handleChecked}
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">

</Form.Text>
<Form.Text className="text-danger">
{error}
</Form.Text>
<br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
          
            </Form>
       </Container>
    );
};

export default Register;