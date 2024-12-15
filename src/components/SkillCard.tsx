import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  image: string;
  level: string;
  index: number;
}

export default function SkillCard({ name, image, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 backdrop-blur-sm shadow-xl border border-white/10"
    >
      <div className="relative group">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <img
              src={image}
              alt={name}
              className="w-20 h-20 relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          {name}
        </h3>
        
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-white">
                {level}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: level }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-white/80 to-white"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}