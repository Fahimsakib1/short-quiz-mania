import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import pic1 from '../../images/Homepage/1.jpg';
import pic2 from '../../images/Homepage/2.jpg';
import pic3 from '../../images/Homepage/3.jpg';
import pic4 from '../../images/Homepage/4.jpg';
import pic5 from '../../images/Homepage/5.jpg';
import pic6 from '../../images/Homepage/6.jpg';
import pic7 from '../../images/Homepage/7.jpg';


const Login = () => {

    const auth = getAuth(app);
    const [userEmail, setUserEmail] = useState('')
    const [successLogin, setSuccessLogin] = useState(false);
    const [visible, setVisible] = useState(false);
    const passwordFieldType = visible ? "text" : "password";


    const handleLogin = (event) => {
        event.preventDefault();
        setSuccessLogin(false);


        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.emailVerified === false) {
                    setSuccessLogin(false);
                    Swal.fire({
                        icon: 'error',
                        title: 'You are not verified',
                        text: 'You must verify your email For Log in.. Please Check your email.'
                    })
                }

                else {
                    
                    setSuccessLogin(true);
                    Swal.fire(
                    'Great!',
                    'Logged in successfully',
                    'success'
                    )
                    event.target.reset();    
                    
                }
            })

            .catch(error => {
                console.error(error);
            })
    }


    const handleEmailOnBlur = (event) => {
        const email = event.target.value;
        console.log(email);
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must provide your email'
            })
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                Swal.fire(
                    'Hello User!',
                    'Password reset link has been sent to your email. Please check your email',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
            })

    }




    return (
        <div className='mx-auto my-5 container login-container'>
            <h4 className='text-primary mt-3 text-center'>Please Login</h4>

            <form onSubmit={handleLogin} className='login-form-container'>
                {/* <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input
                        type="email" className="form-control" id="formGroupExampleInput" placeholder="Add Your Email" name="email" required />
                </div> */}

                <div className="">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <div>
                        <input
                            onBlur={handleEmailOnBlur}
                            type="email" className="form-control" id="formGroupExampleInput" placeholder="Add Your Email" name="email" required />
                    </div>

                    <div className='envelope-icon-div'>
                        <FontAwesomeIcon className='envelope-icon' icon={faEnvelope}></FontAwesomeIcon>
                    </div>
                </div>



                {/* <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Add Password" name="password" required />
                </div> */}

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <div>
                        <input type={passwordFieldType} className="form-control" id="formGroupExampleInput2" placeholder="Add Password" name="password" required />
                    </div>

                    <div className='envelope-icon-div'>
                        {
                            visible ? <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon onClick={() => setVisible(!visible)} className='text-dark fw-bold' icon={faEye}></FontAwesomeIcon>
                        }
                    </div>

                </div>


                <div className=''>
                    <button type="submit" className='btn btn-primary text-center mx-auto px-4'>Login</button>
                </div>

                {
                    successLogin && <p className='login-successful-text-color'> Login Successful</p>
                }

            </form>

            <div className='d-flex justify-content-between login-lower-container'>
                <p className='register-title-link'>New to this website? <Link to='/home'> Register</Link></p>
                <div className='d-flex justify-content-between mt-2 reset-password-parent-div'>
                    {/* <p className='my-2'>Forget Password? <Link to='/home'> <button type="button" className="btn btn-link reset-password-link-button">Reset Password</button></Link></p> */}
                    <p className='my-2'>Forget Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link reset-password-link-button">Reset Password</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
