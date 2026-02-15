import React from 'react'
import HeroVideo from '../../components/ProductSubPageComponents/HeroVideo'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import CustomerQuoteSection from '../../components/CustomerStories'
import VariantsSection from '../../components/ProductSubPageComponents/VariantsSection'
import TrainingPackageSection from '../../components/ProductSubPageComponents/TrainingPackageSection'
import SupportGridSection from '../../components/ProductSubPageComponents/SupportGridSection'
import PassthroughSection from '../../components/ProductSubPageComponents/PassthroughSection'
import ImmersionSection from '../../components/ProductSubPageComponents/ImmersionSection'
import DeploymentSection from '../../components/ProductSubPageComponents/DeploymentSection'
import FullScreenXRImage from '../../components/ProductSubPageComponents/FullScreenXRImage'
import FullScreenImage from '../../components/ProductSubPageComponents/FullScreenImage'
const Product2 = () => {
    return (
        <div>
            <Navbar />
            <HeroVideo />
            <ImmersionSection />
            <PassthroughSection />
            <DeploymentSection />
            <FullScreenImage />
            <TrainingPackageSection />
            <CustomerQuoteSection />
            <FullScreenXRImage />
            <VariantsSection />
            <SupportGridSection />
            <TalkToSalesCTA />
            <Footer />
        </div>
    )
}

export default Product2