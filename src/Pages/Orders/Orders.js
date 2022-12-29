import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Order.css'

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [orderedService, setOrderedService] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrder = async () => {
            const url = `http://localhost:5000/order?email=${user.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrder();
    }, [user]);

    useEffect(() => {
        const serviceId = orders.map(order => order.id)
        axios.post('http://localhost:5000/orders', serviceId)
            .then(response => {
                const { data } = response;
                setOrderedService(data);
            })
    }, [orders]);

    return (
        <div className='order-container'>
            <h5>My Order List</h5>
            <div>
                {
                    orderedService.map(service => <div
                        className='order-list'
                        key={service._id}>
                        <div className='order'>
                            <img src={service.img} alt="" />
                            <div className='order-details'>
                                <div>
                                    <p>{service.name}</p>
                                    <p>Price: {service.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Orders;