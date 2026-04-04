import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='border-t border-[#d6d6d6]'>
            <div className="grid grid-cols-1 md:grid-cols-5 text-base-content  gap-5 max-w-7xl mx-auto w-11/12 py-20">
                <nav className='w-fit md:col-span-2 flex flex-col items-center md:items-start'>
                    <Image src="/Google.png" alt="Logo" width={100} height={100}></Image>
                    <p className='md:max-w-92.5 mx-auto w-full mt-5 mb-7 text-[#52525B] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                    <div className='flex gap-9'>
                        <FaTwitter className='text-lg' />
                        <FaFacebookF className='text-lg' />
                        <FaInstagram className='text-lg' />
                        <FaGithub className='text-lg' />
                    </div>
                </nav>
                <nav className="flex flex-col items-center md:items-start gap-5">
                    <h6 className='font-bold mt-10 md:mt-0 md:mb-5'>Company</h6>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">About</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Features</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Works</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Career</Link>
                </nav>
                <nav className="flex flex-col items-center md:items-start gap-5">
                    <h6 className='font-bold mt-10 md:mt-0 md:mb-5'>Help</h6>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Customer Support</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Delivery Details</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Terms & Conditions</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Privacy Policy</Link>
                </nav>
                <nav className="flex flex-col items-center md:items-start gap-5">
                    <h6 className='font-bold mt-10 md:mt-0 md:mb-5'>Resources</h6>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Free eBooks</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Development Tutorial</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">How to - Blog</Link>
                    <Link href="#" className="link link-hover text-sm block text-[18181b]">Youtube Playlist</Link>
                </nav>
            </div>
            <div className='bg-[#230B41]'>
                <p className='pt-4.5 pb-7 text-white text-center'>© Copyright 2024, All Rights Reserved by XYz</p>
            </div>
        </footer>
    );
};

export default Footer;