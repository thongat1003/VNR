'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import { Maximize2, Minimize2 } from 'lucide-react';
import { flushSync } from 'react-dom';
import type { Mesh, Texture } from 'three';
import { SRGBColorSpace, TextureLoader, Vector3 } from 'three';
import type { Exhibit } from '@/types';
import type { Locale } from '@/i18n/config';
import { getExhibits } from '@/i18n/data';
import { ExhibitModal } from '@/components/museum/ExhibitModal';
import { MuseumLegend } from '@/components/museum/MuseumLegend';

type WallSlot = {
  kind: 'wall';
  position: [number, number, number];
  rotation: [number, number, number];
  frame: [number, number];
  hotspot: [number, number];
};

type PedestalSlot = {
  kind: 'pedestal';
  position: [number, number, number];
  pedestal: [number, number, number];
  objectLift: number;
  panelOffset: number;
  panelMount?: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  hotspot: [number, number];
};

type DisplaySlot = WallSlot | PedestalSlot;

type InteractionZone = {
  exhibit: Exhibit;
  position: Vector3;
  radius: number;
};

type ObstacleCollider = {
  centerX: number;
  centerZ: number;
  halfWidth: number;
  halfDepth: number;
  padding?: number;
};

type SpanSegment = {
  center: number;
  span: number;
};

type HistoryStage = {
  id: string;
  title: string;
  period: string;
  summary: string;
  accent: string;
  bounds: {
    minX: number;
    maxX: number;
    minZ: number;
    maxZ: number;
  };
};

const eyeHeight = 1.72;
const moveSpeed = 5.2;
const playerRadius = 0.38;
const roomBounds = {
  minX: -20.4,
  maxX: 24.2,
  minZ: -13.8,
  maxZ: 13.8
};

const initialCameraPosition: [number, number, number] = [-18.2, eyeHeight, 1];
const initialCameraTarget = new Vector3(9.5, 2.1, 0);

const shell = {
  centerX: 6,
  floorY: -0.08,
  ceilingY: 5.55,
  wallY: 2.72,
  width: 62,
  depth: 32,
  height: 5.45,
  wallThickness: 0.24
};

const stageWing = {
  westX: 6.2,
  eastX: 24.8,
  southDividerZ: -5.4,
  northDividerZ: 5.4,
  doorHeight: 3.35,
  doorWidth: 2.4,
  doorCenters: [-9.6, 0, 9.6] as const,
  interRoomDoorCenterX: 18.8,
  interRoomDoorWidth: 2.4
};

const baseHistoryStages: HistoryStage[] = [
  {
    id: 'grand-hall',
    title: 'Đại sảnh trưng bày',
    period: '1907-1928',
    summary: 'Không gian mở đầu giới thiệu quê hương Quảng Trị, tuổi trẻ và bối cảnh hình thành con đường cách mạng.',
    accent: '#8a4a31',
    bounds: { minX: roomBounds.minX, maxX: stageWing.westX, minZ: roomBounds.minZ, maxZ: roomBounds.maxZ }
  },
  {
    id: 'room-struggle',
    title: 'Tù đày và kháng chiến',
    period: '1930-1954',
    summary: 'Phòng nhỏ thứ nhất tập trung vào giai đoạn bị giam cầm và thực tiễn kháng chiến ở Nam Bộ.',
    accent: '#9a5b3a',
    bounds: { minX: stageWing.westX, maxX: roomBounds.maxX, minZ: roomBounds.minZ, maxZ: stageWing.southDividerZ }
  },
  {
    id: 'room-strategy',
    title: 'Tư duy chiến lược',
    period: '1954-1975',
    summary: 'Phòng trung tâm dành cho tư duy chiến lược, bàn làm việc và bản đồ dẫn tới mùa Xuân 1975.',
    accent: '#b37030',
    bounds: { minX: stageWing.westX, maxX: roomBounds.maxX, minZ: stageWing.southDividerZ, maxZ: stageWing.northDividerZ }
  },
  {
    id: 'room-legacy',
    title: 'Di sản sau thống nhất',
    period: '1976-1986',
    summary: 'Phòng cuối dành cho giai đoạn hậu chiến, nhìn lại di sản và ảnh hưởng lịch sử lâu dài.',
    accent: '#d6b26f',
    bounds: { minX: stageWing.westX, maxX: roomBounds.maxX, minZ: stageWing.northDividerZ, maxZ: roomBounds.maxZ }
  }
];

function getHistoryStages(locale: Locale): HistoryStage[] {
  if (locale === 'en') {
    return [
      {
        ...baseHistoryStages[0],
        title: 'Grand introductory hall',
        summary: 'An opening gallery on Quang Tri, Le Duan’s youth, and the social setting that shaped his revolutionary path.'
      },
      {
        ...baseHistoryStages[1],
        title: 'Prisons and resistance',
        summary: 'The first small room focuses on imprisonment under colonial rule and early resistance experience in the South.'
      },
      {
        ...baseHistoryStages[2],
        title: 'Strategic thought',
        summary: 'The central room presents strategic thinking, leadership desks, and maps leading toward the Spring of 1975.'
      },
      {
        ...baseHistoryStages[3],
        title: 'Legacy after reunification',
        summary: 'The final room turns to the post-war period and the long historical legacy left after national reunification.'
      }
    ];
  }

  return baseHistoryStages;
}

const partitionDepthGap = stageWing.doorWidth;
const partitionDoorHeight = stageWing.doorHeight;
const shellInteriorZ = {
  min: -shell.depth / 2,
  max: shell.depth / 2
};
const wallFrameDepth = 0.16;
const wallMountGap = 0.008;
const backWallMountZ = shellInteriorZ.min + wallFrameDepth / 2 + wallMountGap;
const frontWallMountZ = shellInteriorZ.max - wallFrameDepth / 2 - wallMountGap;
const northDividerMountZ = stageWing.northDividerZ - shell.wallThickness / 2 - wallFrameDepth / 2 - wallMountGap;
const eastWallMountX = stageWing.eastX - shell.wallThickness / 2 - 0.06 - wallMountGap;

function createSegmentsFromOpenings(min: number, max: number, openings: Array<{ center: number; width: number }>): SpanSegment[] {
  const segments: SpanSegment[] = [];
  const sortedOpenings = [...openings].sort((left, right) => left.center - right.center);
  let cursor = min;

  for (const opening of sortedOpenings) {
    const openingStart = Math.max(min, opening.center - opening.width / 2);
    const openingEnd = Math.min(max, opening.center + opening.width / 2);

    if (openingStart > cursor) {
      segments.push({
        center: (cursor + openingStart) / 2,
        span: openingStart - cursor
      });
    }

    cursor = Math.max(cursor, openingEnd);
  }

  if (cursor < max) {
    segments.push({
      center: (cursor + max) / 2,
      span: max - cursor
    });
  }

  return segments;
}

const mainPartitionSegments = createSegmentsFromOpenings(
  shellInteriorZ.min,
  shellInteriorZ.max,
  stageWing.doorCenters.map((center) => ({ center, width: stageWing.doorWidth }))
);

const interRoomDividerSegments = createSegmentsFromOpenings(stageWing.westX, stageWing.eastX, [
  { center: stageWing.interRoomDoorCenterX, width: stageWing.interRoomDoorWidth }
]);

const gallerySections = [
  { x: -12.5, glow: '#6e4d34' },
  { x: -4.7, glow: '#6c3a2a' },
  { x: 3.1, glow: '#7b5936' },
  { x: 10.8, glow: '#7a4032' },
  { x: 18.5, glow: '#6f5338' },
  { x: 26.2, glow: '#7c5d37' }
];

const uniformFrameSize = [3.25, 1.98] as [number, number];
const museumDisplayOrder = [
  'homeland-map',
  'youth-doc',
  'prison-files',
  'resistance-radio',
  'southern-thesis',
  'first-secretary-hall',
  'congress-session-1960',
  'working-desk',
  'northern-leadership-1966',
  'memorial-1969',
  'southern-heroes-1972',
  'fidel-castro-1973',
  'politburo-meeting-1975',
  'east-germany-1975',
  'poland-1975',
  'congress-iv-1976',
  'medal-legacy',
  'youth-army-1980',
  'soviet-visit-1980',
  'congress-v-1982',
  'victory-map',
  'passaway-1986'
] as const;

