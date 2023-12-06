import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import notFound from '../../assets/Anim/404.json'
const ErrorPage = () => {
    return (
        <div className='my-52'>

            <Link to = "/" className='button-primary'>Back to home</Link>
            <Lottie animationData={notFound} />;


            
        </div>
    );
};

export default ErrorPage;