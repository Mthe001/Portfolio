"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { TextAnimate } from "./ui/text-animate";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const sidebarVariants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-background py-4 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Image src="/assets/logo of my website.png" width={50} height={40} alt="Logo" />
                        <div className="text-primary text-2xl font-bold">
                            <TextAnimate animation="slideLeft" by="character">MThe001</TextAnimate>
                        </div>
                    </div>
                </Link>

                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                const element = document.getElementById(section.id);
                                if (element) {
                                    window.scrollTo({
                                        top: element.offsetTop - 80, // Adjust offset to avoid navbar overlap
                                        behavior: "smooth", // Smooth scrolling effect
                                    });
                                }
                            }}
                            className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${activeSection === section.id ? "text-primary border-b-2 border-primary" : "text-foreground"
                                }`}
                        >
                            {section.name}
                        </a>
                    ))}
                </div>

                {/* Dark Mode Toggle & Resume Button */}
                <div className="hidden md:flex items-center space-x-4">
                    <ModeToggle />
                    
                    <a href="https://drive.google.com/uc?export=download&id=1B8rcvcpl8m4vD7W9kk0eOYk9zYKjcoqe"
                        class="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition">
                        Resume
                    </a>


                </div>
            </div>

            {/* Sidebar for Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={sidebarVariants}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50"
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4 p-4">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        const element = document.getElementById(section.id);
                                        if (element) {
                                            window.scrollTo({
                                                top: element.offsetTop - 80, 
                                                behavior: "smooth", 
                                            });
                                        }
                                        toggleMenu();
                                    }}
                                    className={`cursor-pointer text-lg font-medium transition-colors duration-300 ${activeSection === section.id ? "text-primary border-b-2 border-primary" : "text-foreground"
                                        }`}
                                >
                                    {section.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4">
                                <ModeToggle />
    
                                <a href="https://drive.google.com/uc?export=download&id=1B8rcvcpl8m4vD7W9kk0eOYk9zYKjcoqe"
                                    class="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition">
                                     Resume
                                </a>


                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;