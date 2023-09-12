import React from 'react';
import blog from '../../img/gfonts.png'
import button from '../../img/icon.svg'
import icon from '../../img/icon2.png'
import { FaReact } from 'react-icons/fa';
import { BiLogoFirebase, BiLogoMongodb } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div>
            <div className='md:flex justify-center mt-10 items-center gap-x-5'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative pb-4 md:pb-10 md:p-10 m-1 md:m-0 rounded-3xl'>
                    <img src={blog} alt="" />
                    <h5 className='uppercase text-sm mt-3 ml-3 md:ml-0'>Blog</h5>
                    <h4 className='text-2xl text-white ml-3 md:ml-0'>Roboto</h4>
                    <button className='absolute bottom-10 right-5'><a href="#">
                        <img className='custom-img' src={button} alt="" />
                    </a></button>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='bg-[#1E1E1E] p-10 py-12 m-1 md:m-0 rounded-3xl relative'>
                    <div className='flex justify-center items-center gap-16 text-5xl text-white '>
                        <FaReact className='hover:text-gray-500'></FaReact>
                        <BiLogoFirebase className='hover:text-gray-500'></BiLogoFirebase>
                        <DiNodejs className='hover:text-gray-500'></DiNodejs>
                        <BiLogoMongodb className='hover:text-gray-500'></BiLogoMongodb>
                    </div>
                    <h5 className='uppercase mt-16'>specialization</h5>
                    <h4 className='text-2xl text-white'>Services Offering</h4>
                    <button className='absolute bottom-10 right-5'><Link to="service">
                        <img className='custom-img' src={button} alt="" />
                    </Link></button>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative p-8 m-1 md:m-0 rounded-3xl'>
                    <div className='flex w-full bg-[#181818] gap-5 p-5 rounded-lg'>
                        <div className='bg-[#3f3f3f] hover:bg-white cursor-pointer text-white hover:text-black  rounded-full'>
                            <a href="https://www.linkedin.com/in/tohim-ahmed/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className='text-3xl m-5'></AiOutlineLinkedin></a>
                        </div>
                        <div className='bg-[#3f3f3f] hover:bg-white cursor-pointer text-white hover:text-black rounded-full'>
                            <a href="https://twitter.com/tohinahmed15" target="_blank" rel="noopener noreferrer"><BsTwitter className='text-3xl m-5'></BsTwitter></a>
                        </div>
                    </div>
                    <h5 className='uppercase text-sm mt-7'>stay with me</h5>
                    <h4 className='text-2xl text-white'>Profile</h4>
                    <button className='absolute bottom-10 right-5'><Link to="about">
                        <img className='custom-img' src={button} alt="" />
                    </Link></button>
                </div>
            </div>
            <div className='md:flex justify-center mt-10 items-center gap-x-5'>
                <div className='bg-[#191919] md:grid grid-cols-3 gap-x-5 p-10 m-1 md:m-0 rounded-3xl'>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='bg-[#202020] flex flex-col justify-center items-center px-7 py-10 rounded-3xl'>
                        <h4 className='text-2xl text-white'>02</h4>
                        <h5 className='uppercase text-sm mt-3'>years experince</h5>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='bg-[#202020] flex flex-col justify-center items-center px-7 py-10 rounded-3xl my-3 md:my-0'>
                        <h4 className='text-2xl text-white'>00</h4>
                        <h5 className='uppercase text-sm mt-3'>CLIENTS WORLDWIDE</h5>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='bg-[#202020] flex flex-col justify-center items-center px-7 py-10 rounded-3xl'>
                        <h4 className='text-2xl text-white'>+20</h4>
                        <h5 className='uppercase text-sm mt-3'>TOTAL PROJECTS</h5>
                    </div>
                </div>
                <div data-aos="zoom-out-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative px-10 m-1 md:m-0 rounded-3xl'>
                    <img src={icon} alt="" />
                    <h3 className='text-4xl text-white font-medium mt-8 mr-16 pb-10'>let's <br /> work <span className='text-[#5B78F6]'>together</span></h3>
                    <button className='absolute bottom-10 right-5'><Link to="contact">
                        <img className='custom-img' src={button} alt="" />
                    </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Content;