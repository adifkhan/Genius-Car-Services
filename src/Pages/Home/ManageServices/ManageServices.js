import React from 'react';
import { useForm } from "react-hook-form";
import Services from '../Services/Services';


const ManageServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://the-car-doctor.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container my-5'>
            <div className='mx-auto w-50' >
                <h3 className='text-center mb-4'>Add new Services</h3>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Photo URL' type="taxt" {...register("img", { required: true })} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='btn btn-dark' type="submit" value="Add Service" />
                </form>
            </div>
            <Services></Services>
        </div>
    );
};

export default ManageServices;