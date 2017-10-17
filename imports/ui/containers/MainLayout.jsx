import React from 'react';
import Footer from '../components/footer/footer.jsx';
import Header from '../components/header/header.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <Header/>
        {content}
        <Footer/>
    </div>
)
