import React from 'react';
import Banner from './Banner/Banner';
import Cetagories from './Cetagory/Cetagories';
import Fag from './Faq/Fag';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cetagories></Cetagories>
            <Fag></Fag>
        </div>
    );
};

export default Home;