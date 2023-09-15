import React, { useEffect } from 'react';
import "./PreLoader.css"
import { preLoaderAnim } from '../animations';

const PreLoader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[])
    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span>welcome , </span>
                <span>to , </span>
                <span>tohin , </span>
                <span>portfolio</span>
            </div>
        </div>
    );
};

export default PreLoader;