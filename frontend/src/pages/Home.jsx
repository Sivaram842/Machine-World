import React from 'react'
import Navbar from '../components/NewNavbar'
import Header from '../components/Header'
import TrainingSection from '../components/TrainingSection'
import PurposeSection from '../components/PurposeSection'
import ScrollableShowcase from '../components/ScrollableShowcase'
import ScrollableShowcaseHorizontal from '../components/HorizontalScrolling'
import TrainingDomains from '../components/TrainingDomains'
import ScrollRevealText from '../components/ScrollRevealText'
import CustomerStories from '../components/CustomerStories'
import LatestNewsSection from '../components/LatestNewsSection'
import TalkToSalesCTA from '../components/TalkToSalesCTA'
import Footer from '../components/NewFooter'
import ScrollableShowcaseFlip from '../components/ScrollableShowcaseFlip'
import MetaSlider from '../components/MetaSlider'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />

            {/* Responsive spacing */}
            <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

            <TrainingSection />

            <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

            <PurposeSection />

            <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

            {/* <ScrollableShowcase /> */}
            {/* <ScrollableShowcaseHorizontal /> */}
            <ScrollableShowcaseFlip />

            <TrainingDomains />
            <ScrollRevealText />
            <MetaSlider />
            <CustomerStories />

            <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

            <LatestNewsSection />

            <div className="h-16 sm:h-24 md:h-32 lg:h-40" />

            <TalkToSalesCTA />
            <Footer />
        </>
    )
}

export default Home