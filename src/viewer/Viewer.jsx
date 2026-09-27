import { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useCursor, Html } from '@react-three/drei';
import { PMREMGenerator } from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { HOTSPOTS } from '../data/models.js';
import { useLang } from '../i18n.jsx';
import { modelCache, loadModel, normalizeNodeName } from './modelLoader.js';

const CAMERA_POSITION = [0, 0.2, 2.4];

function Environment() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);

  useEffect(() => {
    const pmrem = new PMREMGenerator(gl);
    const envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    return () => {
      scene.environment = null;
      envMap.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
}

function Lights() {
  return (
    <>
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} />
      <ambientLight intensity={0.15} />
    </>
  );
}

function useModelLoader(glb, isBody) {
  const cached = glb ? modelCache.get(glb) : null;
  const [state, setState] = useState(
    cached
      ? { scene: cached.scene, status: 'loaded', progress: 1, hotspotPositions: cached.hotspotPositions }
      : { scene: null, status: 'loading', progress: 0, hotspotPositions: null }
  );

  useEffect(() => {
    if (!glb) {
      setState({ scene: null, status: 'missing', progress: 1, hotspotPositions: null });
      return;
    }

    let cancelled = false;
    loadModel(glb, isBody, (progress) => {
      if (!cancelled) setState((s) => ({ ...s, progress }));
    }).then(({ scene, status, hotspotPositions }) => {
      if (!cancelled) setState({ scene, status, progress: 1, hotspotPositions });
    });

    return () => {
      cancelled = true;
    };
  }, [glb, isBody]);

  return state;
}

function Humanoid({ color }) {
  const mat = { color, roughness: 0.65 };
  return (
    <group>
      <mesh position={[0, 0.74, 0]}>
        <sphereGeometry args={[0.17, 32, 32]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[0, 0.34, 0]}>
        <capsuleGeometry args={[0.22, 0.5, 8, 24]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[-0.28, 0.36, 0]} rotation={[0, 0, 0.25]}>
        <capsuleGeometry args={[0.07, 0.5, 8, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[0.28, 0.36, 0]} rotation={[0, 0, -0.25]}>
        <capsuleGeometry args={[0.07, 0.5, 8, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[-0.12, -0.12, 0]}>
        <capsuleGeometry args={[0.09, 0.55, 8, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
      <mesh position={[0.12, -0.12, 0]}>
        <capsuleGeometry args={[0.09, 0.55, 8, 16]} />
        <meshStandardMaterial {...mat} />
      </mesh>
    </group>
  );
}

function Placeholder({ isBody, color }) {
  if (!isBody) {
    return (
      <mesh>
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
    );
  }
  return <Humanoid color={color} />;
}

function Hotspot({ position, label, onSelect }) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { t } = useLang();

  return (
    <group
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <mesh>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {hovered && (
        <Html position={[0, 0.12, 0]} center zIndexRange={[100, 0]}>
          <div className="hotspot-label">{t(label)}</div>
        </Html>
      )}
    </group>
  );
}

function Hotspots({ positions, onSelect }) {
  const camera = useThree((s) => s.camera);
  return (
    <group>
      {HOTSPOTS.map((hs) => {
        const pos = (positions && positions[normalizeNodeName(hs.node)]) || hs.position;
        return (
          <Hotspot
            key={hs.id}
            position={pos}
            label={hs.label}
            onSelect={() => {
              const azimuth = Math.atan2(camera.position.x, camera.position.z);
              onSelect(hs.organId, azimuth);
            }}
          />
        );
      })}
    </group>
  );
}

function ModelScene({ glb, isBody, fallbackColor, onSelectHotspot, onStatus }) {
  const { scene, status, progress, hotspotPositions } = useModelLoader(glb, isBody);

  useEffect(() => {
    onStatus({ status, progress });
  }, [status, progress, onStatus]);

  return (
    <group>
      {status === 'loaded' && scene ? (
        <primitive object={scene} />
      ) : (
        <Placeholder isBody={isBody} color={fallbackColor} />
      )}
      {isBody && <Hotspots positions={hotspotPositions} onSelect={onSelectHotspot} />}
    </group>
  );
}

function CameraReset({ glb, resetSignal }) {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls);

  useEffect(() => {
    camera.position.set(...CAMERA_POSITION);
    if (controls) {
      controls.target.set(0, 0, 0);
      controls.update();
    }
  }, [glb, resetSignal, camera, controls]);

  return null;
}

export default function Viewer({
  glb,
  isBody,
  fallbackColor,
  autoRotate,
  resetSignal,
  onSelectHotspot,
  onStatus,
}) {
  return (
    <Canvas
      camera={{ position: CAMERA_POSITION, fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <Environment />
      <Lights />
      <ModelScene
        key={glb || 'placeholder'}
        glb={glb}
        isBody={isBody}
        fallbackColor={fallbackColor}
        onSelectHotspot={onSelectHotspot}
        onStatus={onStatus}
      />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
        minDistance={0.6}
        maxDistance={6}
      />
      <CameraReset glb={glb} resetSignal={resetSignal} />
    </Canvas>
  );
}
