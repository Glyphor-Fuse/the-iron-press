import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ExpressCTA = () => {
  return (
    <motion.div 
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-12 right-0 z-50 flex items-center group"
    >
      <div className="bg-obsidian border border-brass/50 px-8 py-4 flex items-center gap-6 cursor-pointer hover:bg-brass transition-all duration-500 group">
        <div className="flex flex-col">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-zinc-500 group-hover:text-obsidian transition-colors">Order Ahead</span>
          <span className="text-lg font-serif italic text-brass group-hover:text-obsidian transition-colors">Express Pickup</span>
        </div>
        <ArrowRight size={20} className="text-brass group-hover:text-obsidian transition-transform group-hover:translate-x-2" />
      </div>
    </motion.div>
  );
};

export default ExpressCTA;