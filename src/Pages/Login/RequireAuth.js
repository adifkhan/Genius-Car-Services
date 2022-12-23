import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='container'>
            <Helmet>
                <title>Email verification</title>
            </Helmet>

            <div className='w-50 mx-auto text-center my-3 p-5 border border-2'>
                <h3 className='text-danger'>Your email is not verified</h3>
                <h4>Please verify your email to proceed</h4>
                <p>didn't find verification email?</p>
                <button className='btn btn-dark'
                    onClick={async () => {
                        console.log(user);
                        await sendEmailVerification();
                        toast('email sent');
                    }}>Re-send verification email</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;