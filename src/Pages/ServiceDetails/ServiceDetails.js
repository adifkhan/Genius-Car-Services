import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);

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
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-dark mb-5'>Place Order</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;