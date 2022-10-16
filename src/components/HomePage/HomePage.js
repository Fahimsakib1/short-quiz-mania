import React, { useState } from 'react';
import './HomePage.css'
import login from '../../images/Login.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa"








const HomePage = () => {

    const auth = getAuth(app);
    const [success, setSuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const passwordFieldType = visible ? "text" : "password";
    const [alreadyExistUser, setAlreadyExistsUser] = useState('');


    const handleRegister = (event) => {
        setSuccess(false);
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        if (!/.{6}/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be 6 characters long'
            });
            setPasswordError('Password must be 6 characters long');
            return;
        }

        if (!/(?=.*[0-9])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to add 1 digit (0-9) at least'
            });
            setPasswordError('You have to add 1 digit (0-9) at least');
            return;
        }
        setPasswordError('')

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'User added successfully!',
                    'success'
                );
                setSuccess(true);
                emailVerification();
                updateUserName(name);
                event.target.reset();
            })

            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error Occurred',
                    text: 'Something went wrong'
                })
            })

    }


    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                Swal.fire(
                    'Hello!',
                    'Please check your email and verify email address',
                    'success'
                )
            })
    }


    const updateUserName = (userName) => {
        updateProfile(auth.currentUser, {
            displayName: userName
        })
            .then(() => {
                console.log("User Name Updated")
                toast.success('Congratulations! User Name Updated Successfully', {
                    position: "top-center",
                    autoClose: 1000,
                });
            })

            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div className='home-parent-div row row-cols-1 row-cols-lg-2  px-5 container g-col-4 mx-auto mt-4'>
            <div className='image-div'>
                <img className='img-fluid login-image' src={login} alt="" />
            </div>

            <div className=' registration-form-parent-div '>
                <div className=' form-div mt-4 mx-auto registration-form-container px-4'>
                    {/* <h2 className='text-center'> Bootstrap Registration Form</h2> */}
                    <h4 className='text-primary mt-3 text-center'>New User? Please Register</h4>

                    <Form onSubmit={handleRegister} className=''>

                        <Form.Group className="mb-1" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <div>
                                <div>
                                    <Form.Control type="text" placeholder="Enter Your Name" name="name" required />
                                </div>
                                <div className='envelope-icon-div'>
                                    <FontAwesomeIcon className='envelope-icon' icon={faUser}></FontAwesomeIcon>
                                </div>
                            </div>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <div>
                                <div>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" required />
                                </div>
                                <div className='envelope-icon-div'>
                                    <FontAwesomeIcon className='envelope-icon' icon={faEnvelope}></FontAwesomeIcon>
                                </div>
                            </div>
                        </Form.Group>


                        <Form.Group className=" mb-3 password-react-parent-div" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <div className=''>
                                <div>
                                    <Form.Control className='password-input-field' type={passwordFieldType} placeholder="Password" name="password" required />
                                </div>

                                <div className='envelope-icon-div'>
                                    {
                                        visible ? <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                                    }
                                </div>
                            </div>
                        </Form.Group>

                        {
                            <p className='text-danger'>{passwordError}</p>
                        }

                        {
                            success && <p className='user-added-successfully-text-color'> User Added Successfully</p>
                        }

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>

                    <p className='my-2'>Already have an account? <Link to='/login'>Login</Link></p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <hr className='w-50 me-2'/>
                        <span className='fs-5'>or</span>
                        <hr className='w-50 ms-2' />
                    </div>

                    <div className='google-github-facebook-button-container text-center mt-3'>
                        <div className='google-button-container rounded-4 mb-3 '>
                            <button className='google-button border border-0 btn btn-primary-google w-75'>Google Sign in <Link className='m-1 ms-3' title="Google" target="_blank" role="button"><FaGoogle className='fs-4 google-icon-form'></FaGoogle></Link></button>
                            
                        </div>

                        <div className='facebook-button-container  rounded-4 mb-3'>
                            <button className='facebook-button border border-0 btn btn-primary-facebook w-75'>Facebook Sign in <Link className='m-1 ms-2' title="Facebook" target="_blank" role="button"><FaFacebook className='fs-3 facebook-icon-form'></FaFacebook></Link></button>
                        </div>

                        <div className='github-button-container  rounded-4 mb-3 '>
                            <button className='github-button border border-0 btn btn-primary-github w-75'>Github Sign in <Link className='m-1 ms-2' title="GitHub" target="_blank" role="button"><FaGithub className='fs-3 github-icon-form  fw-bold'></FaGithub></Link></button>
                            
                        </div>
                        
                    </div>

                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default HomePage;