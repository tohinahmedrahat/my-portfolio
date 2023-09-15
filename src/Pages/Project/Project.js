import React, { useEffect, useState } from 'react';
import img2 from '../../img/icon.svg'
import { Link } from 'react-router-dom';

const Project = () => {
   const [project,setProject] = useState([])
    useEffect(() => {
        fetch('fake.json')
        .then(data => data.json())
        .then(res => setProject(res))
    },[])
    console.log(project)
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h2 className='uppercase text-6xl font-medium text-white mb-5 text-center'>All Project</h2>
            <div className='md:flex flex-wrap gap-10'>
             {
                    project.map((data, i) => {
                        return (

                            <div key={i} className='bg-[#1E1E1E] relative p-4 pb-7 rounded-3xl md:w-[362px] h-[385px]'>
                                
                                <img className='rounded-3xl w-full h-[280px]' src={data.img} alt="" />
                                <h5 className='uppercase text-sm mt-3'>{data.name}</h5>
                                <h4 className='text-2xl text-white'>{data.category}</h4>
                                <button className='absolute bottom-6 right-5'><Link to={`/work/${data.id}`}>
                                    <img className='custom-img' src={img2} alt="" />
                                </Link></button>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default Project;