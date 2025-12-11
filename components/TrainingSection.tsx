import React from 'react';
import { Icons } from '../constants';
import { motion } from 'framer-motion';

const TrainingSection: React.FC = () => {
    return (
        <section className="py-20 bg-white text-black overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Image Group */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                            alt="Classroom training"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-pulse-slow">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                            <Icons.Award />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">98%</div>
                            <div className="text-xs text-gray-500 font-medium">Pass Rate</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">
                        <span className="mr-2">⚡</span> About Our Training
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight text-gray-900">
                        Hands-On <span className="text-hawk-purple">Enterprise <br /> Training</span> for Real-World <br /> Success
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our expert instructors bring years of enterprise experience to deliver comprehensive Red Hat training. From foundational Linux skills to advanced cloud architecture, we prepare you for industry certification and career advancement.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                <Icons.Users />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Expert Mentors</h4>
                                <p className="text-xs text-gray-500">Industry veterans guide your learning journey</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                                <Icons.Lightbulb />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Practical Labs</h4>
                                <p className="text-xs text-gray-500">Real cloud environments for hands-on practice</p>
                            </div>
                        </div>
                    </div>

                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        Explore Programs
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default TrainingSection;
