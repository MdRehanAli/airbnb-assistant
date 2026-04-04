"use client";
import { section } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("/");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "services", "pricing", "blog", "resources"];
            const scrollPosition = window.scrollY + 150;

            if (window.scrollY < 100) {
                setActiveSection("/");
                return;
            }

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(`#${section}`);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkStyle = (href) => {
        const isActive = activeSection === href;
        return isActive
            ? "text-primary font-bold border border-b-2 border-primary duration-300 p-0 py-1.5 mx-3 rounded-none"
            : " text-gray-700 hover:text-primary transition-all duration-300 p-0 py-1.5 mx-3";
    };
    const links = <>
        <li><Link className={getLinkStyle("/")} href="/">Home</Link></li>
        <li><Link className={getLinkStyle("#about")} href="#about">About</Link></li>
        <li><Link className={getLinkStyle("#services")} href="#services">Services</Link></li>
        <li><Link className={getLinkStyle("#pricing")} href="#pricing">Pricing</Link></li>
        <li><Link className={getLinkStyle("#blog")} href="#blog">Blog</Link></li>
        <li><Link className={getLinkStyle("#resources")} href="#resources">Resources</Link></li>
    </>
    return (
        <section className='bg-white shadow-sm fixed top-0 left-0 right-0 z-50'>
            <div className="navbar max-w-7xl mx-auto w-11/12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link href="/">
                        <Image src="/Google.png" alt="Logo" width={100} height={100}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-sm font-bold">Schedule A Meeting <FaArrowRight /></a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;