import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import React from 'react';

const PrivacyCookiesLyaout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PrivacyCookiesLyaout;