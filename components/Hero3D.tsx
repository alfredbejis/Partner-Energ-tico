import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const EnergyField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles in a flowing wave pattern
  const particles = useMemo(() => {
    const count = 2500; 
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 3; 
      
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
    
    // Animate waves with more vigor
    for (let i = 0; i < 2500; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      
      // More complex wave equation for "living" movement
      positions[i * 3 + 1] = 
        Math.sin(x * 0.4 + time * 0.8) * 1.2 + 
        Math.cos(z * 0.3 + time * 0.6) * 1.2 +
        Math.sin(x * 0.1 + z * 0.1 + time * 1.5) * 0.5;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotation and Illumination Pulse
    ref.current.rotation.y = time * 0.08;
    
    // Simulate lighting change by pulsing opacity/size slightly via material prop access if needed,
    // but here we rely on the movement to catch the "light".
    // We can also oscillate the color slightly in the material
    const material = ref.current.material as THREE.PointsMaterial;
    const pulse = (Math.sin(time * 2) + 1) * 0.5; // 0 to 1
    material.size = 0.05 + (pulse * 0.02); // Size breathes
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/60 to-dark-900 z-10" />
      <Canvas 
        camera={{ position: [0, 5, 14], fov: 50 }} 
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]} 
      >
        <fog attach="fog" args={['#050505', 5, 30]} />
        <EnergyField />
      </Canvas>
    </div>
  );
};

export default Hero3D;