// Import core
import React, { useEffect } from 'react';
// Import third parts
// Import customs

const SubstackWidget: React.FC = () => {
  useEffect(() => {
    // Codice di inizializzazione dell'embed di Substack
    window.CustomSubstackWidget = {
      substackUrl: 'prostack.substack.com',
      placeholder: 'example@gmail.com',
      buttonText: 'Subscribe',
      theme: 'custom',
      colors: {
        primary: '#FFFFFF',
        input: '#000000',
        email: '#FFFFFF',
        text: '#000000',
      },
    };

    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Pulizia del codice quando il componente viene smontato
      document.body.removeChild(script);
      delete window.CustomSubstackWidget;
    };
  }, []);

  return <div id="custom-substack-embed"></div>;
};

export default SubstackWidget;
