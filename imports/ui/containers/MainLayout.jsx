import React from 'react';
import Footer from '../components/footer/footer.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        {content}
        <Footer/>
    </div>
)
