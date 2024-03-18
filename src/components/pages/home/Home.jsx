import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import HeroSection from '../../heroSection/HeroSection'
import Category from '../../catogory/catagory'
import HomePageProductCard from '../../homePageProductCard/HomePageProductCard'
import Track from '../../track/track'
import Testimonial from '../../testimonial/Testimonial'
import myContext from '../../../context/myContext'
import Loader from '../../loader/Loader'

const Home = () => {

   return (

      <Layout>
         <HeroSection />
         <Category />
         <HomePageProductCard />
         <Track />
         <Testimonial />
         <Loader />
      </Layout>

   )
}

export default Home
