import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Card from '../Card';
import EarnWithQwikway from '../EarnWithQwikway';
import WhyQwikway from '../WhyQwikway';
import ReviewsCard from '../ReviewsCard';
import GetTheApp from '../GetTheApp';
import FreqAskedQues from '../FreqAskedQues';
import FooterComp from '../FooterComp';

function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <EarnWithQwikway />
            <WhyQwikway />
            <ReviewsCard />
            <GetTheApp />
            <FreqAskedQues />
            <FooterComp />
        </>
    );
}

export default Home