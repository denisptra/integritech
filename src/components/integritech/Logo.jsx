import { Link } from 'react-router-dom';

export const Logo = ({ light = false }) => (
  <Link to="/" aria-label="INTEGRITECH.id — back to top" className="inline-flex items-center gap-2.5">
    <img src="/assets/Logo-1.png" alt="INTEGRITECH.id" className="h-12 w-auto" loading="eager" />
  </Link>
);
