import React from 'react';
import { Icons } from '../constants';
import { motion } from 'framer-motion';

const RHCSASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0C15] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">

        {/* Red Icon Badge */}
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center shadow-glow-red mb-8 transform rotate-3">
          <div className="text-white transform -rotate-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l2 2l2 -2l-2 -5"></path><circle cx="12" cy="9" r="7"></circle></svg>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Red Hat Certified System
          </span>
          <br />
          <span className="text-white">Administrator (RHCSA®)</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
          An IT professional who can perform core system administration on Red Hat Enterprise Linux. Credential earned after passing RHCSA Exam (EX200).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Performance-Based Exam", icon: <Icons.Zap /> },
            { title: "Industry Recognized", icon: <Icons.Shield /> },
            { title: "Career Advancement", icon: <Icons.CheckCircle /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-xl hover:bg-white/10 transition-all group cursor-default"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <h3 className="text-white font-medium text-sm">{item.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RHCSASection;
