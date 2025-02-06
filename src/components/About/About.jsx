"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { TextAnimate } from "../ui/text-animate";
import { Marquee } from "../ui/marquee";

// Hydration and client-specific logic fixes
const About = () => {
    const reviews = [
        {
            name: "Javascript",
            img: "https://i.ibb.co.com/nqNwdTjx/Screenshot-2025-02-06-021427.png",
        },
        {
            name: "React Js",
            img: "https://i.ibb.co.com/F4wdxc0J/Screenshot-2025-02-06-021306-removebg-preview.png",
        },
        {
            name: "Next js",
            img: "https://i.ibb.co.com/Y7JGzMzb/Screenshot-2025-02-06-020804-removebg-preview.png",
        },
        {
            name: "Mongo Db",
            img: "https://i.ibb.co.com/Nd82f9qN/Screenshot-2025-02-06-021607-removebg-preview.png",
        },
        {
            name: "Firebase",
            img: "https://i.ibb.co.com/ZRRPvWS9/Screenshot-2025-02-06-021826-removebg-preview.png",
        },
        {
            name: "Css Tailwind",
            img: "https://i.ibb.co.com/YBgpsH0M/Screenshot-2025-02-06-021735-removebg-preview.png",
        },
        {
            name: "Node Js",
            img: "https://i.ibb.co.com/XZG6P2BF/Screenshot-2025-02-06-022012-removebg-preview.png",
        },
        {
            name: "Express Js",
            img: "https://i.ibb.co.com/cck7fcbD/Screenshot-2025-02-06-022139-removebg-preview.png",
        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure we only render this on the client
    }, []);

    // Prevent rendering until the component is mounted (fixes hydration issues)
    if (!mounted) return null;

    const ReviewCard = ({ img, name }) => {
        return (
            <figure className="relative w-64 h-40 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col items-center gap-2">
                    <img className="rounded-full p-1" width="92" height="84" alt={name} src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-primary">{name}</figcaption>
                    </div>
                </div>
            </figure>
        );
    };

    return (
        <section id="about" className="about min-h-screen w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                {/* Short Intro */}
                <motion.p
                    className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="flex items-center gap-1 justify-center">
                        <TextAnimate animation="slideLeft" by="character">I'm a passionate</TextAnimate>
                            <TextAnimate className='text-primary' animation="slideLeft" by="character">Frontend Developer</TextAnimate>
                    </div>
                    <TextAnimate animation="slideLeft" by="character">
                        who loves solving problems, building scalable web applications, and crafting engage experiences.
                    </TextAnimate>
                </motion.p>

                {/* Profile & Description */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center w-9/12 mx-auto border-2 py-8 px-6 rounded-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Profile Image */}
                    <motion.img
                        src="/assets/mypic.jpg"
                        alt="MD Redwanul Haque"
                        className="rounded-full lg:w-72 md:w-52 md:h-52 w-40 h-40 lg:h-72 object-cover shadow-lg"
                    />

                    {/* Description */}
                    <motion.div
                        className="mt-6 md:mt-0 md:ml-8 text-center md:text-left max-w-lg"
                    >
                        <h3 className="lg:text-2xl md:text-xl text-md text-start font-bold text-primary">MD Redwanul Haque</h3>
                        <p className="mt-2 text-muted-foreground text-sm text-start  lg:text-lg">
                            I am currently a first-year intermediate student, passionate about technology and development.
                            After taking a brief gap year due to personal reasons, I am now fully committed to my learning journey.
                            I completed my SSC in 2023 from <span className="text-primary">Science</span>, achieving a GPA of 5.
                        </p>
                        <TextAnimate className="mt-2  text-muted-foreground text-sm text-start lg:text-lg" animation="slideLeft" by="character">
                            My inspiration for coding comes from a close brother of mine, whose incredible work in development sparked my curiosity.
                            Watching his approach to problem-solving and creativity inspired me to step into the world of programming, marking the beginning of my journey as a developer.
                        </TextAnimate>
                    </motion.div>
                </motion.div>

                {/* Bento Grid for Key Highlights */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2">
                    {/* Coding Enthusiast */}
                    <motion.div
                        className="p-6 bg-muted rounded-xl shadow-md md:col-span-2 row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <FaCode className="text-primary text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Coding Enthusiast</h3>
                        <p className="text-muted-foreground mt-2">
                            I love writing clean, efficient code and keeping up with the latest technologies.
                        </p>
                    </motion.div>

                    {/* Frontend Specialist */}
                    <motion.div
                        className="p-6 bg-muted rounded-xl shadow-md row-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <FaLaptopCode className="text-primary text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Frontend Specialist</h3>
                        <p className="text-muted-foreground mt-2">
                            Experience with **React, Next.js, Node.js, MongoDB, and Firebase**.
                        </p>
                    </motion.div>

                    {/* Problem Solver */}
                    <motion.div
                        className="p-6 bg-muted rounded-xl shadow-md md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <FaLightbulb className="text-primary text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Problem Solver</h3>
                        <p className="text-muted-foreground mt-2">
                            Passionate about **building scalable solutions** and **debugging complex issues**.
                        </p>
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    id="skills"
                    className="lg:mt-40 md:mt-28 mt-20 min-h-screen"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 className="text-2xl py-5 font-bold">Tech <span className="text-primary text-3xl">Stack</span></h3>
                    <div className="relative flex lg:h-[500px] md:h-[400px] h-[310px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map((review, index) => (
                                <ReviewCard key={review.name || index} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {secondRow.map((review, index) => (
                                <ReviewCard key={review.name || index} {...review} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
