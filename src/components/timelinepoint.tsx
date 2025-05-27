import React, { useState } from 'react';
import { Text, Html } from '@react-three/drei';

type TimelinePointProps = {
  position: [number, number, number];
  title: string;
  subtitle: string;
  side: 'left' | 'right';
};

const TimelinePoint: React.FC<TimelinePointProps> = ({ position, title, subtitle, side }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[hovered ? 0.15 : 0.1, 32, 32]} />
        <meshStandardMaterial color={hovered ? 'yellow' : 'orange'} />
      </mesh>

      <Text
        position={[side === 'right' ? 0.5 : -0.5, 0.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX={side === 'right' ? 'left' : 'right'}
        anchorY="middle"
        maxWidth={2}
      >
        {title}
      </Text>

      {hovered && (
        <Html
          position={[side === 'right' ? 0.5 : -0.5, -0.3, 0]}
          style={{
            width: '220px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: '10px',
            borderRadius: '8px',
            pointerEvents: 'auto',
            userSelect: 'none',
            fontSize: '0.9rem',
            fontFamily: 'Arial, sans-serif',
          }}
          distanceFactor={10}
          transform
          occlude
        >
          <div>{subtitle}</div>
        </Html>
      )}
    </group>
  );
};

export default TimelinePoint;
