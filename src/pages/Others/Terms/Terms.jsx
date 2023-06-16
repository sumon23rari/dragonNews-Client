import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>hear is our terms and Conditions</h3>
            <p>go back to registration: <Link to="/register">register</Link></p>
        </div>
    );
};

export default Terms;