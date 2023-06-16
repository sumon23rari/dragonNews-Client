import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [catagorys,setCatagorys]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/catagorinews`)
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    },[])
    return (
        <div>
            <h2>All catagory</h2>
           {
            catagorys.map(catagory=><p key={catagory.id}>
                <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
            </p>)
           }
        </div>
    );
};

export default LeftSide;