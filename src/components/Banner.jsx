import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section style={{ backgroundImage: "url('/assets/bg.png')" }} className='lg:mt-18 mt-16 bg-cover'>
            <div className='bg-linear-to-b from-primary/10 relative'>
                <div className='absolute -rotate-25 hidden md:block top-[20%] left-[20%] transition-all duration-900 animate-pulse'>
                    <Image src="/assets/why-choose/Rectangle18.png" alt="Logo" width={70} height={70} />
                </div>
                <div className='absolute rotate-25 hidden md:block top-[20%] right-[23%] transition-all duration-700 animate-pulse'>
                    <Image src="/assets/why-choose/Rectangle20.png" alt="Logo" width={60} height={60} />
                </div>
                <div className='absolute -rotate-25 hidden md:block bottom-[20%] left-[23%] transition-all duration-800 animate-pulse'>
                    <Image src="/assets/why-choose/Rectangle19.png" alt="Logo" width={60} height={60} />
                </div>
                <div className='absolute rotate-25 hidden md:block bottom-[20%] right-[23%] transition-all duration-1000 animate-pulse'>
                    <Image src="/assets/why-choose/Rectangle21.png" alt="Logo" width={60} height={60} />
                </div>

                <div className='w-3.25 h-3.25 rounded-full bg-[#635BFF] absolute top-[20%] left-[10%]'></div>
                <div className='w-3.75 h-3.75 rounded-full bg-[#34E0A1] absolute top-[15%] left-[50%]'></div>
                <div className='w-3.25 h-3.25 rounded-full bg-[#FFEC5A] absolute top-[20%] right-[10%] transition-all duration-1000 animate-blink'></div>

                <div className='w-3.25 h-3.25 rounded-full bg-[#FF5A5F] absolute top-[50%] left-[20%] hidden md:block'></div>
                <div className='w-3.25 h-3.25 rounded-full bg-[#5AFAFF] absolute bottom-[5%] left-[50%]'></div>
                <div className='w-1.75 h-1.75 rounded-full bg-[#FFEC5A] absolute bottom-[5%] left-[10%]'></div>
                <div className='w-1.75 h-1.75 rounded-full bg-[#0C3B7C] absolute bottom-[15%] right-[10%]'></div>

                <div className='text-center pt-40 pb-20 max-w-7xl mx-auto w-11/12'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Airbnb Assistants For</h1>
                    <h2 className='text-3xl md:text-4xl mt-3.5 mb-10.75'>Property Management</h2>
                    <p className='max-w-114.25 text-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                    <a className="btn btn-primary text-sm font-bold mt-9.5 mb-7">Schedule A Meeting <FaArrowRight /></a>

                    <a className='block underline text-sm' href="price">See Pricing</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;