import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);

    return (
        <div id='services' className='container my-5'>
            <div className='mt-5'>
                <h1 className='services-title text-center'>Our Services</h1>
                <div className='service-container'>
                    {
                        services.map(service =>
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;