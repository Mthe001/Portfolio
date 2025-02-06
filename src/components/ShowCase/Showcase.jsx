"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "../interactive-hover-button";

const projects = [
    {
        title: "Crowd Cube",
        description: "A modern funding platform built with React.js and MongoDb.",
        image: "/assets/crowdcube.png",
        link: "https://assginment-10-6b155.web.app",
        githubLink: "https://github.com/Mthe001/Crowd-Cube", 
        tech: ["React.js", "Tailwind", "MongoDb","GSAP","Embla Js"],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Daily News 240",
        description: "Stay updated with the latest news across multiple categories.",
        image: "/assets/dailynews.png",
        link: "https://news240-5b532.web.app",
        githubLink: "https://github.com/Mthe001/Daily-News", 
        tech: ["React Js", "Framer Motion", "Node Js", "Shadcn Ui"],
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Pet House",
        description: "Find and adopt pets from various categories with ease.",
        image: "/assets/pet_adaption.png",
        link: "https://quiet-hotteok-29aa49.netlify.app",
        githubLink: "https://github.com/Mthe001/Peddy-Pet-Adaption-Platform", 
        tech: ["HTML", "CSS", "Tailwind","Javascript"],
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Dream 11",
        description: "Build your fantasy cricket team and manage your budget.",
        image: "/assets/bpldream.png",
        link: "https://verdant-churros-8bd07f.netlify.app/",
        githubLink: "https://github.com/Mthe001/Dream-Eleven-Xl", 
        tech: ["React.Js", "Chart.js", "Tailwind", "Javascript"],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Found Flow",
        description: "A donation management platform to help people in need.",
        image: "/assets/foundflow.png",
        link: "https://winter-clothing-donation-5e2c9.web.app",
        githubLink: "https://github.com/Mthe001/FounDFlow", 
        tech: ["React Js", "Firebase", "Tailwind","embla Js","Mongodb",],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Marathon 240",
        description: "Join and track marathons with real-time race management tools.",
        image: "/assets/marathon_240.png",
        link: "https://marathon-240.web.app",
        githubLink: "https://github.com/Mthe001/Marathon_240",
        tech: ["React Js", "GSAP", "Motion", "Tailwind","Node js","MongoDb","express js","Firebase"],
        className: "md:col-span-1 md:row-span-2",
    },
];

const Showcase = () => {
    return (
        <section id="projects" className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Project <span className="text-primary">Showcase</span>
                </motion.h2>

                {/* Responsive Bento Grid Layout */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`relative group overflow-hidden rounded-xl shadow-lg bg-muted cursor-pointer ${project.className}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href={project.link} target="_blank">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center px-4">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm mt-2">{project.description}</p>
                                    <div className="mt-3 flex gap-2 flex-wrap justify-center">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs bg-white/20 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3">
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            className="text-xl text-primary rounded-xl hover:underline"
                                        >
                                            <InteractiveHoverButton> View on GitHub</InteractiveHoverButton>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
