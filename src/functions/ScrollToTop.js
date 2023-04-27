import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Restablecer el scroll al cambiar de ruta

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
