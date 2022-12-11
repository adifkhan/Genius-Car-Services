import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
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
                <h2 className='text-center fs-2'>Register</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" name='name' placeholder='Your Full Name' required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' placeholder='Your Email' required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' placeholder='Your Password' required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-dark">Register</button>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-decoration-none text-warning fw-bold' to='/login'>Login</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Register;