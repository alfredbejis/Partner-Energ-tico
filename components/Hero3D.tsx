import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const EnergyField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles in a flowing wave pattern
  const particles = useMemo(() => {
    const count = 2000; // Reduced slightly for stability
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // x: spread wide
      const x = (Math.random() - 0.5) * 20;
      // z: depth
      const z = (Math.random() - 0.5) * 15;
      // y: base height + random noise, will be animated
      const y = (Math.random() - 0.5) * 2; 
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    // Animate waves
    for (let i = 0; i < 2000; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      
      // Create a wave effect based on position and time
      // y = sin(x + t) + cos(z + t)
      positions[i * 3 + 1] = 
        Math.sin(x * 0.5 + time * 0.5) * 1.5 + 
        Math.cos(z * 0.3 + time * 0.3) * 1.5 +
        Math.sin(x * 0.2 + z * 0.2 + time) * 0.5; // Add complexity
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow rotation of the whole system
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ccff00"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-dark-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />
      <Canvas 
        camera={{ position: [0, 4, 12], fov: 50 }} 
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]} // Handle high DPI screens
      >
        <fog attach="fog" args={['#050505', 5, 25]} />
        <EnergyField />
      </Canvas>
    </div>
  );
};

export default Hero3D;