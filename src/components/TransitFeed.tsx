import { motion } from 'framer-motion';
import { Train } from 'lucide-react';

const TransitFeed = () => {
  const lines = [
    { line: 'N', status: 'ON TIME', color: 'bg-yellow-400' },
    { line: 'R', status: 'ON TIME', color: 'bg-yellow-400' },
    { line: '6', status: '2 MIN DELAY', color: 'bg-green-600' },
    { line: 'L', status: 'ON TIME', color: 'bg-zinc-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-black p-6 w-full lg:w-96 border-4 border-zinc-800 font-mono shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
        <Train size={16} className="text-brass" />
        <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">MTA: 23rd St Station Live</span>
      </div>
      
      <div className="space-y-3">
        {lines.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-3">
              <span className={`${item.color} w-6 h-6 flex items-center justify-center rounded-full text-black font-bold`}>
                {item.line}
              </span>
              <span className="text-zinc-300">MANHATTAN / UPTOWN</span>
            </div>
            <span className={item.status.includes('DELAY') ? 'text-red-500' : 'text-brass'}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TransitFeed;