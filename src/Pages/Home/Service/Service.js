import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();

    const navigateServiceDetails = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='service-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateServiceDetails(id)} className='service-book-btn bg-dark'>Book This Service</button>
        </div>
    );
};

export default Service;