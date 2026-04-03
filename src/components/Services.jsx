import Image from 'next/image';
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
        <section className='mt-12.5 mb-18'>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Our <span className='text-primary'>Services</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    services.map((service, index) => <div key={index} className='border rounded-lg p-5 flex flex-col items-center gap-4'>
                        <Image src={service.image} alt={service.name} width={100} height={100} />
                        <h2 className='text-lg font-semibold'>{service.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button>Read More</button>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;