import { motion } from 'framer-motion';

const OriginMap = () => {
  return (
    <section className="py-32 bg-obsidian border-t border-white/5">
      <div className="px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-24">
          <h2 className="text-8xl lg:text-[12vw] font-serif text-stroke-brass leading-none">ORIGINS</h2>
          <p className="text-zinc-500 font-sans tracking-widest uppercase text-xs">Direct Trade Network</p>
        </div>

        <div className="relative aspect-video w-full bg-iron/20 rounded-sm overflow-hidden flex items-center justify-center">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-10 grayscale scale-150">
             <img src="<span className="block"><img src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A detailed vintage map showcasing global geography with an old paper texture." loading="lazy" /><a href="https://www.pexels.com/photo/world-map-illustration-592753/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Aaditya Arora on Pexels</a></span>" className="w-full h-full object-cover" alt="Map" />
          </div>

          <div className="relative w-full h-full max-w-5xl">
            {/* Origin Points */}
            <OriginPoint x="20%" y="45%" label="Antigua" country="Guatemala" delay={0.1} />
            <OriginPoint x="35%" y="65%" label="Huila" country="Colombia" delay={0.3} />
            <OriginPoint x="58%" y="55%" label="Yirgacheffe" country="Ethiopia" delay={0.5} />
            <OriginPoint x="62%" y="48%" label="Nyeri" country="Kenya" delay={0.7} />
            <OriginPoint x="82%" y="62%" label="Mandheling" country="Sumatra" delay={0.9} />
          </div>
        </div>
      </div>
    </section>
  );
};

const OriginPoint = ({ x, y, label, country, delay }: any) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
    style={{ left: x, top: y }}
    className="absolute cursor-pointer group"
  >
    <div className="w-4 h-4 bg-brass rounded-full animate-pulse" />
    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-brass text-obsidian px-3 py-1 text-[10px] font-bold uppercase">
      {label}, {country}
    </div>
  </motion.div>
);

export default OriginMap;