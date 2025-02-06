"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi"; // Import Alert component
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"; // Import Alert component
import { IoClose } from "react-icons/io5"; // Import Close icon for the alert
import { TextAnimate } from "../ui/text-animate";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission (e.g., sending to an API)
        console.log(formData);
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
        setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
    };

    const handleCloseAlert = () => {
        setShowAlert(false); // Manually close the alert
    };

    return (
        <section id="contact" className="w-10/12 border  h-[800px] lg:h-[600px] rounded-sm mx-auto py-16 bg-background">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact <span className="text-primary">Me</span>
                </motion.h2>

                <TextAnimate className="mt-6 text-lg text-foreground" animation="slideLeft" by="character">Hey there! I'm always open to new opportunities and collaborations. Feel free to reach out for any project or just to chat!</TextAnimate>
                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="col-span-1 border flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border rounded-md text-background"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border rounded-md text-background"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border rounded-md text-background"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-primary text-white rounded-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="col-span-1 flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4">Find Me On</h3>
                        <div className="flex gap-6">
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                className="text-primary text-3xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/yourusername"
                                target="_blank"
                                className="text-primary text-3xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                className="text-primary text-3xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaTwitter />
                            </motion.a>
                        </div>
                        <div className="flex gap-6 mt-6">
                            <motion.a
                                href="mailto:youremail@example.com"
                                target="_blank"
                                className="text-primary text-3xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaEnvelope />
                            </motion.a>
                            <motion.a
                                href="tel:+1234567890"
                                target="_blank"
                                className="text-primary text-3xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <HiOutlinePhone />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Shadcn Alert after form submission */}
                {showAlert && (
                    <motion.div
                        className="fixed top-4 right-4 z-50 w-full sm:w-96 mt-6 mx-auto"
                        role="alert"
                        initial={{ x: "100%" }} // Initially off-screen to the right
                        animate={{ x: 0 }} // Slide into view
                        exit={{ x: "100%" }} // Slide out to the right when the alert disappears
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        <Alert variant="default" className="relative p-4 bg-background text-foreground rounded-lg shadow-md">
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
