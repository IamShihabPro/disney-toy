import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../shared/Loader';

const PrivateRoutes = ({ children }) => {

    const location = useLocation()
    const { user, loader } = useContext(AuthContext)


    if (loader) {


        return <Loader></Loader>
     }

    if (!user) {

        toast("You have to log in first to view details")


    }

    

    if (user) {

        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRoutes;