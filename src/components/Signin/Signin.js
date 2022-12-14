import React, { useContext, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import './Signin.css';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';


import pic1 from '../../images/Homepage/1.jpg';
import pic2 from '../../images/Homepage/2.jpg';
import pic3 from '../../images/Homepage/3.jpg';
import pic4 from '../../images/Homepage/4.jpg';
import pic5 from '../../images/Homepage/5.jpg';
import pic6 from '../../images/Homepage/6.jpg';
import pic7 from '../../images/Homepage/7.jpg';
import { AuthContext } from '../UserContext/UserContext';

const Signin = () => {
    
    const {signInUser} = useContext(AuthContext)
    console.log("Signed IN User ",signInUser);
    
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [userEmail, setUserEmail] = useState('')
    const [successLogin, setSuccessLogin] = useState(false);
    const [visible, setVisible] = useState(false);
    const passwordFieldType = visible ? "text" : "password";
    
    
    const handleLogin = (event) => {
        event.preventDefault();
        setSuccessLogin(false);


        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            //console.log(user);
            Swal.fire(
                `Hi! ${user.email}`,
                'You are Logged In Successfully',
                'success'
            );
            event.target.reset();
            // navigate('/topics');
            navigate(from, {replace: true})

        })
        .catch(error => {
            console.error(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sign in failed!'
            })
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
                <p className='register-title-link'>New to this website? <Link to='/register'> Register</Link></p>
                <div className='d-flex justify-content-between mt-2 reset-password-parent-div'>
                    {/* <p className='my-2'>Forget Password? <Link to='/home'> <button type="button" className="btn btn-link reset-password-link-button">Reset Password</button></Link></p> */}
                    <p className='my-2'>Forget Password? <button type="button" className="btn btn-link reset-password-link-button">Reset Password</button></p>
                </div>
            </div>
        </div>
    );
};

export default Signin;