import { motion } from 'framer-motion';

const BentoGallery = () => {
  return (
    <section className="py-32 px-6 lg:px-24 bg-obsidian">
      <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[120vh]">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="col-span-12 lg:col-span-7 row-span-3 relative overflow-hidden group"
        >
          <img src="<span className="block"><img src="https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A stylish fusion of modern and rustic in a spacious office hallway interior." loading="lazy" /><a href="https://www.pexels.com/photo/loft-interior-design-of-office-building-5505931/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Mike van Schoonderwalt on Pexels</a></span>" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="NYC Space" />
          <div className="absolute bottom-8 left-8">
            <h4 className="font-serif text-3xl text-white">The Vault</h4>
            <p className="text-xs uppercase tracking-widest text-brass">Flatiron Collective</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="col-span-6 lg:col-span-5 row-span-2 relative overflow-hidden group"
        >
          <img src="<span className="block"><img src="https://images.pexels.com/photos/34563915/pexels-photo-34563915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A white cup of espresso set on rich brown leather, photographed from above." loading="lazy" /><a href="https://www.pexels.com/photo/minimalist-espresso-on-rich-leather-surface-34563915/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Swarup Sarkar on Pexels</a></span>" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Service" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="col-span-6 lg:col-span-5 row-span-4 relative overflow-hidden group"
        >
          <img src="<span className="block"><img src="https://images.pexels.com/photos/30193123/pexels-photo-30193123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Sunset reflections on a modern building facade in New York City." loading="lazy" /><a href="https://www.pexels.com/photo/modern-reflections-on-nyc-building-facade-30193123/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Drew Dempsey on Pexels</a></span>" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Street" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="col-span-12 lg:col-span-7 row-span-3 bg-iron p-12 flex flex-col justify-end"
        >
          <span className="text-brass text-5xl font-serif italic mb-4">01.</span>
          <h3 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">Precision Roasting</h3>
          <p className="text-zinc-400 max-w-sm">Every bean is subjected to a proprietary heat-cycling process to unlock the metallic, citrus, and oak notes native to the terroir.</p>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGallery;