import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div className='text-center'>
            <Helmet>
                <title>Details - The Car Doctor</title>
            </Helmet>
            <h2 className='my-5'>See Our Complete Service Plan</h2>
            <div className=''>
                <img className='w-50' src={service.img} alt="" />
                <h2>{service.name}</h2>
                <p>Price: {service.price}</p>
                <p><small>{service.description}</small></p>
            </div>
            <Link to='/checkout'>
                <button className='btn btn-dark mb-5'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;