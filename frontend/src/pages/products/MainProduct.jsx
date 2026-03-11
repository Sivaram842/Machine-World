import React from 'react'
import HeroVideo from "../../components/ProductPageComponents/HeroVideo";
import Footer from '../../components/NewFooter'
import TalkToSalesCTA from '../../components/TalkToSalesCTA'
import Navbar from '../../components/NewNavbar'
import DualXR from '../../components/ProductPageComponents/DualXR';
import NavbarStatic from '../../components/NavbarStatic';
import ExploreGrid from '../../components/ProductPageComponents/ExploreGrid';
import OrderNow from '../../components/ProductPageComponents/OrderNow';
import XRDetails from '../../components/ProductPageComponents/XRDetails';
import MilitaryXR from '../../components/ProductPageComponents/MilitaryXR';
import ExpandableBlocks from '../../components/ProductPageComponents/ExpandableBlocks';

const MainProduct = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />

            <HeroVideo />

            <div className="h-16 sm:h-24 lg:h-40 bg-[#eeeeec]" />

            <MilitaryXR />

            <div className="h-16 sm:h-24 lg:h-40 bg-[#eeeeec]" />

            <XRDetails />

            <DualXR />

            <div className="h-16 sm:h-24 lg:h-40" />

            <OrderNow />

            <div className="h-16 sm:h-24 lg:h-40" />

            <ExploreGrid />
            <ExpandableBlocks />

            <div className="h-16 sm:h-24 lg:h-40" />

            <TalkToSalesCTA />

            <Footer />
        </div>
    )
}

export default MainProduct