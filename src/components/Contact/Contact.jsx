"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { IoClose } from "react-icons/io5";
import { TextAnimate } from "../ui/text-animate";
import { InteractiveHoverButton } from "../interactive-hover-button";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowAlert(false), 3000);
    };

    const handleCloseAlert = () => setShowAlert(false);

    return (
        <section id="contact" className="w-11/12 max-w-4xl mx-auto min-h-screen py-16 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.h2
                    className="text-4xl font-bold flex justify-center items-center text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <TextAnimate animation="slideLeft" by="character">Get In </TextAnimate><span className="text-primary">Touch</span>
                </motion.h2>

                <TextAnimate className="mt-4 text-lg text-gray-400" animation="slideLeft">
                    Have an exciting project? Let's chat and make something amazing together.
                </TextAnimate>

                {/* Grid Layout for Form & Contact Info */}
                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {/* Contact Form */}
                
                    <div className="p-6 border rounded-lg bg-gray-900 dark:bg-gray-800 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-white">Feel Free to <span className="text-primary">Contact</span> Me</h3>
                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-primary focus:ring focus:ring-primary dark:bg-gray-900 dark:text-white"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-primary focus:ring focus:ring-primary dark:bg-gray-900 dark:text-white"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-primary focus:ring focus:ring-primary dark:bg-gray-900 dark:text-white"
                                    rows="4"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-primary text-primary rounded-md hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 dark:text-white"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>



                    {/* Social Links */}
                
                 <div className="p-9 border rounded-lg bg-background shadow-lg flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4 text-white sm:text-2xl md:text-3xl">Connect With <span className="text-primary">Me</span></h3>
                        <p className="text-gray-400 text-center mb-6 sm:text-base md:text-lg">
                            Let's collaborate! Find me on these platforms.
                        </p>

                        {/* Social Icons Section */}
                        <div className="flex flex-wrap justify-center gap-6 mb-6">
                            {/* GitHub */}
                            <motion.a
                                href="https://github.com/Mthe001"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-400 text-2xl hover:text-white sm:text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaGithub />
                                <span className="text-gray-400 text-sm sm:text-base"> <InteractiveHoverButton>MThe001</InteractiveHoverButton> </span>
                            </motion.a>

                            {/* Twitter */}
                            <motion.a
                                href="https://x.com/redwan_mahin68"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-400 text-3xl hover:text-white sm:text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaTwitter />
                                <span className="text-gray-400 text-sm sm:text-base"><InteractiveHoverButton>@redwan_mahin68</InteractiveHoverButton></span>
                            </motion.a>
                        </div>

                        {/* Contact Info Section */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Email */}
                            <motion.a
                                href="mailto:mtheredwanulhaque@gmail.com"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-400 text-3xl hover:text-white sm:text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaEnvelope />
                                <span className="text-gray-400 text-sm sm:text-base"><InteractiveHoverButton>mt***@gmail.com</InteractiveHoverButton> </span>
                            </motion.a>

                            {/* Phone */}
                            <motion.a
                                href="tel:+8801614591672"
                                target="_blank"
                                className="flex items-center gap-2 text-gray-400 text-3xl hover:text-white sm:text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <HiOutlinePhone />
                                <span className="text-gray-400 text-sm sm:text-base"><InteractiveHoverButton>+8801614591672</InteractiveHoverButton> </span>
                            </motion.a>
                        </div>
                    </div>

                </motion.div>

                {/* Success Alert */}
                {showAlert && (
                    <motion.div
                        className="fixed top-4 right-4 z-50 w-full sm:w-96 mt-6 mx-auto"
                        role="alert"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <Alert variant="default" className="relative p-4 bg-gray-800 text-white rounded-lg shadow-md">
                            <button
                                onClick={handleCloseAlert}
                                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                            >
                                <IoClose size={20} />
                            </button>
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>
                                Thank you for your message! I'll get back to you as soon as possible.
                            </AlertDescription>
                        </Alert>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Contact;
