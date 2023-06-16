import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaGoogle,FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaInstagram} from "react-icons/fa";
import BrandCarocel from '../BrandCarocel/BrandCarocel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const RightSide = () => {
  const {googleSignIn}=useContext(AuthContext);
  const handleGoogleSignIn=()=>{
    googleSignIn()
   .then(result=>{
    const user=result.user;
    console.log('user',user)
   })
   .catch(error=>{
    console.error(error)
   })
  }
    return (
        <div>
        <ButtonGroup vertical>
        <Button variant="outline-primary" className='mb-2'onClick={handleGoogleSignIn} ><FaGoogle></FaGoogle>&nbsp;&nbsp;sign in with google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub>&nbsp;&nbsp;sign in with github</Button>
      </ButtonGroup>
      <div>
        <h5>find us on</h5>
        <ListGroup>
      <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook>&nbsp;&nbsp;Cras justo odio</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp>&nbsp;&nbsp;Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter>&nbsp;&nbsp;Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitch></FaTwitch>&nbsp;&nbsp;Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaInstagram></FaInstagram>&nbsp;&nbsp;Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
      <div>
        <BrandCarocel></BrandCarocel>
      </div>
      </div>
    );
};

export default RightSide;