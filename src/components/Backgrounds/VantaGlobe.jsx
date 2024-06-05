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
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x14cbe3,
      backgroundColor: 0xadebff,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default VantaGlobe;
