import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaEye, FaRegBookmark,FaShareAlt, FaStar} from "react-icons/fa";
import Image from 'react-bootstrap/Image';
const NewsSummaryCard = ({news}) => {
    const{_id,title,author,details,image_url,total_view,rating}=news;
    return (
        <Card className="text-center mb-5">
        <Card.Header className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
                <Image
                roundedCircle
                style={{height:'60px'}}
                className='me-2'
                src={author?.img}
                ></Image>
                <div>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
          {
            details.length >200 ?
            <> {details.slice(0,250)+ '...'} <Link to={`/news/${_id}`}>read more</Link> </> :
          details
          }
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className='me-2'></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;