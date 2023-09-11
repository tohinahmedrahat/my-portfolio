import React from 'react';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { IoLocation, IoCallOutline } from 'react-icons/io5';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-10 mt-10 mb-16'>
            <div className='col-span-1'>
                <h4 className='text-white font-medium text-xl'>CONTACT INFO</h4>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex gap-5 items-center mt-5'>
                    <div className='bg-[#161616] rounded-xl'>
                        <AiOutlineMail className='text-3xl m-5 text-white'></AiOutlineMail>
                    </div>
                    <div>
                        <h5 className='uppercase font-medium'>mail us</h5>
                        <h6 className='text-white font-normal'>tohinahmed6@gmail.com</h6>
                    </div>
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex gap-5 items-center mt-5'>
                    <div className='bg-[#161616] rounded-xl'>
                        <IoCallOutline className='text-3xl m-5 text-white'></IoCallOutline>
                    </div>
                    <div>
                        <h5 className='uppercase font-medium'>contact us</h5>
                        <h6 className='text-white font-normal'>+8801317713199</h6>
                    </div>
                </div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex gap-5 items-center mt-5'>
                    <div className='bg-[#161616] rounded-xl'>
                        <IoLocation className='text-3xl m-5 text-white'></IoLocation>
                    </div>
                    <div>
                        <h5 className='uppercase font-medium'>location</h5>
                        <h6 className='text-white font-normal capitalize'>savar,dhaka</h6>
                    </div>
                </div>
                <h4 className='text-white font-medium text-xl mt-10'>SOCIAL INFO</h4>
                <div data-aos="zoom-out-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='flex items-center gap-5 mt-5'>
                    <div className='bg-[#161616] hover:bg-white cursor-pointer text-white hover:text-black  rounded-full'>
                        <a href="https://www.linkedin.com/in/tohim-ahmed/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className='text-3xl m-5'></AiOutlineLinkedin></a>
                    </div>
                    <div className='bg-[#161616] hover:bg-white cursor-pointer text-white hover:text-black rounded-full'>
                        <a href="https://twitter.com/tohinahmed15" target="_blank" rel="noopener noreferrer"><BsTwitter className='text-3xl m-5'></BsTwitter></a>
                    </div>
                    <div className='bg-[#161616] hover:bg-white cursor-pointer text-white hover:text-black rounded-full'>
                        <a href="https://www.facebook.com/Bleaklife" target="_blank" rel="noopener noreferrer"><BsFacebook className='text-3xl m-5'></BsFacebook></a>
                    </div>
                </div>
            </div>
            <div className='col-span-2 bg-[#191919] px-8 py-14 rounded-3xl'>
                <h2 className='text-4xl text-white font-medium'>Let’s work <span className='text-teal-700'>together.</span></h2>
                <form data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" action="">
                    <input className='block py-3 pl-5 outline-none w-full mt-5 rounded-lg' type="text" name="name" placeholder='Name' required id="" />
                    <input className='block py-3 pl-5 outline-none w-full mt-5 rounded-lg' type="email" name="email" placeholder='Email' required id="" />
                    <input className='block py-3 pl-5 outline-none w-full mt-5 rounded-lg' type="text" name="subject" placeholder='Subject' required id="" />
                    <textarea className='block py-3 pl-5 outline-none w-full mt-5 rounded-lg' name="message" id="" placeholder='Your message' cols="30" rows="10"></textarea>
                    <button type="submit" className='block py-3 pl-5 bg-[#3B3B3B] font-medium capitalize text-white outline-none w-full mt-5 rounded-lg hover:bg-white hover:text-black'>send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;