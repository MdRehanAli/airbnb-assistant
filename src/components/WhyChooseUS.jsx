import Image from 'next/image';
import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';

const WhyChooseUS = () => {

    const features = [
        "Brilliant Client Service",
        "Flexibility & Adaptability",
        "We make it Personal",
        "We have expert in our team",
    ];

    return (
        <section className="w-full mx-auto max-w-7xl border border-[#f8becd] bg-[#ffe4e9] rounded-[33px]">
            <div className="relative overflow-hidden  flex flex-col md:flex-row items-center gap-12  p-12 md:p-20">
                <div className="absolute right-9.5 top-40 w-142.5 h-84.25 bg-[#FAC4D2] rounded-full  z-0" />
                <div className="relative z-10 flex-1 space-y-8">
                    <header className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Few Reasons Why you <br /> Choose us?
                        </h2>
                        <p className="max-w-114.25 text-sm font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </header>

                    <ul className="space-y-4">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 font-semibold text-[#1e1e1e]">
                                <span className="bg-[#FAC4D2] p-1.5 rounded-full flex items-center justify-center">
                                    <FaCheck className='text-primary text-xs' />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <a className="btn btn-primary text-sm font-bold">Schedule A Meeting <FaArrowRight /></a>
                </div>

                <div className="relative z-10 flex-1 flex justify-center items-center mt-12 md:mt-0">

                    <div className="relative">
                        <Image
                            src="/assets/why-choose/man.png"
                            alt="Professional"
                            width={400} height={200}
                        />
                        <div className="absolute top-4 -left-16 bg-white p-2 rounded-2xl shadow-xl flex gap-3 items-center z-20 border border-white/50">
                            <div className="w-20 h-14 bg-gray-200 rounded-lg overflow-hidden">
                                <Image src="/assets/why-choose/image.png" className="object-cover" alt="room" width={100} height={100} unoptimized />
                            </div>
                            <div className="pr-4">
                                <div className="flex gap-0.5 text-orange-400">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-[10px]">★</span>)}
                                </div>
                                <p className="text-xs font-bold text-[#f2416b] mt-1">$75<span className="text-gray-400 font-normal">/night</span></p>
                            </div>
                        </div>

                        <div className="absolute top-4 -right-12 bg-white p-3 rounded-2xl shadow-xl grid grid-cols-2 gap-2 z-20">
                            <Image src="/assets/why-choose/rectangle 18.png" alt="Airbnb" width={50} height={50} unoptimized />
                            <Image src="/assets/why-choose/rectangle 19.png" alt="Airbnb" width={50} height={50} unoptimized />
                            <Image src="/assets/why-choose/rectangle 20.png" alt="Airbnb" width={50} height={50} unoptimized />
                            <Image src="/assets/why-choose/rectangle 21.png" alt="Airbnb" width={50} height={50} unoptimized />
                        </div>

                        <div className="absolute -bottom-10 -left-8 bg-white p-5 rounded-3xl shadow-2xl w-56 z-20">
                            <div className="flex justify-between items-center mb-4">
                                {/* Placeholder for "January" or similar text */}
                                <div className="h-3 w-16 bg-[#ffe4e9] rounded-full" />
                                <div className="flex gap-1">
                                    <div className="w-6 h-6 bg-[#1a1b4b] rounded-md flex items-center justify-center text-[10px] text-white cursor-pointer hover:bg-opacity-80 transition-colors">
                                        {'<'}
                                    </div>
                                    <div className="w-6 h-6 bg-[#1a1b4b] rounded-md flex items-center justify-center text-[10px] text-white cursor-pointer hover:bg-opacity-80 transition-colors">
                                        {'>'}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-y-2 text-[10px] text-center font-bold text-gray-800">
                                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                                    <span key={d} className="text-gray-900 font-bold mb-1">{d}</span>
                                ))}
                                {[30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((date, i) => {
                                    const isHighlighted = i === 9;
                                    const isPreviousMonth = i < 2;

                                    return (
                                        <span
                                            key={i}
                                            className={`flex items-center justify-center h-2 w-2  p-2 mx-auto cursor-pointer transition-all
                        ${isHighlighted ? 'bg-primary p-2 text-white rounded-sm shadow-sm scale-110' : 'hover:bg-gray-100 rounded-md'}
                        ${isPreviousMonth ? 'text-gray-400 font-medium' : 'text-gray-800'}
                    `}
                                        >
                                            {date}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUS;