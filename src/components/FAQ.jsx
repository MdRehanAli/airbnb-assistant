"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import React, { useState } from 'react';
const faqData = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "Our plans are month-to-month. You can cancel at any time without any hidden fees or penalties.",
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add your VAT number, company address, and other specific details directly through the billing portal.",
    },
    {
        question: "How does billing work?",
        answer: "We bill at the start of every cycle. You'll receive an automated invoice via email each month.",
    },
    {
        question: "How do I change my account email?",
        answer: "You can update your email address in the 'Account Settings' section of your profile dashboard.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section className='bg-[#f9fafb] mx-auto max-w-7xl w-11/12'>
            <div>
                <h1 className='text-center text-[32px] font-bold'>Frequently asked <span className='text-primary'>questions</span></h1>
                <p className='text-center md:max-w-175 text-sm mx-auto'>Everything you need to know about the product and billing.</p>
            </div>

            <section className="max-w-4xl mx-auto py-16 px-6">
                <div className="divide-y divide-[#f8becd]">
                    {faqData.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-bold text-[#101828] group-hover:text-gray-600 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="text-[#f2416b] text-2xl shrink-0 ml-4">
                                    {openIndex === index ? (
                                        <FaCircleMinus />
                                    ) : (
                                        <FaCirclePlus className="opacity-80 group-hover:opacity-100" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-4 text-gray-500 leading-relaxed max-w-[90%]">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="border-t border-[#f8becd]" />
                </div>
            </section>
        </section>
    );
};

export default FAQ;