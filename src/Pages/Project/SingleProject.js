import React from 'react';
import { Link} from 'react-router-dom';

const SingleProject = () => {
   
        
    return (
        <div className='bg-[#1E1E1E]'>
            <div className='w-11/12 mx-auto py-10'>
                <div >
                    <img className='w-full' src="https://i.ibb.co/FqSrLj2/bike-site.png" alt="" />
                </div>
                <div className='bg-[#191919] p-5 md:p-10 mt-10 md:grid grid-cols-3 gap-10  rounded-3xl'>
                    <div>
                        <h4 className='capitalize font-medium text-xl'>name : best bike</h4>
                        <h4 className='capitalize font-medium text-xl mt-1'>category : bike sale</h4>
                        <h4 className='capitalize font-medium text-xl mt-1'>create-date : 15/6/2023</h4>
                        <h4 className='capitalize font-medium text-xl mt-1'>work : ongoing process</h4>
                    </div>
                    <div>
                        <ul className='grid md:grid-cols-3 grid-cols-2 gap-2'>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>html</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>css</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>javascript</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>react</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>react-router</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>tailwind</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>diasyui</li>
                            <li className='capitalize font-medium text-lg hover:text-green-500 hover:cursor-pointer'>aos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='capitalize font-medium text-xl'>describe</h4>
                        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima eligendi doloribus quod provident illum rem praesentium tempora assumenda? Saepe corporis voluptas animi tempora vero molestiae hic odit nostrum recusandae minima optio enim perferendis illum ut sequi voluptatum voluptatibus eos, cumque dolorum eum, aliquam tempore ab quisquam non. Magnam, inventore!</p>
                    </div>
                </div>
                <div className='my-10 md:grid grid-cols-2 gap-10'>
                    <img src="https://i.ibb.co/Vw7CDDb/resale-1.png" alt="" />
                    <img src="https://i.ibb.co/kqKvrY1/course-2.png" alt="" />
                </div>
                <div className='mt-10 pb-10 text-center'>
                    <Link className='text-2xl font-medium uppercase hover:text-green-500 hover:cursor-pointer' to="/contact"> contact us</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;