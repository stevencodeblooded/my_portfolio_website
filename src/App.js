import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './container/Home';
import About from './container/About';
import Work from './container/Work';
import Contact from './container/Contact';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

//Fade In Animations
import Aos from 'aos';
import 'aos/dist/aos.css'

// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <div>
       {
        isLoading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <React.Fragment>
            <Router>
              <Routes>
                <Route path='/' element={<Layout/>}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path='work' element={<Work/>} />
                  <Route path="contact" element={<Contact />} />
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </Router>
          </React.Fragment>
        )
       }
    </div>
  );
};

export default App;