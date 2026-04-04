import { Headphones, UserPlus, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const GettingStarted = () => {

    const steps = [
        {
            id: "01",
            title: "Add requirements & sign up today",
            image: "/assets/getting-started/img1.png",
        },
        {
            id: "02",
            title: "Connect with your CSM & onboarding team",
            image: "/assets/getting-started/img2.png",
        },
        {
            id: "03",
            title: "Meet your STR Assistant next week",
            image: "/assets/getting-started/img3.png",
        },
    ];

    return (
        <section className='max-w-237 mx-auto w-11/12 mt-16 mb-20'>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Getting Started is <span className='text-primary'>Easy</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto mt-5.5 mb-15'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        <div className="absolute left-3/7 -top-1/10 md:-top-6 md:-left-6 w-12 h-12 flex items-center justify-center border-4 border-primary rounded-full bg-white text-3xl p-8">
                            {step.id}
                        </div>
                        <div className="border-2 border-[#FDEBF0] rounded-xl h-48 px-8 bg-white flex justify-center items-center mb-6">
                            <div className="relative w-24 h-24">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="font-semibold mt-8.25 text-xl text-center">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GettingStarted;