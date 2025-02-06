"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextAnimate } from "./ui/text-animate";
import { IconCloud } from "./ui/icon-cloud";
import { Particles } from "./ui/particles";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
    ];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    const [mounted, setMounted] = useState(false);  // Track mount status to avoid hydration errors
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    // Delay theme-based calculations until after the component mounts
    useEffect(() => {
        setMounted(true);
        if (resolvedTheme === "dark") {
            setColor("#ffffff");
        } else {
            setColor("#000000");
        }
    }, [resolvedTheme]);

    if (!mounted) {
        return null; // Render nothing until mounted to avoid hydration mismatch
    }

    return (
        <section id="home" className=" w-full min-h-screen items-center justify-center flex lg:mt-auto md:mt-5 mt-28 py-16 md:py-24 lg:py-32 bg-background relative">
            <Particles
                className="absolute inset-0 z-0"
                quantity={130}
                ease={10}
                color={color}
                refresh
            />

            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-12">

                {/* Right Side: 3D Icon Cloud (Appears below title on mobile) */}
                <motion.div
                    className="w-full lg:w-auto flex justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <IconCloud  images={images} />
                </motion.div>

                {/* Left Side: Text & Buttons */}
                <div className="w-full lg:w-11/12 text-center lg:text-left relative z-10">
                    {/* Animated Shiny Text */}
                    <motion.div
                        className="mb-4 flex justify-center lg:justify-start"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 px-5 py-2 text-sm font-semibold text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 dark:hover:text-neutral-400">
                                <span>✨ Introducing MThe001</span>
                                <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                            </AnimatedShinyText>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I'm <span className="text-primary">Redwan Mahin</span>
                    </motion.h1>

                    {/* Description */}
                    <TextAnimate className="text-muted-foreground mt-4 text-base sm:text-lg" animation="slideLeft" by="character">
                        A passionate developer creating interactive and modern web experiences.
                    </TextAnimate>

                    {/* Call to Action Buttons */}
                    <motion.div
                        className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >

                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            {/* Let's Connect Button - Links to #contact */}
                            <Link href="#contact" passHref>
                                <motion.a
                                    className="w-full md:w-auto px-6 py-3 text-lg bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                    aria-label="Contact Section"
                                >
                                    Let's Connect
                                </motion.a>
                            </Link>

                            {/* Visit GitHub Button with GitHub Icon */}
                            <Link href="https://github.com/Mthe001" passHref> {/* Replace 'yourusername' with your GitHub username */}
                                <motion.a
                                    className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 text-lg border border-primary text-primary rounded-full shadow-md hover:bg-primary/10 transition text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <FaGithub size={20} /> {/* GitHub icon */}
                                    Visit GitHub
                                </motion.a>
                            </Link>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
