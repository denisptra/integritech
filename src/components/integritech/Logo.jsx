export const Logo = ({ light = false }) => (
  <a href="#top" aria-label="INTEGRITECH.id — back to top" className="inline-flex items-center gap-2.5">
    <img src="/assets/Logo-1.png" alt="" className="h-6 w-auto" loading="eager" />
    {/* <span className={`font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
      INTEGRITECH
      <span className={light ? 'text-white/50' : 'text-[#B9BDC9]'}>.id</span>
    </span> */}
  </a>
);
