import { useEffect } from 'react';

const useGoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MRL1JXD916';
    script.async = true;
    document.body.appendChild(script);

    // Configura o Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-MRL1JXD916');
  }, []); 
};

export default useGoogleAnalytics;
