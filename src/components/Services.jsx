import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
    const services = [
        { name: "Manage Property Listings", image: "/assets/services/image1.png" },
        { name: "Manage Customer Bookings", image: "/assets/services/image2.png" },
        { name: "Schedule House Cleaning", image: "/assets/services/image3.png" },
        { name: "Monitor Guest Reviews", image: "/assets/services/image4.png" },
        { name: "Track & Report Expenses", image: "/assets/services/image5.png" },
        { name: "Guest Inquiry & Support", image: "/assets/services/image6.png" },
    ]

    return (
        <section className='mt-12.5 mb-18 max-w-7xl mx-auto w-11/12' id='services'>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Our <span className='text-primary'>Services</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto mt-3.5 mb-13.25'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    services.map((service, index) => <div key={index} className='border border-[#FAC4D2] rounded-lg flex flex-col p-6 hover:shadow-[0px_4px_90.3px_rgba(215,205,207,0.47)] transition-shadow duration-300'>
                        <Image src={service.image} alt={service.name} width={100} height={100} />
                        <h2 className='text-lg font-semibold mt-6 mb-3.5'>{service.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link href="#" className='w-fit mt-8.5 px-6 py-2.5 border border-primary rounded-full text-primary text-sm'>Read More</Link>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;