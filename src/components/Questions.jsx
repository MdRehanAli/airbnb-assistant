import Image from 'next/image';
import React from 'react';

const Questions = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="bg-[#f9fafb] rounded-3xl py-12 px-6 flex flex-col items-center text-center">
                <div className="flex -space-x-3 mb-8">
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden z-10">
                        <Image
                            src="/assets/questions-avatar/Avatar1.png"
                            alt="Team member"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden z-20 -mt-1">
                        <Image
                            src="/assets/questions-avatar/Avatar2.png"
                            alt="Team member"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden z-10">
                        <Image
                            src="/assets/questions-avatar/avatar3.png"
                            alt="Team member"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-xl font-bold">
                        Still have Questions?
                    </h2>
                    <p className="text-gray-500">
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                </div>

                {/* CTA Button */}
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#d9365d] transition-colors shadow-sm">
                    Get in touch
                </button>
            </div>
        </section>
    );
};

export default Questions;