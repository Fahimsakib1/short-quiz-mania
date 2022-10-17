import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo1 from '../../images/Logo1-NoBg.png';
import logo2 from '../../images/Logo2-NoBg.png';
import logo3 from '../../images/Logo3-NoBg.png';
import logo4 from '../../images/Logo4-NoBg.png';
import logo5 from '../../images/Logo4.PNG';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import Swal from 'sweetalert2'

const Header = () => {
    const { user, handleSignOut } = useContext(AuthContext);
    //console.log("User consume on header",user);


    const signOutUser = () => {
        handleSignOut()
            .then(() => {
                // Swal.fire(
                //     'Good job!',
                //     'Log out Done',
                //     'success'
                // );
            })

            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" className='pb-4 navbar-container'>
            <Container className='d-flex flex-md-column flex-lg-row flex-xl-row'>

                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <Navbar.Brand href="#home"><img className='img-fluid header-image' src={logo5} alt="" /></Navbar.Brand>
                    <Link className='header-title' to="/"><span className='website-title'>Quiz Mania</span></Link>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    <Nav className='header-links'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/topics'>Topics</NavLink>
                        {/* <NavLink to='/charts'>Charts</NavLink> */}
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        {/* <NavLink to='/register'>Register</NavLink> */}
                        {/* <NavLink to='/login'>Login</NavLink> */}
                        {
                            user?.uid
                                ?
                                <Link onClick={signOutUser} className='text-danger'>Log Out</Link>
                                :
                                <>
                                    <NavLink to='/register'><span style={{color:"goldenrod"}}>Register</span></NavLink>

                                    <Link to='/login'><span style={{color:"goldenrod"}}>Login</span></Link>
                                </>
                        }
                        <div className='my-auto text-warning'>
                            {
                                user?.uid ?
                                    <span> Welcome, {user.email}</span>
                                    :
                                    <p>{''}</p>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;