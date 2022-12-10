import React, { useContext, useState } from 'react';
import './Registration.css';
import login from '../../images/Login.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa"
import { AuthContext } from '../UserContext/UserContext';



const Registration = () => {

    const { createUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);
    
    const [success, setSuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const passwordFieldType = visible ? "text" : "password";
    const [alreadyExistUser, setAlreadyExistsUser] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        setSuccess(false);
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

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

        if(password !== confirmPassword){
            setConfirmPasswordError('Password is not matching');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is not matching'
            });
            return;
        }

        setPasswordError('')

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("Registered user", user);
                Swal.fire(
                    'Great',
                    'User created successfully!',
                    'success'
                );
                setSuccess(true)
                event.target.reset();
                navigate(from, {replace: true})
            })

            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error Occurred',
                    text: 'Something went wrong!'
                })
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log("Registered user By Google", user);
                Swal.fire(
                    'Yayy',
                    'Successful Sign In By Google',
                    'success'
                );
                navigate('/topics');
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }


    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log("Successful Sign In By GitHub");
                Swal.fire(
                    'Done',
                    'Successful Sign In By GitHub',
                    'success'
                )
                navigate('/topics');
                console.log(user);

            })
            .catch(error => {
                console.error("error", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }


    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then((result) => {
                const user = result.user;
                console.log("Successful Sign In By Facebook");
                Swal.fire(
                    'Done',
                    'Successful Sign In By Facebook',
                    'success'
                )
                navigate('/topics');
                console.log(user);

            })
            .catch(error => {
                console.error("error", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }



    return (
        <div className='home-parent-div row row-cols-1 row-cols-lg-2  px-5 container g-col-4 mx-auto mt-4'>
            <div className='image-div my-auto'>
                <img className='img-fluid login-image' src={login} alt="" />
            </div>

            <div className='registration-form-parent-div '>
                <div className=' form-div mt-4 mx-auto registration-form-container px-4'>
                    {/* <h2 className='text-center'> Bootstrap Registration Form</h2> */}
                    <h4 className='text-primary mt-3 text-center'>New User? Please Register</h4>

                    <Form onSubmit={handleRegister} className='only-form'>

                        <Form.Group className="mb-1" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <div>
                                <div>
                                    <Form.Control
                                        className='name-input-field'
                                        type="text" placeholder="Enter Name" name="name" required />
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
                                    <Form.Control className='password-input-field' type={passwordFieldType} placeholder="Enter Password" name="password" required />
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


                        <Form.Group className=" password-react-parent-div" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>

                            <div className=''>
                                <div>
                                    <Form.Control className='password-input-field' type={passwordFieldType} placeholder="Confirm Password" name="confirmPassword" required />
                                </div>

                                <div className='envelope-icon-div'>
                                    {
                                        visible ? <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                                    }
                                </div>
                            </div>
                        </Form.Group>

                        {
                            <p className='text-danger'>{confirmPasswordError}</p>
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
                        <hr className='w-50 me-3' />
                        <span className='fs-5'>or</span>
                        <hr className='w-50 ms-3' />
                    </div>

                    <div className='google-github-facebook-button-container text-center mt-3'>
                        <div className='google-button-container rounded-4 mb-3'>
                            <button onClick={handleGoogleSignIn} className='google-button border border-0 btn btn-primary-google w-75'>Google Sign in <Link className='m-1 ms-3' title="Google" target="_blank" role="button"><FaGoogle className='fs-4 google-icon-form'></FaGoogle></Link></button>
                        </div>

                        {/* <div className='facebook-button-container  rounded-4 mb-3'>
                            <button onClick={handleFacebookSignIn} className='facebook-button border border-0 btn btn-primary-facebook w-75'>Facebook Sign in <Link className='m-1 ms-2' title="Facebook" target="_blank" role="button"><FaFacebook className='fs-3 facebook-icon-form'></FaFacebook></Link></button>
                        </div> */}

                        <div className='github-button-container  rounded-4 mb-3 '>
                            <button onClick={handleGithubSignIn} className='github-button border border-0 btn btn-primary-github w-75'>Github Sign in <Link className='m-1 ms-2' title="GitHub" target="_blank" role="button"><FaGithub className='fs-3 github-icon-form  fw-bold'></FaGithub></Link></button>

                        </div>

                    </div>

                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Registration;