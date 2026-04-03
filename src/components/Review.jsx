import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa6';

const Review = () => {
    const reviews = [
        { name: "Jenny Wilson", image: "/assets/review/Ellipse 21.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4},
        { name: "Esther Howard", image: "/assets/review/Ellipse 22.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4},
        { name: "Robert Fox", image: "/assets/review/Ellipse 23.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 4},
    ]
    return (
        <section>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Check Our Clients <span className='text-primary'>Review</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
                <Marquee className='flex gap-5 items-center justify-between mt-9 py-5' speed={50} direction="left" pauseOnHover={true}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-[#F6F6F6] p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col md:flex-row items-center md:items-start gap-6 transition-transform duration-300 hover:bg-white"
                            >
                                <div className="shrink-0">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-sm">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 text-center md:text-left space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                                    <p className="text-gray-500 text-[13px] max-w-80.25 leading-relaxed">
                                        {review.text}
                                    </p>

                                    <div className="flex justify-center md:justify-start gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-orange-400 text-xs" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default Review;