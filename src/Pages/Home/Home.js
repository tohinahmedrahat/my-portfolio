import React from 'react';
import img from '../../img/tohin.png'
import img2 from '../../img/icon.svg'
import work from '../../img/my-works.png'
import sing from '../../img/sign.png'
import "./Home.css"
import Typed from 'typed.js';
import Content from '../Content/Content';
import { Link } from 'react-router-dom';


const Home = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['web developer.', 'MREN stack developer.', 'react and node.js developer', 'responsevie web site developer'],
            typeSpeed: 80,
            backSpeed: 0,
            smartBackspace: true, // this is a default
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className='grid grid-cols-2 gap-10 justify-between w-11/12 mx-auto'>
                <div className='flex justify-between px-5 py-10 bg-[#171717] rounded-3xl'>
                    <div className='profile-img'>
                        <img src={img} alt="" />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='ml-8 relative'>
                        <h4 className='text-[#7A7A7A] uppercase font-semibold'>web developer</h4>
                        <h2 className='text-5xl font-semibold my-3 text-[#FFFFFF]'>Tohin Ahmed</h2>
                        <h6 className='uppercase text-base'>i am mren stack web developer based in bangladesh</h6>
                        <button className='absolute bottom-0 right-5'><Link to="about">
                            <img className='custom-img' src={img2} alt="" />
                        </Link></button>
                    </div>
                </div>
                <div>
                    <div className='rounded-3xl w-full bg-[#0F0F0F]'>
                        <h4 className='capitalize py-3 px-5 text-2xl'>i am a profosonal <span ref={el} /> </h4>
                    </div>
                    <div className='flex mt-10 justify-center items-center gap-10'>
                        <div data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            className='bg-[#1E1E1E] relative p-10 rounded-3xl'>
                            <img src={sing} alt="" />
                            <h5 className='uppercase text-sm mt-3'>more about me</h5>
                            <h4 className='text-2xl text-white'>Credentials</h4>
                            <button className='absolute bottom-10 right-5'><Link to="about">
                                <img className='custom-img' src={img2} alt="" />
                            </Link></button>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            className='bg-[#1E1E1E] relative p-10 rounded-3xl'>
                            <img src={work} alt="" />
                            <h5 className='uppercase text-sm mt-3'>showcase</h5>
                            <h4 className='text-2xl text-white'>Projects</h4>
                            <button className='absolute bottom-10 right-5'><Link to="work">
                                <img className='custom-img' src={img2} alt="" />
                            </Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Content></Content>
        </>
    );
};

export default Home;