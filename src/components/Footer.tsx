const Footer = () => {
  return (
    <footer className="bg-obsidian pt-32 pb-12 px-6 lg:px-24">
      <div className="border-t border-white/5 pt-12">
        <div className="custom-grid">
          <div className="col-span-12 lg:col-span-6 mb-12">
            <h2 className="text-8xl lg:text-[10vw] font-serif leading-none tracking-tighter">STAY <br/><span className="italic text-brass">PRESSED.</span></h2>
          </div>
          
          <div className="col-span-12 lg:col-span-3 mb-12">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Roastery & HQ</h4>
            <p className="font-serif text-xl">175 5th Ave,<br/>New York, NY 10010</p>
            <p className="mt-4 text-zinc-400">flatiron@ironpress.coffee</p>
          </div>

          <div className="col-span-12 lg:col-span-3 mb-12">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Follow the Grain</h4>
            <ul className="space-y-2 font-serif text-xl">
              <li><a href="#" className="hover:text-brass transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brass transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-brass transition-colors">Read Journal</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mt-24 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-zinc-600">
          <span>© 2024 The Iron Press Coffee Roasters.</span>
          <span>Designed for the Discerning.</span>
          <div className="flex gap-8 mt-4 lg:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;