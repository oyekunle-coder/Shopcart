import React from 'react'
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowcase from './CategoryShowcase';
import Register from './Register';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowcase/>
        <Register/>
        <AppSection/>
        <Sponsor/>
    </div>
  )
}

export default Home