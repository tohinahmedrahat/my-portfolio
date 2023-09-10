import React from 'react';
import { Link } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='mt-10 mb-5'>
            <div className='flex gap-x-10 justify-center items-center'>
                <Link to="/" className='uppercase hover:text-white'>Home</Link>
                <Link to="about" className='uppercase hover:text-white'>About</Link>
                <Link className='uppercase hover:text-white'>Works</Link>
                <Link to="contact" className='uppercase hover:text-white'>Contact</Link>
            </div>
            <h5 className='text-center mt-5 font-medium capitalize'><BiCopyright className='inline'></BiCopyright> All rights reserved by admin</h5>
        </div>
    );
};

export default Footer;