import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <div className="hero" style={{ backgroundImage: `url("https://assets.swappie.com/cdn-cgi/image/width=590,height=405,fit=contain,format=auto/myy-landing-page-bg.png?v=11")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Phones Resells</h1>
                    <p className="mb-5">Global phone supports each of these reseller plans with sales training, collateral, quote tools, installation and ongoing support.</p>
                    <Link to='/contact'>
                        <button className="btn btn-outline btn-accent">Know More</button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Banner;