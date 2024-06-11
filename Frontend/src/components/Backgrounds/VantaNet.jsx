// src/components/VantaNet.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const VantaNet = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x14cbe3,
      backgroundColor: 0xdff3ff,
      points: 6.00,
      maxDistance: 15.00,
      spacing: 20.00,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default VantaNet;
