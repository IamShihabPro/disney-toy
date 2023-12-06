import {  GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import kid from '../../../assets/images/kidLogIn.jpg'
import { useTitle } from '../../hooks/useTitle';


const LogIn = () => {


    const {logIn, googleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('')

    useTitle  ('Login')




    const handleLogIn = (e) => {

        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        logIn (email, password)
        .then ((res) => { 


            const currentUser = res.user;
            navigate (from, { replace: true })     

            console.log (currentUser)
        })
        .catch (err => {console.log (err)


            setError (`error  : ${err.message}`)
        
        
        
        })







    }

    const handleGoogleLogin = () => { 

        googleLogin ()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            navigate (from, { replace: true })

          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);


            setError (error.message)
            // ...
          });
        



    }



    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       <img className='w-96' src= {kid} alt="" />
                       <h1 className='text-3xl font-extrabold'>Log In Now to enjoy all Features of Disney<span className='text-red-400'>Toys</span></h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogIn} className="card-body">
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="button-primary">Login</button>
                            </div>
                            <p>New to Disney<span className='text-red-400 font-bold'>Toys</span>? <Link className='text-blue-500' to = "/register">Register</Link></p>
                        </Form>

                        <button onClick={handleGoogleLogin} className='flex items-center text-center mx-auto p-5 border rounded-lg my-2'>

                            <FcGoogle className='mr-2'></FcGoogle>
                            Continue with google




                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;