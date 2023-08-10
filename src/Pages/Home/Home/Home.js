import React from 'react';
import Banner from './Banner/Banner';
import Cetagories from './Cetagory/Cetagories';
import Fag from './Faq/Fag';
import NewArrival from './NewArrival/NewArrival';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cetagories></Cetagories>
            <NewArrival></NewArrival>
            <Fag></Fag>
        </div>
    );
};

export default Home;