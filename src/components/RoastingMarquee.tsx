const RoastingMarquee = () => {
  const items = ["ETHIOPIA YIRGACHEFFE", "COLOMBIA SUPREMO", "GUATEMALA ANTIGUA", "SUMATRA MANDHELING", "KENYA AA"];
  
  return (
    <div className="border-y border-brass/20 py-6 overflow-hidden flex whitespace-nowrap bg-iron/30 backdrop-blur-sm">
      <div className="animate-marquee flex gap-12 items-center">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-5xl font-sans font-black text-stroke uppercase tracking-tighter opacity-40 hover:opacity-100 transition-opacity cursor-default">
              {item}
            </span>
            <div className="w-3 h-3 bg-brass rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoastingMarquee;