'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function StaticGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0, 0.4, 0.8],
      glowColor: [0.8, 0.9, 1],
      markers: [
        { location: [22.3193, 114.1694], size: 0.1 }, // HK
        { location: [22.5431, 114.0579], size: 0.05 }, // SZ
        { location: [30.5728, 104.0668], size: 0.05 }, // CD
        { location: [3.0738, 101.5183], size: 0.05 }, // MY
        { location: [33.4484, -112.0740], size: 0.05 }, // US
        { location: [-27.4698, 153.0251], size: 0.05 }, // AU
        { location: [52.2297, 21.0122], size: 0.05 }, // PL
        { location: [55.7558, 37.6173], size: 0.05 }, // RU
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', contain: 'layout paint size', opacity: 1 }}
    />
  );
}

