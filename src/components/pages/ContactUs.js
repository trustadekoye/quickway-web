import React from 'react';
import '../../App.css';
import ReviewsCard from '../ReviewsCard';
import GetTheApp from '../GetTheApp';
import FreqAskedQues from '../FreqAskedQues';
import FooterComp from '../FooterComp';
import ContactComponent from '../ContactComponent';


function ContactUs() {
    return (
        <>
            <ContactComponent />
            <ReviewsCard />
            <GetTheApp />
            <FreqAskedQues />
            <FooterComp />
        </>
    );
}

export default ContactUs;