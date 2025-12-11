
import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../constants';
import secureInfraImage from '../Images/Build Secure & Scalable Infrastructure.jpg';

const ServicesSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#030305] relative overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1e2d] border border-white/10 text-xs font-medium text-gray-300 mb-6">
                        <Icons.Box className="w-3 h-3 text-purple-500" />
                        <span>Enterprise Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Secure & Scalable</span> Infrastructure
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Enterprise-grade cloud solutions powered by Red Hat technologies for modern DevOps teams
                    </p>
                </div>

                {/* Top Section: Features Grid & Image */}
                <div className="grid lg:grid-cols-2 gap-12 mb-32">

                    {/* Left: Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-[#0F1014] border border-white/5 hover:border-blue-500/30 group transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Icons.Cloud className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold mb-2">Hybrid Cloud</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Multi-cloud architecture and migration strategies</p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-[#0F1014] border border-white/5 hover:border-red-500/30 group transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-all">
                                <Icons.Box className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold mb-2">DevOps Solutions</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">CI/CD pipelines with OpenShift and Kubernetes</p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-6 rounded-2xl bg-[#0F1014] border border-white/5 hover:border-blue-500/30 group transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Icons.Lock className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold mb-2">Security First</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Zero-trust architecture and compliance</p>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-6 rounded-2xl bg-[#0F1014] border border-white/5 hover:border-red-500/30 group transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-all">
                                <Icons.Activity className="w-5 h-5" />
                            </div>
                            <h3 className="text-white font-bold mb-2">AI-Ready Platforms</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Infrastructure optimized for ML workloads</p>
                        </motion.div>
                    </div>

                    {/* Right: Structure Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] lg:h-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
                            <img
                                src={secureInfraImage}
                                alt="Data Center Infrastructure"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mb-32">
                    <button className="px-8 py-4 rounded-xl bg-[#EE0000] text-white font-medium hover:bg-red-700 hover:shadow-[0_0_25px_rgba(238,0,0,0.4)] transition-all transform hover:-translate-y-1">
                        Request Consultation
                    </button>
                </div>

                {/* Bottom Section: Services Cards */}
                <div className="space-y-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-white">Explore Red Hat Services</h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Red Hat OpenShift", icon: <Icons.Box />, desc: "Build & deploy at scale", color: "bg-[#EE0000]" },
                            { title: "Red Hat Enterprise Linux", icon: <Icons.Server />, desc: "Flexible, reliable platform", color: "bg-[#3B82F6]" },
                            { title: "Red Hat AI", icon: <Icons.Cpu />, desc: "Deliver AI value with your own data", color: "bg-[#10B981]" },
                            { title: "Red Hat Ansible Automation Platform", icon: <Icons.Activity />, desc: "Enterprise automation", color: "bg-[#EE0000]" },
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-[#0F1014] border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{service.title}</h4>
                                <p className="text-sm text-gray-500">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
