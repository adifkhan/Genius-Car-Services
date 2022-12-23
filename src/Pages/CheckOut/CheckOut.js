import React from 'react';
import { Helmet } from 'react-helmet-async';

const CheckOut = () => {
    return (
        <div className='text-center'>
            <Helmet>
                <title>Check Out - The Car Doctor</title>
            </Helmet>
            <h2 className='my-5'>This is Check Out Page</h2>
            <h3 className='mb-5'>Thanks for ordering our services</h3>
        </div>
    );
};

export default CheckOut;