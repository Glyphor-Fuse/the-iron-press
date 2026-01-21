import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import RoastingMarquee from '../components/RoastingMarquee';
import BentoGallery from '../components/BentoGallery';
import OriginMap from '../components/OriginMap';
import TransitFeed from '../components/TransitFeed';
import Footer from '../components/Footer';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="relative z-10">
      <Hero />
      
      <section className="py-24 bg-obsidian relative overflow-hidden">
        <RoastingMarquee />
      </section>

      <section className="px-6 lg:px-24 py-32 bg-obsidian">
        <div className="custom-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="font-serif text-6xl lg:text-8xl leading-none mb-8">
              The <span className="text-brass italic">Architecture</span> of Aroma.
            </h2>
            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md">
              In the frantic pace of the Flatiron District, we provide the pause. 
              Our beans are sourced with surgical precision and roasted in small 
              batches within our subterranean vault.
            </p>
          </motion.div>
          
          <motion.div 
            style={{ y: yParallax }}
            className="col-span-12 lg:col-span-7 relative"
          >
            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.pexels.com/photos/34645485/pexels-photo-34645485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="The Iron Press Precision" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-brass/30 hidden lg:block" />
          </motion.div>
        </div>
      </section>

      <BentoGallery />
      
      <OriginMap />

      <section className="bg-iron py-32 border-y border-zinc-800">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-4xl lg:text-6xl font-serif mb-6">Never miss your train. Never settle for bad coffee.</h3>
              <p className="text-zinc-500">Live integration with the L, N, R, and 6 lines. Your shot is timed to your commute.</p>
            </div>
            <TransitFeed />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;