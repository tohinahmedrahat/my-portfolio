import React from 'react';
import { FaReact } from 'react-icons/fa';
import { BiLogoFirebase, BiLogoMongodb } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';

const Service = () => {
    return (
        <div className='flex gap-10 w-11/12 mx-auto mt-10'>
            <div className='bg-[#1B1B1B] flex flex-col rounded-3xl justify-between col-span-1 px-12 py-20'>
                <div className='flex items-center gap-x-12 '>
                    <FaReact className='hover:text-gray-500 text-3xl text-white'></FaReact>
                    <h4 className='uppercase text-xl font-medium text-white'>React</h4>
                </div>
                <div className='flex items-center gap-12 '>
                    <BiLogoFirebase className='hover:text-gray-500 text-3xl text-white'></BiLogoFirebase>
                    <h4 className='uppercase text-xl font-medium text-white'>Firebase</h4>
                </div>
                <div className='flex items-center gap-12'>
                    <BiLogoMongodb className='hover:text-gray-500 text-3xl text-white'></BiLogoMongodb>
                    <h4 className='uppercase text-xl font-medium text-white'>Mongodb</h4>
                </div>
                <div className='flex items-center gap-12'>
                    <DiNodejs className='hover:text-gray-500 text-3xl text-white'></DiNodejs>
                    <h4 className='uppercase text-xl font-medium text-white'>Node.js</h4>
                </div>
                
            </div>
            <div className='col-span-2'>
                <h2 className='uppercase text-6xl font-medium text-white mb-5 text-center'>MY OFFERINGS</h2>
                <div className='bg-[#1B1B1B] rounded-3xl grid grid-cols-2 gap-10 p-10'>
                    <div className='bg-[#232323] rounded-3xl p-10'>
                        <h5 className='text-[#7A7A7A] mb-2 text-xl font-medium uppercase'>React</h5>
                        <p className='text-gray-300'>React is a free and open-source JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of developers and companies. It can be used with other libraries to render to different environments, such as web or mobile.</p>
                    </div>
                    <div className='bg-[#232323] rounded-3xl p-10'>
                        <h5 className='text-[#7A7A7A] mb-2 text-xl font-medium uppercase'>Firebase</h5>
                        <p className='text-gray-300'>Firebase is a product of Google that provides backend cloud computing services and application development platforms. It hosts databases, services, authentication, and integration for a variety of applications, such as Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++. It also allows storing and synchronizing data in real-time. You can learn more about Firebase from its official documentation.</p>
                    </div>
                    <div className='bg-[#232323] rounded-3xl p-10'>
                        <h5 className='text-[#7A7A7A] mb-2 text-xl font-medium uppercase'>Mongodb</h5>
                        <p className='text-gray-300'>MongoDB is a document-oriented NoSQL database that uses JSON-like documents with optional schemas. It is a source-available cross-platform program that supports scalability, flexibility, and sophisticated queries. It also features high availability, document validation, and tools for automation, backup, and monitoring. You can learn more about MongoDB from its official website or its manual.</p>
                    </div>
                    <div className='bg-[#232323] rounded-3xl p-10'>
                        <h5 className='text-[#7A7A7A] mb-2 text-xl font-medium uppercase'>Node.js</h5>
                        <p className='text-gray-300'>Node.js is a back-end JavaScript runtime environment that runs on the V8 JavaScript engine and executes JavaScript code outside a web browser. Node.js is open source, free, and cross-platform. Node.js is designed to build scalable network applications using an event-driven, non-blocking (asynchronous) I/O model. You can learn more about Node.js from its official website3 or its tutorial.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;