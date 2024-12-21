import React, { useRef, useEffect } from 'react';
import './MainStyles.css';

const Main = () => {
   const containerRef = useRef(null);
   const lettersRef = useRef([]);

   useEffect(() => {
      const containerElement = containerRef.current;
      if (!containerElement) return;

      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
              
        const threshold = 0.2 * window.innerWidth;  
        const riseFactor = 0.01 * window.innerWidth;  
      
        lettersRef.current.forEach((letter, index) => {
          const { left, right, top, bottom } = letter.getBoundingClientRect();
          const letterCenterX = (left + right) / 2;
          const letterCenterY = (top + bottom) / 2;
      
          const distanceX = clientX - letterCenterX;
          const distanceY = clientY - letterCenterY;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          if (distance < threshold) {
            const offset = ((threshold - distance) / threshold) * riseFactor;
            letter.style.transform = `translateY(${-offset}px)`;
          } else {
            letter.style.transform = 'translateY(0px)';
          }
        });
      };      

      containerElement.addEventListener('mousemove', handleMouseMove);
      return () => {
         containerElement.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div id='container' ref={containerRef}>
         <div id='nameContainer'>
            <h1 className='name'>
               {'SHANE   KOESTER'.split('').map((letter, index) => (
                  <span
                     key={index}
                     className='letter'
                     ref={(el) => (lettersRef.current[index] = el)}
                  >
                     {letter}
                  </span>
               ))}
            </h1>
         </div>
         <div id='positionTitleContainer'>
            <span>[Software Developer]</span>
         </div>

         <div id='experienceContainer'>
            <h2> My Work</h2>
            <ul>
                <li><b>Automation & Integration Specialist</b>, OPG | 2024</li>
                <li><b>Web Developer</b>, Mind by Design | 2024</li>
            </ul>
            <h2> My Projects</h2>
            <ul>
                <li><b>AI Learns to Drive</b></li>
                <li><b>3D Rendering Engine</b></li>
                <li><b>Optical Character Recognition</b></li>
                <li><b>Spotify Tracker</b></li>
            </ul>
         </div>

      </div>
   );
};

export default Main;
