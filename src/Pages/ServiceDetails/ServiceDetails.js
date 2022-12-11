import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className='text-center'>
            <h2 className='my-5'>See Our Complete Service Plan {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-dark mb-5'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;