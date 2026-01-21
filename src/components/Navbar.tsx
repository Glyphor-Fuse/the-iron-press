import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 lg:px-12 flex justify-between items-start"
    >
      <div className="flex flex-col">
        <span className="font-sans font-black text-2xl tracking-tighter leading-none">IRON PRESS</span>
        <span className="text-[10px] tracking-[0.3em] font-sans uppercase opacity-60">Manhattan Roastery</span>
      </div>

      <div className="hidden lg:flex gap-12 font-sans text-xs uppercase tracking-widest pt-2">
        <a href="#" className="hover:text-brass transition-colors">Roastery</a>
        <a href="#" className="hover:text-brass transition-colors">Locations</a>
        <a href="#" className="hover:text-brass transition-colors">Subscriptions</a>
        <a href="#" className="hover:text-brass transition-colors">Archive</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-[1px] w-12 bg-white/30 hidden sm:block" />
        <span className="text-xs uppercase tracking-widest pt-1">Est. 2012</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;