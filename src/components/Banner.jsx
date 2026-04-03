import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section>
            <h1>Airbnb Assistants For</h1>
            <h2>Property Management</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <a className="btn btn-primary text-sm font-bold">Schedule A Meeting <FaArrowRight /></a>
            
            <a href="price">See Pricing</a>
        </section>
    );
};

export default Banner;