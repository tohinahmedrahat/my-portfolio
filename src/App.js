import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Route/Route';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PreLoader from './Loader/PreLoader';

function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  },[])
  return (
    <>
    <PreLoader />
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
    </>
  );
}

export default App;
