// src/components/VantaGlobe.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const VantaGlobe = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 50.00,
      minWidth: 50.00,
      scale: 0.50,
      scaleMobile: 0.50,
      color: 0x00bee3,
      color2: 0xffffff,
      backgroundColor: 0x96eeff,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default VantaGlobe;
