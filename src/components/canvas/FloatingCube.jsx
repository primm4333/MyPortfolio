import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text, MeshDistortMaterial, Torus, Sphere, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting tech label tags
function TechLabel({ position, text, color, speed, radius, offset }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.2;
    ref.current.rotation.y = -t;
  });
  return (
    <group ref={ref}>
      <Box args={[0.55, 0.18, 0.04]}>
        <meshStandardMaterial color={color} transparent opacity={0.85} roughness={0.1} metalness={0.6} />
      </Box>
      <Text
        position={[0, 0, 0.03]}
        fontSize={0.08}
        color="white"
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {text}
      </Text>
    </group>
  );
}

// Central glowing core — represents the "full stack" hub
function CoreSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.4;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <Sphere ref={ref} args={[0.55, 64, 64]}>
        <MeshDistortMaterial
          color="#00d4ff"
          distort={0.25}
          speed={2.5}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.9}
          envMapIntensity={2}
        />
      </Sphere>
    </Float>
  );
}

// DNA-style double helix of small spheres representing "data flow"
function DataHelix() {
  const helixRef = useRef();
  const count = 18;

  const positions1 = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const t = (i / count) * Math.PI * 2 * 1.5;
      return [Math.cos(t) * 0.85, (i / count) * 3.0 - 1.5, Math.sin(t) * 0.85];
    });
  }, []);

  const positions2 = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const t = (i / count) * Math.PI * 2 * 1.5 + Math.PI;
      return [Math.cos(t) * 0.85, (i / count) * 3.0 - 1.5, Math.sin(t) * 0.85];
    });
  }, []);

  useFrame(({ clock }) => {
    helixRef.current.rotation.y = clock.getElapsedTime() * 0.35;
  });

  return (
    <group ref={helixRef}>
      {positions1.map((pos, i) => (
        <Sphere key={`h1-${i}`} args={[0.045, 8, 8]} position={pos}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.8} />
        </Sphere>
      ))}
      {positions2.map((pos, i) => (
        <Sphere key={`h2-${i}`} args={[0.045, 8, 8]} position={pos}>
          <meshStandardMaterial color="#7b2fff" emissive="#7b2fff" emissiveIntensity={0.8} />
        </Sphere>
      ))}
    </group>
  );
}

// Wireframe rings — like orbital layers of a tech stack
function OrbitalRings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ring1.current.rotation.z = t * 0.2;
    ring1.current.rotation.x = Math.PI / 3;
    ring2.current.rotation.z = -t * 0.15;
    ring2.current.rotation.x = Math.PI / 6;
    ring3.current.rotation.y = t * 0.25;
    ring3.current.rotation.x = Math.PI / 2;
  });

  return (
    <>
      <Torus ref={ring1} args={[1.3, 0.012, 4, 80]}>
        <meshStandardMaterial color="#00d4ff" transparent opacity={0.4} wireframe={false} />
      </Torus>
      <Torus ref={ring2} args={[1.6, 0.01, 4, 80]}>
        <meshStandardMaterial color="#7b2fff" transparent opacity={0.3} />
      </Torus>
      <Torus ref={ring3} args={[1.0, 0.008, 4, 80]}>
        <meshStandardMaterial color="#ff2d78" transparent opacity={0.35} />
      </Torus>
    </>
  );
}

// Floating octahedron particles — code bits in space
function CodeParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      pos: [
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 2,
      ],
      color: ['#00d4ff', '#7b2fff', '#ff2d78'][i % 3],
      scale: 0.04 + Math.random() * 0.06,
      speed: 0.5 + Math.random() * 1.5,
      offset: Math.random() * Math.PI * 2,
    })), []
  );

  return (
    <>
      {particles.map(({ id, pos, color, scale, speed, offset }) => (
        <ParticleOct key={id} initPos={pos} color={color} scale={scale} speed={speed} offset={offset} />
      ))}
    </>
  );
}

function ParticleOct({ initPos, color, scale, speed, offset }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.rotation.x = t;
    ref.current.rotation.z = t * 0.7;
    ref.current.position.y = initPos[1] + Math.sin(t * 0.8) * 0.3;
  });
  return (
    <Octahedron ref={ref} args={[scale, 0]} position={initPos}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} wireframe />
    </Octahedron>
  );
}

function DevScene() {
  const techLabels = [
    { text: 'React', color: '#00d4ff', speed: 0.5, radius: 1.95, offset: 0, position: [0, 0.3, 0] },
    { text: 'Spring Boot', color: '#7b2fff', speed: 0.4, radius: 1.95, offset: 2.1, position: [0, 0, 0] },
    { text: 'Node.js', color: '#00d4ff', speed: 0.55, radius: 1.95, offset: 4.2, position: [0, -0.3, 0] },
    { text: 'MongoDB', color: '#ff2d78', speed: 0.45, radius: 2.1, offset: 1.0, position: [0, 0.5, 0] },
    { text: 'Kafka', color: '#7b2fff', speed: 0.38, radius: 2.1, offset: 3.2, position: [0, -0.2, 0] },
    { text: 'YOLOv8', color: '#ff2d78', speed: 0.6, radius: 2.1, offset: 5.5, position: [0, 0.1, 0] },
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} intensity={2.5} color="#00d4ff" />
      <pointLight position={[-3, 2, -1]} intensity={1.5} color="#7b2fff" />
      <pointLight position={[3, -2, 1]} intensity={1.2} color="#ff2d78" />
      <spotLight position={[0, 4, 2]} intensity={1.0} color="#ffffff" angle={0.4} penumbra={1} />

      <CoreSphere />
      <DataHelix />
      <OrbitalRings />
      <CodeParticles />

      {techLabels.map((label, i) => (
        <TechLabel key={i} {...label} />
      ))}

      <Environment preset="night" />
    </>
  );
}

export default function FloatingCube() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <DevScene />
      </Suspense>
    </Canvas>
  );
}
