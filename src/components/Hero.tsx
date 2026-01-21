import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Mask */}
      <div className="absolute inset-0 z-0">
        <img 
          src="<span className="block"><img src="https://images.pexels.com/photos/29963700/pexels-photo-29963700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Symmetrical steel framework at Pier 76, New York City, showcasing urban industrial design." loading="lazy" /><a href="https://www.pexels.com/photo/modern-industrial-design-of-pier-76-in-nyc-29963700/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by _ Whittington on Pexels</a></span>" 
          alt="NYC Industrial" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="flex flex-col font-serif leading-[0.8] text-center lg:text-left">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[18vw] lg:text-[14vw] tracking-tighter"
              >
                FORGED
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[18vw] lg:text-[14vw] tracking-tighter text-brass italic self-center lg:self-end"
              >
                IN STEEL
              </motion.span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 flex flex-col lg:flex-row justify-between items-end border-t border-white/10 pt-8"
          >
            <p className="text-zinc-400 font-sans tracking-widest text-xs uppercase max-w-xs mb-8 lg:mb-0">
              Extracted under 9 bars of pressure. Served in the city that never sleeps.
            </p>
            <div className="flex gap-4 items-center">
              <div className="text-right">
                <span className="block text-brass font-serif text-3xl italic">6:00 AM — 8:00 PM</span>
                <span className="text-[10px] tracking-widest uppercase opacity-50">Daily Operations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;