import React from 'react';
import work from '../../img/project1.jpeg'
import img2 from '../../img/icon.svg'

const Project = () => {
    return (
        <div className='md:flex flex-wrap gap-10 w-11/12 mx-auto mt-10'>
            <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                <img className='rounded-3xl' src={work} alt="" />
                <h5 className='uppercase text-sm mt-3'>showcase</h5>
                <h4 className='text-2xl text-white'>Projects</h4>
                <button className='absolute bottom-6 right-5'><a href="#">
                    <img className='custom-img' src={img2} alt="" />
                </a></button>
            </div>
            <div>
                <h2 className='uppercase text-6xl font-medium text-white mb-5 text-center'>All Project</h2>
                <div className='md:flex gap-10'>
                    <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                        <img className='rounded-3xl' src={work} alt="" />
                        <h5 className='uppercase text-sm mt-3'>showcase</h5>
                        <h4 className='text-2xl text-white'>Projects</h4>
                        <button className='absolute bottom-6 right-5'><a href="#">
                            <img className='custom-img' src={img2} alt="" />
                        </a></button>
                    </div>
                    <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                        <img className='rounded-3xl' src={work} alt="" />
                        <h5 className='uppercase text-sm mt-3'>showcase</h5>
                        <h4 className='text-2xl text-white'>Projects</h4>
                        <button className='absolute bottom-6 right-5'><a href="#">
                            <img className='custom-img' src={img2} alt="" />
                        </a></button>
                    </div>
                </div>
            </div>
            <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                <img className='rounded-3xl' src={work} alt="" />
                <h5 className='uppercase text-sm mt-3'>showcase</h5>
                <h4 className='text-2xl text-white'>Projects</h4>
                <button className='absolute bottom-6 right-5'><a href="#">
                    <img className='custom-img' src={img2} alt="" />
                </a></button>
            </div>
            <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                <img className='rounded-3xl' src={work} alt="" />
                <h5 className='uppercase text-sm mt-3'>showcase</h5>
                <h4 className='text-2xl text-white'>Projects</h4>
                <button className='absolute bottom-6 right-5'><a href="#">
                    <img className='custom-img' src={img2} alt="" />
                </a></button>
            </div>
            <div className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                <img className='rounded-3xl' src={work} alt="" />
                <h5 className='uppercase text-sm mt-3'>showcase</h5>
                <h4 className='text-2xl text-white'>Projects</h4>
                <button className='absolute bottom-6 right-5'><a href="#">
                    <img className='custom-img' src={img2} alt="" />
                </a></button>
            </div>
        </div>
    );
};

export default Project;