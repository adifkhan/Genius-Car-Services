import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const ResetPass = () => {
    let errorElement;
    const emailRef = useRef('');

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
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
                    {errorElement}
                </div>
            </div>
        </div>
    );
};

export default ResetPass;