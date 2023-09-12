import React from 'react';
import img from '../../img/tohin.png';
import icon from '../../img/icon2.png'
import sing from '../../img/sign.png'
import img2 from '../../img/icon.svg'
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='md:flex gap-x-5'>
                <div className='p-7 md:w-[370px] bg-[#181818] rounded-3xl'>
                    <div className='pro-img md:w-[322px]'>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='md:text-6xl text-2xl mt-2 md:mt-0 font-semibold text-center text-white'>SELF-SUMMARY</h2>
                    <div className='bg-[#1A1A1A] pt-36 pr-40 relative p-8 mt-5 rounded-3xl'>
                        <img className='absolute top-0' src={icon} alt="" />
                        <h4 data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='text-4xl text-white mt-5'>Tohin Ahmed</h4>
                        <p data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='text-base text-white leading-6 opacity-80 mt-5'>I am a MERN stack developer with expertise in MongoDB, Express, React, and Node.js. I use these technologies to create full-stack web applications that are dynamic, responsive, and user-friendly. I have experience working with JavaScript as my primary programming language and HTML, CSS, Bootstrap, Redux, GraphQL, and other tools to enhance my web development skills. I am passionate about learning new technologies and solving complex problems. I am a team player who can collaborate with other developers and clients effectively.</p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-x-5 mt-10'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#171717] p-8 rounded-3xl'>
                    <h4 className='text-xl font-medium text-white'>EXPERIENCE</h4>
                    <h5 className='text-[#797979] text-lg font-medium mt-2'>2021 - 2023</h5>
                    <h4 className='text-xl font-medium text-white mt-1'>Web Designer & Developer</h4>
                    <h5 className='text-[#797979] text-lg font-medium mt-2'>Figma Base Designs</h5>
                    <h5 className='text-[#797979] text-lg font-medium mt-2'>2021 - 2023</h5>
                    <h4 className='text-xl font-medium text-white mt-1'>Front-End Developer</h4>
                    <h5 className='text-[#797979] text-lg font-medium mt-2'>React & tailwind</h5>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#171717] md:p-8 mt-3 md:mt-0 p-3 rounded-3xl'>
                    <h4 className='text-xl font-medium text-white'>EDUCATION</h4>
                    <h5 className='text-[#797979] text-lg font-medium mt-2'>2013 - 2016</h5>
                    <h4 className='text-xl font-medium text-white mt-1'>Higher Secondary School Certificate</h4>

                    <h5 className='text-[#797979] text-lg font-medium mt-2'>2022 - 2023</h5>
                    <h4 className='text-xl font-medium text-white mt-1 mb-3'>Complete Web Development Course With Jhankar Mahbub</h4>
                    <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1Hj9bWLfr7t091fi8C1Gis9dJFPkh7Ux-/view?usp=sharing' className='text-[#797979] uppercase text-lg font-medium'>certificate</a>
                </div>
            </div>
            <div className='md:flex gap-7 mt-10'>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative md:p-8 p-3 rounded-3xl'>
                    <div className='flex md:w-full bg-[#181818] gap-5 p-5 rounded-lg'>
                        <div className='bg-[#3f3f3f] hover:bg-white cursor-pointer text-white hover:text-black  rounded-full'>
                            <a href="https://www.linkedin.com/in/tohim-ahmed/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className='text-3xl m-5'></AiOutlineLinkedin></a>
                        </div>
                        <div className='bg-[#3f3f3f] hover:bg-white cursor-pointer text-white hover:text-black rounded-full'>
                            <a href="https://twitter.com/tohinahmed15" target="_blank" rel="noopener noreferrer"><BsTwitter className='text-3xl m-5'></BsTwitter></a>
                        </div>
                    </div>
                    <h5 className='uppercase text-sm mt-7'>stay with me</h5>
                    <h4 className='text-2xl text-white'>Profile</h4>
                    <button className='absolute bottom-10 right-5'><a href="#">
                        <img className='custom-img' src={img2} alt="" />
                    </a></button>
                </div>
                <div data-aos="zoom-out-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative px-10 my-3 md:my-0 md:w-2/4 rounded-3xl'>
                    <img src={icon} alt="" />
                    <h3 className='text-4xl text-white font-medium mt-8 mr-16 pb-10'>let's <br /> work <span className='text-[#5B78F6]'>together</span></h3>
                    <button className='absolute bottom-10 right-5'><Link to="/contact">
                        <img className='custom-img' src={img2} alt="" />
                    </Link></button>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#1E1E1E] relative p-10 rounded-3xl'>
                    <img src={sing} alt="" />
                    <h5 className='uppercase text-sm mt-3'>more about me</h5>
                    <h4 className='text-2xl text-white'>Credentials</h4>
                    <button className='absolute bottom-10 right-5'><Link to="/">
                        <img className='custom-img' src={img2} alt="" />
                    </Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;