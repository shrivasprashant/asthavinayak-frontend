import React from 'react'
import HeroSlider from './HeroSlider '
import CardLinks from './CardLinks'
import LoveQuoteBanner from './LoveQuoteBanner'
import WeddingHero from './WeddingHero'
import TestimonialSlider from './TestimonialSlider'
import WeddingGallery from './WeddingGallery'
import InteriorDesignStats from './InteriorDesignStats'
import ContactForm from '../../components/ContactForm'
import GallerySlider from './GallerySlider'
// okiii

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <CardLinks/>
        <WeddingHero/>
        <InteriorDesignStats/>
        <WeddingGallery/>
        <LoveQuoteBanner/>
        <GallerySlider/>
        {/* <ContactForm/> */}
        <TestimonialSlider/>
    </div>
  )
}

export default Home