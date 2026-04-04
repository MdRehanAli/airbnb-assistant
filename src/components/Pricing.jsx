import React from 'react';
import { Check, X } from "lucide-react";
import Image from 'next/image';

const Pricing = () => {

    const plans = [
        {
            name: "Freebie",
            price: "$0",
            desc: "Ideal for individuals who need quick access to basic features.",
            highlight: false,
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: false },
                { text: "Unlimited Sharing", available: false },
                { text: "Upload graphics & video in up to 4k", available: false },
                { text: "Unlimited Projects", available: false },
                { text: "Instant Access to our design system", available: false },
                { text: "Create teams to collaborate on designs", available: false },
            ],
        },
        {
            name: "Professional",
            price: "$25",
            desc: "Ideal for individuals who who need advanced features and tools for client work.",
            highlight: true,
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: true },
                { text: "Unlimited Sharing", available: true },
                { text: "Upload graphics & video in up to 4k", available: true },
                { text: "Unlimited Projects", available: true },
                { text: "Instant Access to our design system", available: false },
                { text: "Create teams to collaborate on designs", available: false },
            ],
        },
        {
            name: "Enterprise",
            price: "$100",
            desc: "Ideal for businesses who need personalized services and security for large teams.",
            highlight: false,
            features: [
                { text: "20,000+ of PNG & SVG graphics", available: true },
                { text: "Access to 100 million stock images", available: true },
                { text: "Upload custom icons and fonts", available: true },
                { text: "Unlimited Sharing", available: true },
                { text: "Upload graphics & video in up to 4k", available: true },
                { text: "Unlimited Projects", available: true },
                { text: "Instant Access to our design system", available: true },
                { text: "Create teams to collaborate on designs", available: true },
            ],
        },
    ];

    return (
        <section className='mt-12.5 mb-18' id='pricing'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>Airbnb Assistant <span className='text-primary'>pricing</span></h1>
                <p className='text-center md:max-w-175 text-xl mx-auto mt-4 mb-8 text-[#191d23]'>Choose a plan that’s right for you</p>
                <div className='flex items-center gap-5 justify-center text-[#191d23]'>
                    <p>Pay Monthly </p>
                    <input type="checkbox" className="toggle bg-[#04092152] border-none text-white" />
                    <p>Pay Yearly</p>
                </div>
                <div className='flex items-end absolute md:right-[30%] right-[12%] md:top-[80%] top-[90%]'>
                    <Image src="/assets/Arrow.png" alt="Pricing" width={100} height={100} className='' />
                    <p className='text-primary mb-3'>Save 25%</p>
                </div>
            </div>

            <div className="pt-22">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-[10px] border border-[#FAC4D2] py-8 px-6 manrope-font ${plan.highlight
                                ? "bg-primary text-white border-primary"
                                : "bg-white"
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                            <p
                                className={`text-sm mb-6 ${plan.highlight ? "text-white/90" : "text-gray-500"
                                    }`}
                            >
                                {plan.desc}
                            </p>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span
                                    className={`text-sm ${plan.highlight ? "text-white/80" : "text-gray-500"
                                        }`}
                                >
                                    / Month
                                </span>
                            </div>

                            <button
                                className={`w-full py-3 rounded-md mb-8 font-medium ${plan.highlight
                                    ? "bg-white text-primary"
                                    : "border border-primary text-primary"
                                    }`}
                            >
                                Get Started Now
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        {feature.available ? (
                                            <div className=' bg-[#FAC4D2] p-1 rounded-full'>
                                                <Check className="text-primary w-4 h-4" />
                                            </div>
                                        ) : (
                                            <div className=' bg-[#f7f8f9] text-[#4b5768] p-1 rounded-full'>
                                                <X className=" w-4 h-4" />
                                            </div>
                                        )}
                                        <span
                                            className={
                                                feature.available
                                                    ? ""
                                                    : "text-gray-400"
                                            }
                                        >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;