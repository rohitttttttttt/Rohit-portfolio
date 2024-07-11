import React from "react";
import { motion } from "framer-motion";
import Footer from './Footer';

const ComingSoonCard = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 text-center"
            >
                <motion.h2
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                >
                    New Projects Coming Soon
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg text-gray-300 dark:text-gray-400 mb-8"
                >
                    Stay tuned as I work on exciting new projects!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex justify-center"
                >
                    
                </motion.div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                <ComingSoonCard />
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
