"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useRef, useMemo } from "react"

function LiquiditySurface() {
  const ref = useRef<THREE.Points>(null!)

  // Wider grid for a broad horizon feel
  const cols = 220
  const rows = 100
  const spacingX = 0.13
  const spacingZ = 0.18

  const positions = useMemo(() => {
    const arr = new Float32Array(cols * rows * 3)
    let i = 0
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        arr[i]     = (x - cols / 2) * spacingX   // left-right
        arr[i + 1] = 0                             // height (animated)
        arr[i + 2] = (z - rows / 2) * spacingZ    // depth
        i += 3
      }
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    let i = 0
    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        // Multi-frequency wave — energy field look
        const wave =
          Math.sin(x * 0.18 + t * 0.9) * 0.55 +
          Math.cos(z * 0.22 + t * 0.7) * 0.45 +
          Math.sin((x + z) * 0.12 + t * 1.1) * 0.3 +
          Math.sin(x * 0.06 - t * 0.5) * 0.2

        pos[i + 1] = wave
        i += 3
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#00e5ff"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          // Low horizontal angle — looking across the surface, not down at it
          position: [0, 3.2, 12],
          fov: 62,
          near: 0.1,
          far: 80,
        }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        {/* Fog creates depth — nearer = brighter, far = fades into navy */}
        <fog attach="fog" args={["#040d1a", 8, 28]} />
        <LiquiditySurface />
      </Canvas>
    </div>
  )
}
