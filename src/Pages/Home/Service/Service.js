import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Order Now</button>
            </Link>
        </div>
    );
};

export default Service;