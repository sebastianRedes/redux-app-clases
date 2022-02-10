import React from 'react';
import "../assets/styles/components/Layout.scss";
import Footer from './Footer';
import Header from './Header';

const Layaout = ({children}) => (
    <div className='layout'>
        <Header/>
                {children}
        <Footer/>
    </div>
);

export default Layaout;
