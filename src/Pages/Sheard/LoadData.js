import  { useEffect, useState } from 'react';

const LoadData = () => {
    const [project,setProject] = useState([])
    useEffect(() => {
        fetch('fake.json')
        .then(data => data.json())
        .then(res => setProject(res))
    },[])

    return project
    
};

export default LoadData;