import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ResetPass = () => {
    let errorElement;
    const emailRef = useRef('');

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
    }
    if (sending) {
        return <Loading></Loading>
    }
    return (
        <div className='container'>
            <div className=' my-3 w-50 mx-auto border border-2 p-3'>
                <h2 className='text-center fs-2 mb-4'>Password Reset</h2>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Button className='w-100 mb-2' variant="dark" type="submit">
                            Reset
                        </Button>
                    </Form>
                    <ToastContainer></ToastContainer>
                    {errorElement}
                </div>
            </div>
        </div>
    );
};

export default ResetPass;