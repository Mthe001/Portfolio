"use client";

import React from "react";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { TextAnimate } from "./text-animate";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border mt-16">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">
                        <TextAnimate animation="slideLeft" by="character">MThe001</TextAnimate>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-3">
                        <TextAnimate animation="slideUp" by="character">
                            Passionate Developer | Building interactive & accessible web experiences.
                        </TextAnimate>
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground">
                        <TextAnimate animation="slideUp" by="word">Quick Links</TextAnimate>
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {[
                            { name: "Home", path: "#home" },
                            { name: "Showcase", path: "#showcase" },
                            { name: "Skills", path: "#skills" },
                            { name: "Contact", path: "#contact" }
                        ].map(({ name, path }) => (
                            <li key={path}>
                                <a href={path} className="text-muted-foreground hover:text-primary transition">
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground">
                        <TextAnimate animation="blurIn" by="word">Contact</TextAnimate>
                    </h3>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center space-x-2">
                            <Mail className="w-5 h-5 text-primary" />
                            <a href="mailto:mtheredwanulhaque@gmail.com" className="text-muted-foreground hover:text-primary transition">
                                mtheredwanulhaque@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone className="w-5 h-5 text-primary" />
                            <a href="tel:+8801614591672" className="text-muted-foreground hover:text-primary transition">
                                +8801614591672
                            </a>
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-foreground mt-6">
                        <TextAnimate animation="slideLeft" by="character">Follow Me</TextAnimate>
                    </h3>
                    <div className="flex space-x-4 mt-3">
                        <a href="https://github.com/Mthe001" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-foreground hover:text-primary transition" />
                        </a>
                        
                        <a href="https://x.com/redwan_mahin68" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6 text-foreground hover:text-primary transition" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-border mt-8 py-4 text-center text-muted-foreground text-sm">
                © {new Date().getFullYear()} MThe001. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
