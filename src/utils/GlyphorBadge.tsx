import { motion } from 'framer-motion';

const GlyphorBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className="fixed bottom-6 left-6 z-[100] pointer-events-auto"
    >
      <a 
        href="https://glyphor.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all group"
      >
        <div className="w-2 h-2 bg-brass rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-zinc-300">
          Made with <span className="text-white font-bold group-hover:text-brass transition-colors">Glyphor Fuse</span>
        </span>
      </a>
    </motion.div>
  );
};

export default GlyphorBadge;