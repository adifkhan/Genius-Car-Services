import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import SocialLogin from './SocialLogin';


const Register = () => {
    let errorElement;
    const [agree, setAgree] = useState();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/login');
        signOut(auth);
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container'>
            <div className=' my-3 w-50 mx-auto border border-2 p-3'>
                <h2 className='text-center fs-2 mb-4'>Register</h2>
                <SocialLogin></SocialLogin>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control" name='name' placeholder='Your Full Name' required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" name='email' placeholder='Your Email' required />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" name='password' placeholder='Your Password' required />
                        </div>
                        <div className="mb-3 form-check">
                            <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" name='terms' id="terms" />
                            <label htmlFor='terms' className={`form-check-label ${agree ? '' : 'text-danger'}`}>Accept The Car Doctor's Terms & Conditions</label>
                        </div>
                        <button
                        disabled={!agree}
                        type="submit" className="btn btn-dark w-100">Register</button>
                    </form>
                    {errorElement}
                    <p className='text-center'>Already have an account? <Link className='text-decoration-none text-primary fw-bold' to='/login'>Login</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Register;