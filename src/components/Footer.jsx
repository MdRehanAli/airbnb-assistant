import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <nav className='lg:w-1/3 w-fit'>
                <Image src="/Google.png" alt="Logo" width={100} height={100}></Image>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.</p>
                <div className='flex gap-9'>
                    <FaTwitter className='text-lg'/>
                    <FaFacebookF className='text-lg'/>
                    <FaInstagram className='text-lg'/>
                    <FaGithub className='text-lg'/>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Works</a>
                <a className="link link-hover">Career</a>
            </nav>
            <nav>
                <h6 className="footer-title">Help</h6>
                <a className="link link-hover">Customer Support</a>
                <a className="link link-hover">Delivery Details</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover">Free eBooks</a>
                <a className="link link-hover">Development Tutorial</a>
                <a className="link link-hover">How to - Blog</a>
                <a className="link link-hover">Youtube Playlist</a>
            </nav>
        </footer>
    );
};

export default Footer;