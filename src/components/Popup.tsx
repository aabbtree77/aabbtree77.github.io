import { useState, useEffect } from 'react';

const Popup = ({ imageSrc, link, message }: { imageSrc: string; link: string; message: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`
      fixed bottom-0
      right-0
      w-[25vw] 
      h-[50vh]
      transform transition-transform duration-[2s] ease-linear
      ${isMounted ? 'translate-y-0' : 'translate-y-full'}
      z-50
      md:m-4
      flex flex-col items-center
      overflow-hidden
      right-0
     
    `}>
      <a href={link} target="_blank" 
        rel="noopener noreferrer" className="p-4 text-center font-medium text-accent">
        {message}
      </a>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full h-full hover:opacity-90 transition-opacity"
      >
        <img 
          src={imageSrc} 
          alt="Popup visual" 
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
};

export default Popup;