import { Box3, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { BODY_GLB, ORGAN_GLB } from '../data/models.js';

const TARGET_SCALE = 1.6;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('draco/');
dracoLoader.setDecoderConfig({ type: 'wasm' });

function createLoader() {
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  return loader;
}

export const modelCache = new Map();

const loadingState = new Map();
const loadingListeners = new Set();

function setLoadingState(glb, state) {
  loadingState.set(glb, state);
  loadingListeners.forEach((fn) => fn());
}

export function getLoadingState(glb) {
  return loadingState.get(glb) || null;
}

export function subscribeLoading(fn) {
  loadingListeners.add(fn);
  return () => loadingListeners.delete(fn);
}

function normalizeScene(scene) {
  scene.updateMatrixWorld(true);
  const box = new Box3().setFromObject(scene);
  const size = box.getSize(new Vector3());
  const center = box.getCenter(new Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) {
    const scale = TARGET_SCALE / maxDim;
    scene.scale.setScalar(scale);
    scene.position.copy(center).multiplyScalar(-scale);
  }
  return scene;
}

function fixMaterials(scene) {
  scene.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    mats.forEach((m) => {
      if (m.metalness !== undefined && m.metalness > 0.5) m.metalness = 0;
      if (m.roughness !== undefined && m.roughness < 0.4) m.roughness = 0.6;
      if (m.metalness !== undefined || m.roughness !== undefined) m.needsUpdate = true;
    });
  });
}

export function normalizeNodeName(name) {
  return (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function extractHotspots(scene) {
  scene.updateMatrixWorld(true);
  const map = {};
  scene.traverse((o) => {
    const n = normalizeNodeName(o.name);
    if (n.startsWith('hotspot')) {
      map[n] = o.getWorldPosition(new Vector3()).toArray();
    }
  });
  return map;
}

export function loadModel(glb, isBody, onProgress) {
  return new Promise((resolve) => {
    if (!glb) {
      resolve({ scene: null, status: 'missing', hotspotPositions: null });
      return;
    }
    if (modelCache.has(glb)) {
      const c = modelCache.get(glb);
      setLoadingState(glb, { status: 'loaded', progress: 1 });
      resolve({ scene: c.scene, status: 'loaded', hotspotPositions: c.hotspotPositions });
      return;
    }
    setLoadingState(glb, { status: 'loading', progress: 0 });
    const loader = createLoader();
    loader.load(
      glb,
      (gltf) => {
        fixMaterials(gltf.scene);
        const scene = normalizeScene(gltf.scene);
        const hotspotPositions = isBody ? extractHotspots(scene) : null;
        modelCache.set(glb, { scene, hotspotPositions });
        setLoadingState(glb, { status: 'loaded', progress: 1 });
        resolve({ scene, status: 'loaded', hotspotPositions });
      },
      (xhr) => {
        const progress = xhr.total ? xhr.loaded / xhr.total : 0;
        setLoadingState(glb, { status: 'loading', progress });
        if (onProgress) onProgress(progress);
      },
      () => {
        setLoadingState(glb, { status: 'missing', progress: 1 });
        resolve({ scene: null, status: 'missing', hotspotPositions: null });
      }
    );
  });
}

export async function preloadBodyModels() {
  for (const glb of Object.values(BODY_GLB)) {
    await loadModel(glb, true);
  }
}

function collectOrganGlb() {
  const list = [];
  for (const val of Object.values(ORGAN_GLB)) {
    if (val && typeof val === 'object') {
      for (const glb of Object.values(val)) list.push(glb);
    } else if (val) {
      list.push(val);
    }
  }
  return list.filter(Boolean);
}

export async function preloadOrganModels() {
  for (const glb of collectOrganGlb()) {
    await loadModel(glb, false);
  }
}