const galleryLayout: Record<string, DisplaySlot> = {
  'homeland-map': {
    kind: 'wall',
    position: [-18, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [14, 58]
  },
  'youth-doc': {
    kind: 'wall',
    position: [-12.5, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [25, 58]
  },
  'prison-files': {
    kind: 'wall',
    position: [-7, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [37, 58]
  },
  'southern-thesis': {
    kind: 'wall',
    position: [-1.5, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [76, 70]
  },
  'first-secretary-hall': {
    kind: 'wall',
    position: [4, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [48, 58]
  },
  'congress-session-1960': {
    kind: 'wall',
    position: [9.5, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [60, 58]
  },
  'resistance-radio': {
    kind: 'pedestal',
    position: [15, 0, -10],
    pedestal: [1.55, 0.9, 1.55],
    objectLift: 0.55,
    panelOffset: 1.55,
    panelMount: {
      position: [15, 2.8, backWallMountZ],
      rotation: [0, 0, 0]
    },
    hotspot: [75, 76]
  },
  'northern-leadership-1966': {
    kind: 'wall',
    position: [20.5, 2.8, backWallMountZ],
    rotation: [0, 0, 0],
    frame: uniformFrameSize,
    hotspot: [76, 50]
  },
  'working-desk': {
    kind: 'pedestal',
    position: [20, 0, -2],
    pedestal: [3.1, 0.52, 2.15],
    objectLift: 0.48,
    panelOffset: -1.85,
    panelMount: {
      position: [eastWallMountX, 2.8, -9],
      rotation: [0, -Math.PI / 2, 0]
    },
    hotspot: [76, 60]
  },
  'memorial-1969': {
    kind: 'wall',
    position: [eastWallMountX, 2.8, -3],
    rotation: [0, -Math.PI / 2, 0],
    frame: uniformFrameSize,
    hotspot: [76, 40]
  },
  'southern-heroes-1972': {
    kind: 'wall',
    position: [eastWallMountX, 2.8, 3],
    rotation: [0, -Math.PI / 2, 0],
    frame: uniformFrameSize,
    hotspot: [76, 30]
  },
  'fidel-castro-1973': {
    kind: 'wall',
    position: [eastWallMountX, 2.8, 9],
    rotation: [0, -Math.PI / 2, 0],
    frame: uniformFrameSize,
    hotspot: [76, 20]
  },
  'politburo-meeting-1975': {
    kind: 'wall',
    position: [22, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [76, 10]
  },
  'victory-map': {
    kind: 'wall',
    position: [17, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [76, 34]
  },
  'east-germany-1975': {
    kind: 'wall',
    position: [12, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [24, 29]
  },
  'poland-1975': {
    kind: 'wall',
    position: [7, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [30, 7]
  },
  'congress-iv-1976': {
    kind: 'wall',
    position: [2, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [40, 29]
  },
  'medal-legacy': {
    kind: 'wall',
    position: [-3, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [47, 7]
  },
  'youth-army-1980': {
    kind: 'wall',
    position: [-8, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [56, 29]
  },
  'soviet-visit-1980': {
    kind: 'wall',
    position: [-13, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [64, 7]
  },
  'congress-v-1982': {
    kind: 'wall',
    position: [-18, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [73, 29]
  },
  'passaway-1986': {
    kind: 'wall',
    position: [-23, 2.8, frontWallMountZ],
    rotation: [0, Math.PI, 0],
    frame: uniformFrameSize,
    hotspot: [85, 29]
  }
};

const obstacleColliders: ObstacleCollider[] = [
  ...Object.entries(galleryLayout).flatMap(([id, slot]) => {
    if (slot.kind !== 'pedestal') {
      return [];
    }

    return [
      {
        centerX: slot.position[0],
        centerZ: slot.position[2],
        halfWidth: slot.pedestal[0] / 2,
        halfDepth: slot.pedestal[2] / 2,
        padding: id === 'working-desk' ? 0.18 : 0.08
      },
      {
        centerX: slot.position[0],
        centerZ: slot.position[2] + slot.panelOffset,
        halfWidth: 0.86,
        halfDepth: 0.16,
        padding: 0.1
      }
    ];
  }),
  ...[
    [-10.8, -7.8],
    [-10.8, 7.8],
    [-0.6, -7.8],
    [-0.6, 7.8]
  ].map(([centerX, centerZ]) => ({
    centerX,
    centerZ,
    halfWidth: 0.48,
    halfDepth: 0.48,
    padding: 0.12
  })),
  ...[
    [-8.2, -8.8],
    [-3.4, -8.8],
    [-8.2, 8.8],
    [-3.4, 8.8]
  ].map(([centerX, centerZ]) => ({
    centerX,
    centerZ,
    halfWidth: 1.3,
    halfDepth: 0.35,
    padding: 0.14
  }))
];

const wallColliders: ObstacleCollider[] = [];

function getWallInteractionPosition(slot: WallSlot) {
  const interactionDistance = 2.3;
  const yaw = slot.rotation[1];

  return new Vector3(
    slot.position[0] + Math.sin(yaw) * interactionDistance,
    eyeHeight,
    slot.position[2] + Math.cos(yaw) * interactionDistance
  );
}

function getNearbyExhibit(position: Vector3, interactionZones: InteractionZone[]) {
  let nearestExhibit: Exhibit | null = null;
  let nearestDistance = Number.POSITIVE_INFINITY;

  for (const zone of interactionZones) {
    const distance = position.distanceToSquared(zone.position);
    if (distance <= zone.radius * zone.radius && distance < nearestDistance) {
      nearestExhibit = zone.exhibit;
      nearestDistance = distance;
    }
  }

  return nearestExhibit;
}

function getCurrentStage(position: Vector3, historyStages: HistoryStage[]) {
  return (
    historyStages.find(
      (stage) =>
        position.x >= stage.bounds.minX &&
        position.x < stage.bounds.maxX &&
        position.z >= stage.bounds.minZ &&
        position.z < stage.bounds.maxZ
    ) ??
    historyStages[historyStages.length - 1]
  );
}

function resolveObstacleCollision(nextPosition: Vector3, currentPosition: Vector3, collider: ObstacleCollider) {
  const expandedHalfWidth = collider.halfWidth + playerRadius + (collider.padding ?? 0);
  const expandedHalfDepth = collider.halfDepth + playerRadius + (collider.padding ?? 0);
  const minX = collider.centerX - expandedHalfWidth;
  const maxX = collider.centerX + expandedHalfWidth;
  const minZ = collider.centerZ - expandedHalfDepth;
  const maxZ = collider.centerZ + expandedHalfDepth;

  if (nextPosition.x <= minX || nextPosition.x >= maxX || nextPosition.z <= minZ || nextPosition.z >= maxZ) {
    return;
  }

  const currentOutsideX = currentPosition.x <= minX || currentPosition.x >= maxX;
  const currentOutsideZ = currentPosition.z <= minZ || currentPosition.z >= maxZ;
  const pushX = Math.min(Math.abs(nextPosition.x - minX), Math.abs(maxX - nextPosition.x));
  const pushZ = Math.min(Math.abs(nextPosition.z - minZ), Math.abs(maxZ - nextPosition.z));

  if (currentOutsideX && !currentOutsideZ) {
    nextPosition.x = currentPosition.x < collider.centerX ? minX : maxX;
    return;
  }

  if (currentOutsideZ && !currentOutsideX) {
    nextPosition.z = currentPosition.z < collider.centerZ ? minZ : maxZ;
    return;
  }

  if (pushX <= pushZ) {
    nextPosition.x = currentPosition.x < collider.centerX ? minX : maxX;
    return;
  }

  nextPosition.z = currentPosition.z < collider.centerZ ? minZ : maxZ;
}

function useSafeTexture(src: string) {
  const [texture, setTexture] = useState<Texture | null>(null);
  const textureRef = useRef<Texture | null>(null);

  useEffect(() => {
    let active = true;
    const loader = new TextureLoader();

    loader.load(
      src,
      (loadedTexture) => {
        if (!active) {
          loadedTexture.dispose();
          return;
        }

        loadedTexture.colorSpace = SRGBColorSpace;
        loadedTexture.needsUpdate = true;

        if (textureRef.current && textureRef.current !== loadedTexture) {
          textureRef.current.dispose();
        }

        textureRef.current = loadedTexture;
        setTexture(loadedTexture);
      },
      undefined,
      () => {
        if (!active) return;

        if (textureRef.current) {
          textureRef.current.dispose();
          textureRef.current = null;
        }

        setTexture(null);
      }
    );

    return () => {
      active = false;

      if (textureRef.current) {
        textureRef.current.dispose();
        textureRef.current = null;
      }
    };
  }, [src]);

  return texture;
}

function getArtworkSize(maxWidth: number, maxHeight: number, texture: Texture | null) {
  const image = texture?.image as { width?: number; height?: number } | undefined;

  if (!image?.width || !image?.height) {
    return [maxWidth, maxHeight] as const;
  }

  const textureAspect = image.width / image.height;
  const frameAspect = maxWidth / maxHeight;

  if (textureAspect >= frameAspect) {
    return [maxWidth, maxWidth / textureAspect] as const;
  }

  return [maxHeight * textureAspect, maxHeight] as const;
}

function ExhibitObject({ exhibit }: { exhibit: Exhibit }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    if (exhibit.type === 'medal') {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.65;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    } else {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + exhibit.position[0]) * 0.08;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9 + exhibit.position[0]) * 0.04;
    }
  });

  const geometry = useMemo(() => {
    switch (exhibit.type) {
      case 'radio':
        return <boxGeometry args={[1.12, 0.68, 0.74]} />;
      case 'desk':
        return <boxGeometry args={[2.12, 0.46, 1.18]} />;
      case 'medal':
        return <cylinderGeometry args={[0.55, 0.55, 0.16, 48]} />;
      default:
        return <boxGeometry args={exhibit.size ?? [1.2, 0.8, 0.18]} />;
    }
  }, [exhibit.size, exhibit.type]);

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {geometry}
      <meshStandardMaterial color={exhibit.color} metalness={0.28} roughness={0.46} />
    </mesh>
  );
}

function WallDisplay({
  exhibit,
  slot,
  onSelect
}: {
  exhibit: Exhibit;
  slot: WallSlot;
  onSelect: (exhibit: Exhibit) => void;
}) {
  const artworkTexture = useSafeTexture(exhibit.image);
  const artworkSize = useMemo(
    () => getArtworkSize(slot.frame[0], slot.frame[1], artworkTexture),
    [artworkTexture, slot.frame]
  );

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(exhibit);
  };

  return (
    <group position={slot.position} rotation={slot.rotation}>
      <mesh position={[0, 0, -0.09]} receiveShadow>
        <boxGeometry args={[slot.frame[0] + 0.46, slot.frame[1] + 0.46, 0.02]} />
        <meshStandardMaterial color="#17110e" roughness={0.92} />
      </mesh>

      <mesh castShadow receiveShadow onClick={handleClick}>
        <boxGeometry args={[slot.frame[0] + 0.34, slot.frame[1] + 0.34, 0.16]} />
        <meshStandardMaterial color="#2d211b" roughness={0.72} metalness={0.18} />
      </mesh>

      <mesh position={[0, 0, 0.095]} onClick={handleClick}>
        <planeGeometry args={artworkSize} />
        {artworkTexture ? (
          <meshBasicMaterial map={artworkTexture} toneMapped={false} />
        ) : (
          <meshStandardMaterial color={exhibit.color} roughness={0.52} metalness={0.08} />
        )}
      </mesh>

      <mesh position={[0, -slot.frame[1] / 2 - 0.28, 0.08]}>
        <boxGeometry args={[slot.frame[0] * 0.76, 0.15, 0.06]} />
        <meshStandardMaterial color="#b68f52" roughness={0.42} metalness={0.22} />
      </mesh>
    </group>
  );
}

function PedestalDisplay({
  exhibit,
  slot,
  onSelect
}: {
  exhibit: Exhibit;
  slot: PedestalSlot;
  onSelect: (exhibit: Exhibit) => void;
}) {
  const panelTexture = useSafeTexture(exhibit.image);
  const panelArtworkSize = useMemo(
    () => getArtworkSize(uniformFrameSize[0], uniformFrameSize[1], panelTexture),
    [panelTexture]
  );
  const panelPosition =
    slot.panelMount?.position ??
    ([slot.position[0], slot.position[1] + 1.95, slot.position[2] + slot.panelOffset] as [number, number, number]);
  const panelRotation = slot.panelMount?.rotation ?? ([0, slot.panelOffset > 0 ? Math.PI : 0, 0] as [number, number, number]);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(exhibit);
  };

  return (
    <>
      <group position={slot.position}>
        <mesh position={[0, slot.pedestal[1] / 2, 0]} castShadow receiveShadow>
          <boxGeometry args={slot.pedestal} />
          <meshStandardMaterial color="#251c17" roughness={0.9} />
        </mesh>

        <mesh position={[0, slot.pedestal[1] + 0.06, 0]} receiveShadow>
          <boxGeometry args={[slot.pedestal[0] * 0.88, 0.09, slot.pedestal[2] * 0.88]} />
          <meshStandardMaterial color="#a77a44" roughness={0.5} metalness={0.1} />
        </mesh>

        <group position={[0, slot.pedestal[1] + slot.objectLift, 0]} onClick={handleClick}>
          <ExhibitObject exhibit={exhibit} />
        </group>
      </group>

      <group position={panelPosition} rotation={panelRotation}>
        {slot.panelMount ? (
          <mesh position={[0, 0, -0.07]} receiveShadow>
            <boxGeometry args={[uniformFrameSize[0] + 0.46, uniformFrameSize[1] + 0.46, 0.02]} />
            <meshStandardMaterial color="#17110e" roughness={0.92} />
          </mesh>
        ) : null}

        <mesh castShadow receiveShadow onClick={handleClick}>
          <boxGeometry args={[uniformFrameSize[0] + 0.34, uniformFrameSize[1] + 0.34, 0.12]} />
          <meshStandardMaterial color="#2c2119" roughness={0.72} />
        </mesh>
        <mesh position={[0, 0, 0.072]} onClick={handleClick}>
          <planeGeometry args={panelArtworkSize} />
          {panelTexture ? (
            <meshBasicMaterial map={panelTexture} toneMapped={false} />
          ) : (
            <meshStandardMaterial color={exhibit.color} roughness={0.5} metalness={0.08} />
          )}
        </mesh>
      </group>
    </>
  );
}

function GalleryShell() {
  const smallRoomWidth = stageWing.eastX - stageWing.westX;

  return (
    <>
      <color attach="background" args={['#080605']} />
      <fog attach="fog" args={['#080605', 22, 64]} />
      <ambientLight intensity={0.92} />
      <hemisphereLight args={['#f7e1c0', '#231812', 1.02]} />
      <directionalLight position={[6, 10, 8]} intensity={1.95} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      {gallerySections.map((section) => (
        <pointLight key={`light-${section.x}`} position={[section.x, 4.9, 0]} intensity={24} distance={15} color="#ffd8ae" />
      ))}

      <mesh position={[shell.centerX, shell.floorY, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[shell.width, shell.depth]} />
        <meshStandardMaterial color="#201713" roughness={0.98} />
      </mesh>

      <mesh position={[shell.centerX, shell.ceilingY, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[shell.width, shell.depth]} />
        <meshStandardMaterial color="#17110e" roughness={0.96} />
      </mesh>

      <mesh position={[shell.centerX, shell.wallY, -(shell.depth / 2 + shell.wallThickness / 2)]} receiveShadow>
        <boxGeometry args={[shell.width, shell.height, shell.wallThickness]} />
        <meshStandardMaterial color="#110d0b" roughness={0.94} />
      </mesh>

      <mesh position={[shell.centerX, shell.wallY, shell.depth / 2 + shell.wallThickness / 2]} receiveShadow>
        <boxGeometry args={[shell.width, shell.height, shell.wallThickness]} />
        <meshStandardMaterial color="#110d0b" roughness={0.94} />
      </mesh>

      <mesh position={[shell.centerX + shell.width / 2 + shell.wallThickness / 2, shell.wallY, 0]} receiveShadow>
        <boxGeometry args={[shell.wallThickness, shell.height, shell.depth]} />
        <meshStandardMaterial color="#100c0a" roughness={0.95} />
      </mesh>

      <mesh position={[shell.centerX - shell.width / 2 - shell.wallThickness / 2, shell.wallY, 0]} receiveShadow>
        <boxGeometry args={[shell.wallThickness, shell.height, shell.depth]} />
        <meshStandardMaterial color="#100c0a" roughness={0.95} />
      </mesh>

      <mesh position={[shell.centerX, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[42, 5.2]} />
        <meshStandardMaterial color="#3a2b21" roughness={0.94} />
      </mesh>

      <mesh position={[-5.4, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 18]} />
        <meshStandardMaterial color="#2d1f1a" roughness={0.95} />
      </mesh>

      <mesh position={[11.8, 0.012, -8.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[smallRoomWidth - 1.4, 6.2]} />
        <meshStandardMaterial color="#291c18" roughness={0.96} />
      </mesh>

      <mesh position={[11.8, 0.012, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[smallRoomWidth - 1.4, 6.2]} />
        <meshStandardMaterial color="#2d1f1a" roughness={0.95} />
      </mesh>

      <mesh position={[11.8, 0.012, 8.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[smallRoomWidth - 1.4, 6.2]} />
        <meshStandardMaterial color="#2d1f1a" roughness={0.95} />
      </mesh>

      {[
        [-10.8, 2.65, -7.8],
        [-10.8, 2.65, 7.8],
        [-0.6, 2.65, -7.8],
        [-0.6, 2.65, 7.8]
      ].map((column, index) => (
        <group key={`column-${index}`} position={column as [number, number, number]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.42, 0.46, 5.1, 24]} />
            <meshStandardMaterial color="#191210" roughness={0.9} />
          </mesh>
          <mesh position={[0, 2.48, 0]}>
            <cylinderGeometry args={[0.72, 0.72, 0.18, 28]} />
            <meshStandardMaterial color="#f1ddc1" emissive="#ffcc89" emissiveIntensity={0.52} />
          </mesh>
        </group>
      ))}

      {[
        [-8.2, 0.34, -8.8],
        [-3.4, 0.34, -8.8],
        [-8.2, 0.34, 8.8],
        [-3.4, 0.34, 8.8]
      ].map((bench, index) => (
        <group key={`bench-${index}`} position={bench as [number, number, number]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.6, 0.16, 0.7]} />
            <meshStandardMaterial color="#6f5236" roughness={0.62} />
          </mesh>
          <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[2.1, 0.18, 0.36]} />
            <meshStandardMaterial color="#241a15" roughness={0.85} />
          </mesh>
        </group>
      ))}

      <mesh position={[stageWing.eastX, shell.wallY, 0]} receiveShadow>
        <boxGeometry args={[shell.wallThickness, shell.height, shell.depth]} />
        <meshStandardMaterial color="#120e0b" roughness={0.95} />
      </mesh>

      {gallerySections.map((section) => (
        <group key={`section-${section.x}`}>
          <mesh position={[section.x, 5.18, 0]}>
            <boxGeometry args={[4.6, 0.1, 1]} />
            <meshStandardMaterial color="#f1ddc1" emissive="#ffcc89" emissiveIntensity={0.72} />
          </mesh>

          <mesh position={[section.x, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.28, 25.2]} />
            <meshBasicMaterial color={section.glow} transparent opacity={0.22} />
          </mesh>
        </group>
      ))}

      {[-10.5, 0, 10.5].map((band) => (
        <mesh key={`band-${band}`} position={[shell.centerX, 0.018, band]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[46, 0.34]} />
          <meshBasicMaterial color="#6c4a2a" transparent opacity={0.18} />
        </mesh>
      ))}
    </>
  );
}

function FirstPersonController({
  disabled,
  historyStages,
  interactionZones,
  onFocusChange,
  onInspect,
  onLockChange,
  onStageChange
}: {
  disabled: boolean;
  historyStages: HistoryStage[];
  interactionZones: InteractionZone[];
  onFocusChange: (exhibit: Exhibit | null) => void;
  onInspect: (exhibit: Exhibit) => void;
  onLockChange: (locked: boolean) => void;
  onStageChange: (stage: HistoryStage) => void;
}) {
  const movement = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false
  });
  const isLockedRef = useRef(false);
  const focusedExhibitRef = useRef<Exhibit | null>(null);
  const currentStageRef = useRef<HistoryStage>(getCurrentStage(new Vector3(...initialCameraPosition), historyStages));
  const forwardVectorRef = useRef(new Vector3());
  const rightVectorRef = useRef(new Vector3());
  const nextPositionRef = useRef(new Vector3());

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          movement.current.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          movement.current.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          movement.current.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          movement.current.right = true;
          break;
        case 'KeyE':
          if (!disabled && focusedExhibitRef.current) {
            event.preventDefault();
            onInspect(focusedExhibitRef.current);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          movement.current.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          movement.current.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          movement.current.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          movement.current.right = false;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [disabled, onInspect]);

  useEffect(() => {
    if (!disabled) return;

    movement.current = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };

    if (typeof document !== 'undefined' && document.pointerLockElement) {
      document.exitPointerLock();
    }

    if (focusedExhibitRef.current) {
      focusedExhibitRef.current = null;
      onFocusChange(null);
    }

    currentStageRef.current = getCurrentStage(new Vector3(...initialCameraPosition), historyStages);
    onStageChange(currentStageRef.current);
    isLockedRef.current = false;
    onLockChange(false);
  }, [disabled, historyStages, onFocusChange, onLockChange, onStageChange]);

  useFrame(({ camera }, delta) => {
    camera.position.y = eyeHeight;

    if (disabled || !isLockedRef.current) {
      return;
    }

    const forwardVector = forwardVectorRef.current;
    const rightVector = rightVectorRef.current;
    const nextPosition = nextPositionRef.current;

    camera.getWorldDirection(forwardVector);
    forwardVector.y = 0;
    if (forwardVector.lengthSq() === 0) {
      forwardVector.set(0, 0, -1);
    }
    forwardVector.normalize();

    rightVector.crossVectors(forwardVector, camera.up).normalize();

    const forwardInput = Number(movement.current.forward) - Number(movement.current.backward);
    const strafeInput = Number(movement.current.right) - Number(movement.current.left);
    const step = moveSpeed * delta;

    nextPosition.copy(camera.position);

    if (forwardInput !== 0) {
      nextPosition.addScaledVector(forwardVector, forwardInput * step);
    }

    if (strafeInput !== 0) {
      nextPosition.addScaledVector(rightVector, strafeInput * step);
    }

    wallColliders.forEach((collider) => {
      resolveObstacleCollision(nextPosition, camera.position, collider);
    });

    obstacleColliders.forEach((collider) => {
      resolveObstacleCollision(nextPosition, camera.position, collider);
    });

    nextPosition.x = Math.min(roomBounds.maxX, Math.max(roomBounds.minX, nextPosition.x));
    nextPosition.z = Math.min(roomBounds.maxZ, Math.max(roomBounds.minZ, nextPosition.z));
    nextPosition.y = eyeHeight;

    camera.position.copy(nextPosition);

    const nextFocusedExhibit = getNearbyExhibit(nextPosition, interactionZones);
    if (nextFocusedExhibit !== focusedExhibitRef.current) {
      focusedExhibitRef.current = nextFocusedExhibit;
      onFocusChange(nextFocusedExhibit);
    }

    const nextStage = getCurrentStage(nextPosition, historyStages);
    if (nextStage.id !== currentStageRef.current.id) {
      currentStageRef.current = nextStage;
      onStageChange(nextStage);
    }
  });

  return (
    <PointerLockControls
      makeDefault
      selector="#museum-enter-fps"
      onLock={() => {
        if (disabled) return;
        isLockedRef.current = true;
        onLockChange(true);
      }}
      onUnlock={() => {
        isLockedRef.current = false;
        movement.current = {
          forward: false,
          backward: false,
          left: false,
          right: false
        };
        focusedExhibitRef.current = null;
        currentStageRef.current = getCurrentStage(new Vector3(...initialCameraPosition), historyStages);
        onFocusChange(null);
        onStageChange(currentStageRef.current);
        onLockChange(false);
      }}
    />
  );
}

function SceneContent({
  controlsDisabled,
  historyStages,
  interactionZones,
  onFocusChange,
  onLockChange,
  onStageChange,
  stagedExhibits,
  onSelect
}: {
  controlsDisabled: boolean;
  historyStages: HistoryStage[];
  interactionZones: InteractionZone[];
  onFocusChange: (exhibit: Exhibit | null) => void;
  onLockChange: (locked: boolean) => void;
  onStageChange: (stage: HistoryStage) => void;
  stagedExhibits: Exhibit[];
  onSelect: (exhibit: Exhibit) => void;
}) {
  return (
    <>
      <GalleryShell />

      {stagedExhibits.map((exhibit) => {
        const slot = galleryLayout[exhibit.id];

        if (slot.kind === 'wall') {
          return <WallDisplay key={exhibit.id} exhibit={exhibit} slot={slot} onSelect={onSelect} />;
        }

        return <PedestalDisplay key={exhibit.id} exhibit={exhibit} slot={slot} onSelect={onSelect} />;
      })}

      <FirstPersonController
        disabled={controlsDisabled}
        historyStages={historyStages}
        interactionZones={interactionZones}
        onFocusChange={onFocusChange}
        onInspect={onSelect}
        onLockChange={onLockChange}
        onStageChange={onStageChange}
      />
    </>
  );
}

export function MuseumScene({ locale }: { locale: Locale }) {
  const museumExhibits = getExhibits(locale);
  const historyStages = useMemo(() => getHistoryStages(locale), [locale]);
  const [currentStage, setCurrentStage] = useState<HistoryStage>(historyStages[0]);
  const [isLocked, setIsLocked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [nearbyExhibitId, setNearbyExhibitId] = useState<string | null>(null);
  const [selectedExhibitId, setSelectedExhibitId] = useState<string | null>(null);
  const [resumeAfterClose, setResumeAfterClose] = useState(false);
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);
  const exhibitMap = useMemo(
    () => Object.fromEntries(museumExhibits.map((exhibit) => [exhibit.id, exhibit])) as Record<string, Exhibit>,
    [museumExhibits]
  );
  const stagedExhibits = useMemo(() => {
    const usedImages = new Set<string>();

    return museumDisplayOrder
      .map((id) => exhibitMap[id])
      .filter((exhibit): exhibit is Exhibit => Boolean(exhibit && galleryLayout[exhibit.id]))
      .filter((exhibit) => {
        if (usedImages.has(exhibit.image)) {
          return false;
        }

        usedImages.add(exhibit.image);
        return true;
      });
  }, [exhibitMap]);
  const interactionZones = useMemo<InteractionZone[]>(
    () =>
      stagedExhibits.map((exhibit) => {
        const slot = galleryLayout[exhibit.id];

        if (slot.kind === 'wall') {
          return {
            exhibit,
            position: getWallInteractionPosition(slot),
            radius: 3.1
          };
        }

        return {
          exhibit,
          position: new Vector3(slot.position[0], eyeHeight, slot.position[2]),
          radius: exhibit.id === 'working-desk' ? 2.7 : 2.2
        };
      }),
    [stagedExhibits]
  );
  const selectedExhibit = selectedExhibitId ? exhibitMap[selectedExhibitId] ?? null : null;
  const nearbyExhibit = nearbyExhibitId ? exhibitMap[nearbyExhibitId] ?? null : null;
  const copy =
    locale === 'en'
      ? {
          collapse: 'Collapse',
          expand: 'Expand',
          collapseAria: 'Collapse museum frame',
          expandAria: 'Expand museum frame',
          nearbyPrompt: (name: string) => `Near ${name}. Press E to inspect the exhibit.`,
          roomPrompt: (period: string) => `You are in ${period}. Use WASD to move, mouse to look, and ESC to exit.`
        }
      : {
          collapse: 'Thu nhỏ',
          expand: 'Phóng to',
          collapseAria: 'Thu nhỏ khung bảo tàng',
          expandAria: 'Phóng to khung bảo tàng',
          nearbyPrompt: (name: string) => `Gần ${name}. Nhấn E để xem hiện vật.`,
          roomPrompt: (period: string) => `Đang ở phòng ${period}. WASD để di chuyển, rê chuột để nhìn, ESC để thoát.`
        };

  useEffect(() => {
    setCurrentStage(historyStages[0]);
  }, [historyStages]);

  useEffect(() => {
    if (!selectedExhibit || typeof document === 'undefined') return;

    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }, [selectedExhibit]);

  const handleSelectExhibit = (exhibit: Exhibit) => {
    setResumeAfterClose(isLocked);
    setSelectedExhibitId(exhibit.id);
  };

  const handleCloseExhibit = () => {
    const shouldResume = resumeAfterClose;

    flushSync(() => {
      setSelectedExhibitId(null);
      setResumeAfterClose(false);
    });

    if (!shouldResume) {
      return;
    }

    canvasElementRef.current?.requestPointerLock();
  };

  const handleFocusChange = (exhibit: Exhibit | null) => {
    setNearbyExhibitId(exhibit?.id ?? null);
  };

  return (
    <>
      <div className={isExpanded ? 'min-h-[72vh]' : undefined}>
      <div
        id="museum-canvas-wrap"
        className={`overflow-hidden border border-white/10 bg-museum.surface shadow-museum ${
          isExpanded
            ? 'fixed inset-4 z-[60] h-[calc(100vh-2rem)] min-h-0 rounded-[2rem]'
            : 'relative h-[72vh] min-h-[540px] rounded-[2rem]'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsExpanded((value) => !value)}
          className="absolute right-4 top-4 z-[12] flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-sm text-stone-100 backdrop-blur-sm transition hover:border-museum.accent/35 hover:bg-black/70"
          aria-label={isExpanded ? copy.collapseAria : copy.expandAria}
        >
          {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          <span>{isExpanded ? copy.collapse : copy.expand}</span>
        </button>

        {!isLocked ? <MuseumLegend isLocked={isLocked} nearbyExhibit={nearbyExhibit} locale={locale} /> : null}

        <Canvas
          shadows
          dpr={[1, 1.4]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          camera={{ position: initialCameraPosition, fov: 48 }}
          onCreated={({ camera, gl }) => {
            canvasElementRef.current = gl.domElement;
            camera.lookAt(initialCameraTarget);
            camera.updateMatrixWorld();
          }}
        >
          <Suspense fallback={null}>
            <SceneContent
              controlsDisabled={selectedExhibit !== null}
              historyStages={historyStages}
              interactionZones={interactionZones}
              onFocusChange={handleFocusChange}
              onLockChange={setIsLocked}
              onStageChange={setCurrentStage}
              stagedExhibits={stagedExhibits}
              onSelect={handleSelectExhibit}
            />
          </Suspense>
        </Canvas>

        {!isLocked ? (
          <div className="pointer-events-none absolute inset-0 z-[3] hidden md:block">
          <div className="absolute left-[34%] right-[6%] top-[4.5%] flex items-start justify-between gap-3">
            {historyStages.map((stage, index) => (
              <div key={stage.id} className="flex min-w-0 flex-1 items-center gap-3">
                <div className="min-w-0 rounded-[1.1rem] border border-white/10 bg-black/28 px-3 py-2 backdrop-blur-sm">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-stone-400">{stage.period}</div>
                  <div className="mt-1 truncate text-xs font-medium text-white">{stage.title}</div>
                </div>
                {index < historyStages.length - 1 ? <div className="h-px flex-1 bg-white/10" /> : null}
              </div>
            ))}
          </div>

          <div
            className="absolute left-[6%] top-[23%] h-[48%] w-[33%] rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_0_40px_rgba(214,178,111,0.08)]"
            style={{ transform: 'perspective(1200px) rotateY(18deg)' }}
          />
          <div className="absolute left-[35%] top-[22%] h-[50%] w-[30%] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
          <div
            className="absolute right-[6%] top-[23%] h-[48%] w-[33%] rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[inset_0_0_40px_rgba(214,178,111,0.08)]"
            style={{ transform: 'perspective(1200px) rotateY(-18deg)' }}
          />
          <div className="absolute inset-x-[16%] bottom-[14%] h-[16%] rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(214,178,111,0.15),transparent_68%)]" />

          </div>
        ) : null}

        {!isLocked ? (
          <div className="pointer-events-none absolute inset-0 z-[5]">
            <div className="absolute inset-x-[10%] bottom-[14%] top-[22%] rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(214,178,111,0.09),transparent_58%)]" />
          </div>
        ) : null}

        {isLocked ? (
          <>
            <div className="pointer-events-none absolute left-1/2 top-5 z-[7] -translate-x-1/2 rounded-[1.2rem] border border-white/10 bg-black/40 px-4 py-3 text-center backdrop-blur-sm">
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-400">{currentStage.period}</div>
              <div className="mt-1 text-sm font-semibold text-white">{currentStage.title}</div>
              <div className="mt-1 max-w-md text-xs text-stone-300">{currentStage.summary}</div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center">
              <div className="relative h-5 w-5">
                <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-white/60" />
                <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-white/60" />
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-5 left-1/2 z-[7] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-stone-100 backdrop-blur-sm">
              {nearbyExhibit ? copy.nearbyPrompt(nearbyExhibit.name) : copy.roomPrompt(currentStage.period)}
            </div>
          </>
        ) : null}
      </div>
      </div>

      <ExhibitModal exhibit={selectedExhibit} onClose={handleCloseExhibit} locale={locale} />
    </>
  );
}
