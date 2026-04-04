import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const About = () => {

    const companies = [
        { name: "Airbnb", logo: "/assets/industries/airbnb.png" },
        { name: "Bcm", logo: "/assets/industries/bcm.png" },
        { name: "Vrbo", logo: "/assets/industries/vrbo.png" },
        { name: "Tripadvisor", logo: "/assets/industries/tripadvisor.png" },
        { name: "Agoda", logo: "/assets/industries/agoda.png" },
        { name: "Expedia", logo: "/assets/industries/expedia.png" },
        { name: "Hometogo", logo: "/assets/industries/hometogo.png" },
        { name: "Tripping", logo: "/assets/industries/tripping.png" },
        { name: "sonder", logo: "/assets/industries/sonder.png" },
        { name: "Hotels", logo: "/assets/industries/hotels.png" },
    ]

    return (
        <section className='mt-12.5 mb-14' id='about'>
            <h1 className='text-center text-xl font-semibold'>Trusted by leaders in 50+ industries</h1>

            <Marquee className='flex gap-5 items-center justify-between bg-[#f6f6f6] mt-9 py-5' speed={50} direction="left" pauseOnHover={true}>
                {
                    companies.map((company, index) => <div key={index} className='ml-15'>
                        <Image src={company.logo} alt={company.name} width={170} height={50} />
                    </div>)
                }
            </Marquee>
        </section>
    );
};

export default About;