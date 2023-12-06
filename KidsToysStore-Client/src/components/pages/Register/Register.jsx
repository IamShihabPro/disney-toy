import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import kid from '../../../assets/images/registerKid.jpg'
import { useTitle } from '../../hooks/useTitle';

const Register = () => {
const {register} = useContext (AuthContext)
const location = useLocation()
const navigate = useNavigate()
const from = location.state?.from?.pathname || '/';

const [error,  setError] = useState ('')

useTitle ('register')





    const handleRegiter = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);


        register (email, password)
        .then ((res) => { 


            const currentUser = res.user;


            updateProfile (currentUser, {

                displayName : name, photoURL :photo
            })

            navigate (from, { replace: true })



            console.log (currentUser)
        })
        .catch (err => {console.log (err)

            setError  (err.message)
        
        
        })







    }
    return (
        <div>
 <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <div className="text-center lg:text-left">
                       <img className='w-96' src= {kid} alt="" />
                       <h1 className='text-3xl font-extrabold'>Register Now to enjoy all Features of Disney<span className='text-red-400'>Toys</span></h1>
                    </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleRegiter} className="card-body">
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input required type="text" name='photo' placeholder="URL" className="input input-bordered" />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Register</button>
                            </div>
                            <p>Already have an account? <Link className='text-blue-500' to = "/logIn">Log In</Link></p>
                        </Form>
                    </div>
                </div>
            </div>        </div>
    );
};

export default Register;