import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    let errorElement;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div className='container'>
            <Helmet>
                <title>Login - The Car Doctor</title>
            </Helmet>

            <div className=' my-3 w-50 mx-auto border border-2 p-3'>
                <h2 className='text-center fs-2 mb-4'>Login</h2>
                <SocialLogin></SocialLogin>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='w-100 mb-2' variant="dark" type="submit">
                            Login
                        </Button>
                    </Form>
                    {errorElement}
                    <p className='text-center'>Forgot Password? <Link className='text-decoration-none text-primary fw-bold' to='/resetPass'>Reset Now</Link></p>
                    <p className='text-center'>New to The Car Doctor? <Link className='text-decoration-none text-primary fw-bold' to='/register'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;