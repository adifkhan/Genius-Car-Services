import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found - The Car Doctor</title>
            </Helmet>
            <h3>404</h3>
            <h4>Page Not Found</h4>
        </div>
    );
};

export default NotFound;