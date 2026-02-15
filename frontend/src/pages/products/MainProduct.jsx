import React from 'react'
import HeroVideo from "../../components/ProductPageComponents/HeroVideo";
import Footer from '../../components/Footer'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import Navbar from '../../components/NAvbar'
import DualXR from '../../components/ProductPageComponents/DualXR';
import NavbarStatic from '../../components/NavbarStatic';
import ExploreGrid from '../../components/ProductPageComponents/ExploreGrid';
import OrderNow from '../../components/ProductPageComponents/OrderNow';
import XRDetails from '../../components/ProductPageComponents/XRDetails';
import MilitaryXR from '../../components/ProductPageComponents/MilitaryXR';
const MainProduct = () => {
    return (
        <div>
            <NavbarStatic />


            <HeroVideo />
            <div className="h-40 bg-[#eeeeec]" />
            <MilitaryXR />
            <div className="h-40 bg-[#eeeeec]" />

            <XRDetails />
            <DualXR />
            <div className="h-40" />
            <OrderNow />
            <div className="h-40" />

            <ExploreGrid />
            <div className="h-40" />

            <TalkToSalesCTA />


            <Footer />
        </div>
    )
}

export default MainProduct