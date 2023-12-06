import React from 'react';
import logo from '../../../src/assets/logo.png'
import { FaFacebook, FaInstagram, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-gray-800  text-white mt-10">
                <div>
                    <div className='flex items-center'>


                        <img className='w-20' src={logo} alt="" />
                        <h4 className='text-3xl font-extrabold'>Disney<span className='text-red-400'>Toys</span></h4>
                    </div>    
                    <p className='flex items-center'><FaRegCopyright></FaRegCopyright> Copyright {new Date().getFullYear()} by Disney Toys</p>
                    <p>Bahaddar, Chattogram, Bangladesh</p>
                    <p>Mobile : 01850411622</p>
                    <p>Emal : mshihab.pro@gmail.com</p>
                </div>
                <div>
                    <span className="footer-title">Contact With Us</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Find us on social media</span>
                   <div className='flex  space-x-2'>

                   <a href='' className='text-3xl text-blue-500'> <FaFacebook></FaFacebook></a>
                    <a href='' className='text-3xl text-red-500'> <FaInstagram></FaInstagram></a>
                   </div>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;