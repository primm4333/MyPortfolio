import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';

function FloatingBall({ position, color, speed }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={ref} args={[0.3, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

const balls = [
  { position: [0, 0, 0], color: '#00d4ff', speed: 1 },
  { position: [1.5, 1, -0.5], color: '#7b2fff', speed: 1.5 },
  { position: [-1.5, 0.5, 0.3], color: '#ff2d78', speed: 0.8 },
  { position: [0.8, -1.2, 0.2], color: '#00d4ff', speed: 2 },
  { position: [-0.8, -0.8, -0.3], color: '#7b2fff', speed: 1.2 },
  { position: [2, -0.3, 0], color: '#ff2d78', speed: 0.6 },
  { position: [-2, 0.3, 0], color: '#00d4ff', speed: 1.8 },
];

export default function SkillsCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
        <directionalLight position={[-5, -3, 0]} intensity={0.7} color="#7b2fff" />
        {balls.map((ball, i) => (
          <FloatingBall key={i} {...ball} />
        ))}
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
