import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../../Hooks/useServiceDetails';
import './CheckOut.css';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            id: serviceId,
            service: service.name,
            userName: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your service is booked succesfully !');
                    navigate('/services');
                }
            })
    }

    return (
        <div className='checkout-container'>
            <Helmet>
                <title>Check Out - The Car Doctor</title>
            </Helmet>
            <div className='service-details'>
                <img src={service.img} alt="" />
                <div>
                    <p><strong>{service.name}</strong></p>
                    <p>Price: {service.price}</p>
                </div>
            </div>
            <h6>Please fill-up the form</h6>
            <form className='user-form' onSubmit={handlePlaceOrder}>
                <input type="text" name='service' value={service.name} required disabled readOnly />
                <input type="text" name='name' value={user?.displayName} required readOnly />
                <input type="email" name='email' value={user?.email} required readOnly />
                <input type="text" name='address' autoComplete='off' placeholder='Address' required />
                <input type="number" name='phone' placeholder='Phone No' required />
                <input type="submit" value="Check Out" className='btn btn-dark' />
            </form>
            <p className='mb-5'>Thanks for ordering our service</p>
        </div>
    );
};

export default CheckOut;