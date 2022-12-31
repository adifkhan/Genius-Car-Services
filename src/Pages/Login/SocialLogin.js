import React from 'react';
import googleLogo from '../../images/social/Google-Logo.png';
import facebookLogo from '../../images/social/Facebook-Logo.png';
import githubLogo from '../../images/social/Github-Logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../Hooks/useToken';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/home";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className='text-danger'>{error?.message}{error1?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='d-flex justify-content-center align-items-center w-75 mx-auto btn btn-dark my-1 rounded-5'>
                    <img className='mx-2' style={{ width: "20px" }} src={googleLogo} alt="" />
                    Login WithGoogle</button>
                <button className='d-flex justify-content-center align-items-center w-75 mx-auto btn btn-dark my-1 rounded-5'>
                    <img className='mx-2' style={{ width: "20px" }} src={facebookLogo} alt="" />
                    Login With Facebook</button>
                <button
                    onClick={() => signInWithGithub()}
                    className='d-flex justify-content-center align-items-center w-75 mx-auto btn btn-dark my-1 rounded-5'>
                    <img className='mx-2' style={{ width: "25px" }} src={githubLogo} alt="" />
                    Loging With Github</button>
            </div>
            {errorElement}
            <div className='d-flex align-items-center justify-content-center'>
                <div className='bg-dark' style={{ width: "200px", height: "1px" }}></div>
                <p className='m-3'>or</p>
                <div className='bg-dark' style={{ width: "200px", height: "1px" }}></div>
            </div>
        </div>
    );
};

export default SocialLogin;