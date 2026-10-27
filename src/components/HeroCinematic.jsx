import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { HERO_STAGES } from '../data/companyData';
import { ChevronRight, Play, Pause, Layers, Eye, Compass, Move3d, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroCinematic({ onStartProject, onExploreServices }) {
  const mountRef = useRef(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState('perspective'); // perspective or orthographic-like
  const [wireframeToggle, setWireframeToggle] = useState(false);
  const currentStage = HERO_STAGES[currentStageIndex];

  // Three.js instances ref
  const sceneContextRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFAF9F5); // Warm white / soft concrete
    // Fog for architectural depth
    scene.fog = new THREE.FogExp2(0xFAF9F5, 0.022);

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(16, 12, 18);

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. LIGHTING (Studio Architectural Light)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7e6, 2.0); // Warm sunlight tone
    keyLight.position.set(20, 30, 20);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 60;
    keyLight.shadow.camera.left = -15;
    keyLight.shadow.camera.right = 15;
    keyLight.shadow.camera.top = 15;
    keyLight.shadow.camera.bottom = -15;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xddeeff, 1.0); // Soft sky fill
    fillLight.position.set(-20, 15, -15);
    scene.add(fillLight);

    const bottomReflect = new THREE.DirectionalLight(0xecd9c2, 0.4);
    bottomReflect.position.set(0, -10, 0);
    scene.add(bottomReflect);

    // 5. GROUND / PLATFORM
    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);

    // Architectural Technical Grid Ground
    const gridHelper = new THREE.GridHelper(30, 30, 0xC5A059, 0xE0DCD0);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // 6. PROCEDURAL STRUCTURAL OBJECT GROUPS
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Group 1: Wireframe / Architectural Lines (Stage 01)
    const wireframeGroup = new THREE.Group();
    masterGroup.add(wireframeGroup);

    // Group 2: Engineering Grid & Annotation Markers (Stage 02)
    const gridGroup = new THREE.Group();
    masterGroup.add(gridGroup);

    // Group 3: Foundation Reinforcement (Stage 03+)
    const foundationGroup = new THREE.Group();
    masterGroup.add(foundationGroup);

    // Group 4: Column Rebar Cages (Stage 03+)
    const columnsGroup = new THREE.Group();
    masterGroup.add(columnsGroup);

    // Group 5: Beam Rebar & Stirrups (Stage 03+)
    const beamsGroup = new THREE.Group();
    masterGroup.add(beamsGroup);

    // Group 6: Floor Slab Rebar & Mesh (Stage 03+)
    const slabGroup = new THREE.Group();
    masterGroup.add(slabGroup);

    // Group 7: Detailing Callout Objects (Stage 04 & 05)
    const detailingGroup = new THREE.Group();
    masterGroup.add(detailingGroup);

    // Group 8: Concrete Hybrid Shell (Stage 08)
    const concreteGroup = new THREE.Group();
    masterGroup.add(concreteGroup);

    // REBAR MATERIALS
    // Steel Rebar (Ribbed metallic look)
    const rebarMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A323D, // Deep engineering steel
      metalness: 0.85,
      roughness: 0.35,
    });

    const stirrupMaterial = new THREE.MeshStandardMaterial({
      color: 0xB8934A, // Muted gold / copper tie wire accent
      metalness: 0.75,
      roughness: 0.38,
    });

    const highlightRebarMaterial = new THREE.MeshStandardMaterial({
      color: 0xC85A32, // Muted terracotta inspection highlight
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0x441b0b,
      emissiveIntensity: 0.4
    });

    const lineMat = new THREE.LineBasicMaterial({ color: 0x1B2D4B, linewidth: 2, transparent: true, opacity: 0.85 });
    const thinGridMat = new THREE.LineBasicMaterial({ color: 0xC5A059, linewidth: 1, transparent: true, opacity: 0.6 });

    // BUILD STRUCTURAL ELEMENTS
    // (A) Structural Wireframe Lines (Stage 1)
    const buildWireframeLines = () => {
      // 4 column lines + connecting beams
      const boxPoints = [];
      const colPositions = [
        [-4, 0, -4], [4, 0, -4], [4, 0, 4], [-4, 0, 4]
      ];
      colPositions.forEach(([x, y, z]) => {
        boxPoints.push(new THREE.Vector3(x, 0, z), new THREE.Vector3(x, 8, z));
      });
      // Ground beams & roof beams
      boxPoints.push(
        new THREE.Vector3(-4, 0, -4), new THREE.Vector3(4, 0, -4),
        new THREE.Vector3(4, 0, -4), new THREE.Vector3(4, 0, 4),
        new THREE.Vector3(4, 0, 4), new THREE.Vector3(-4, 0, 4),
        new THREE.Vector3(-4, 0, 4), new THREE.Vector3(-4, 0, -4),
        // Mid beam floor
        new THREE.Vector3(-4, 4, -4), new THREE.Vector3(4, 4, -4),
        new THREE.Vector3(4, 4, -4), new THREE.Vector3(4, 4, 4),
        new THREE.Vector3(4, 4, 4), new THREE.Vector3(-4, 4, 4),
        new THREE.Vector3(-4, 4, 4), new THREE.Vector3(-4, 4, -4),
        // Top floor
        new THREE.Vector3(-4, 8, -4), new THREE.Vector3(4, 8, -4),
        new THREE.Vector3(4, 8, -4), new THREE.Vector3(4, 8, 4),
        new THREE.Vector3(4, 8, 4), new THREE.Vector3(-4, 8, 4),
        new THREE.Vector3(-4, 8, 4), new THREE.Vector3(-4, 8, -4)
      );
      const wireGeo = new THREE.BufferGeometry().setFromPoints(boxPoints);
      const wireLines = new THREE.LineSegments(wireGeo, lineMat);
      wireframeGroup.add(wireLines);
    };

    // (B) Engineering Framework Grids & Dimension Axes (Stage 2)
    const buildEngineeringGrid = () => {
      // Column grid coordinate rings
      const colPositions = [[-4, 0, -4], [4, 0, -4], [4, 0, 4], [-4, 0, 4]];
      colPositions.forEach(([x, y, z], idx) => {
        // Base ring
        const ringGeo = new THREE.RingGeometry(0.5, 0.65, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xC5A059, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(x, 0.05, z);
        gridGroup.add(ring);

        // Center cross
        const crossPts = [
          new THREE.Vector3(x - 1, 0.05, z), new THREE.Vector3(x + 1, 0.05, z),
          new THREE.Vector3(x, 0.05, z - 1), new THREE.Vector3(x, 0.05, z + 1)
        ];
        const crossGeo = new THREE.BufferGeometry().setFromPoints(crossPts);
        const crossLines = new THREE.LineSegments(crossGeo, thinGridMat);
        gridGroup.add(crossLines);
      });

      // Dimension guide lines between columns
      const dimPts = [
        new THREE.Vector3(-4, 0.2, -5.5), new THREE.Vector3(4, 0.2, -5.5),
        new THREE.Vector3(-4, 0.1, -5.3), new THREE.Vector3(-4, 0.3, -5.7),
        new THREE.Vector3(4, 0.1, -5.3), new THREE.Vector3(4, 0.3, -5.7),
      ];
      const dimGeo = new THREE.BufferGeometry().setFromPoints(dimPts);
      const dimLine = new THREE.LineSegments(dimGeo, thinGridMat);
      gridGroup.add(dimLine);
    };

    // (C) Foundation Rebar Mat (Stage 3+)
    const buildFoundationMat = () => {
      // 2 Footing mats under columns and a connecting raft slab
      const rebarCylinderGeo = new THREE.CylinderGeometry(0.04, 0.04, 9.6, 12);
      
      // X-direction bottom layer rebars
      for (let z = -4.8; z <= 4.8; z += 0.4) {
        const bar = new THREE.Mesh(rebarCylinderGeo, rebarMaterial);
        bar.rotation.z = Math.PI / 2;
        bar.position.set(0, 0.2, z);
        bar.castShadow = true;
        foundationGroup.add(bar);
      }
      // Z-direction top layer rebars
      for (let x = -4.8; x <= 4.8; x += 0.4) {
        const bar = new THREE.Mesh(rebarCylinderGeo, rebarMaterial);
        bar.rotation.x = Math.PI / 2;
        bar.position.set(x, 0.3, 0);
        bar.castShadow = true;
        foundationGroup.add(bar);
      }
    };

    // (D) Column Rebar Cages (Stage 3+)
    const buildColumnCages = () => {
      const colPositions = [[-4, -4], [4, -4], [4, 4], [-4, 4]];
      const colHeight = 8.2;
      const barRadius = 0.045; // 25mm dia representation
      const colBarGeo = new THREE.CylinderGeometry(barRadius, barRadius, colHeight, 16);

      colPositions.forEach(([cx, cz]) => {
        // 8 Main vertical bars per column
        const offsets = [
          [-0.35, -0.35], [0, -0.35], [0.35, -0.35],
          [0.35, 0], [0.35, 0.35], [0, 0.35],
          [-0.35, 0.35], [-0.35, 0]
        ];

        offsets.forEach(([ox, oz], bIdx) => {
          const vertBar = new THREE.Mesh(colBarGeo, bIdx === 2 ? highlightRebarMaterial : rebarMaterial);
          vertBar.position.set(cx + ox, colHeight / 2 + 0.2, cz + oz);
          vertBar.castShadow = true;
          columnsGroup.add(vertBar);
        });

        // Lateral Ties / Stirrups every 0.35m along column height
        for (let y = 0.4; y <= colHeight; y += 0.35) {
          // Rectangular closed tie
          const tiePts = [
            new THREE.Vector3(cx - 0.35, y, cz - 0.35),
            new THREE.Vector3(cx + 0.35, y, cz - 0.35),
            new THREE.Vector3(cx + 0.35, y, cz + 0.35),
            new THREE.Vector3(cx - 0.35, y, cz + 0.35),
            new THREE.Vector3(cx - 0.35, y, cz - 0.35),
            // 135-degree seismic hook
            new THREE.Vector3(cx - 0.2, y, cz - 0.2)
          ];
          const tieCurve = new THREE.CatmullRomCurve3(tiePts, false);
          const tieGeo = new THREE.TubeGeometry(tieCurve, 24, 0.018, 8, false);
          const tieMesh = new THREE.Mesh(tieGeo, stirrupMaterial);
          tieMesh.castShadow = true;
          columnsGroup.add(tieMesh);
        }
      });
    };

    // (E) Beam Rebar & Stirrups (Stage 3+)
    const buildBeams = () => {
      // 4 Ground Beams (y = 0.6) and 4 Floor Beams (y = 4.2) and 4 Roof Beams (y = 8.0)
      const levels = [4.2, 8.0];
      const beamSegments = [
        { from: [-4, -4], to: [4, -4], dir: 'x' },
        { from: [4, -4], to: [4, 4], dir: 'z' },
        { from: [4, 4], to: [-4, 4], dir: 'x' },
        { from: [-4, 4], to: [-4, -4], dir: 'z' },
      ];

      levels.forEach((yLevel) => {
        beamSegments.forEach((seg) => {
          const isX = seg.dir === 'x';
          const length = 7.2;
          const beamBarGeo = new THREE.CylinderGeometry(0.04, 0.04, length, 12);

          // Top Bars (2 bars)
          const topBar1 = new THREE.Mesh(beamBarGeo, rebarMaterial);
          const topBar2 = new THREE.Mesh(beamBarGeo, rebarMaterial);
          // Bottom Bars (3 bars)
          const btmBar1 = new THREE.Mesh(beamBarGeo, rebarMaterial);
          const btmBar2 = new THREE.Mesh(beamBarGeo, rebarMaterial);
          const btmBar3 = new THREE.Mesh(beamBarGeo, rebarMaterial);

          if (isX) {
            topBar1.rotation.z = Math.PI / 2;
            topBar2.rotation.z = Math.PI / 2;
            btmBar1.rotation.z = Math.PI / 2;
            btmBar2.rotation.z = Math.PI / 2;
            btmBar3.rotation.z = Math.PI / 2;

            const zFixed = seg.from[1];
            topBar1.position.set(0, yLevel + 0.25, zFixed - 0.18);
            topBar2.position.set(0, yLevel + 0.25, zFixed + 0.18);
            btmBar1.position.set(0, yLevel - 0.25, zFixed - 0.18);
            btmBar2.position.set(0, yLevel - 0.25, zFixed);
            btmBar3.position.set(0, yLevel - 0.25, zFixed + 0.18);
          } else {
            topBar1.rotation.x = Math.PI / 2;
            topBar2.rotation.x = Math.PI / 2;
            btmBar1.rotation.x = Math.PI / 2;
            btmBar2.rotation.x = Math.PI / 2;
            btmBar3.rotation.x = Math.PI / 2;

            const xFixed = seg.from[0];
            topBar1.position.set(xFixed - 0.18, yLevel + 0.25, 0);
            topBar2.position.set(xFixed + 0.18, yLevel + 0.25, 0);
            btmBar1.position.set(xFixed - 0.18, yLevel - 0.25, 0);
            btmBar2.position.set(xFixed, yLevel - 0.25, 0);
            btmBar3.position.set(xFixed + 0.18, yLevel - 0.25, 0);
          }

          beamsGroup.add(topBar1, topBar2, btmBar1, btmBar2, btmBar3);

          // Closed stirrups along beam
          for (let step = -3.2; step <= 3.2; step += 0.35) {
            const stirrupGeo = new THREE.BoxGeometry(
              isX ? 0.02 : 0.45,
              0.55,
              isX ? 0.45 : 0.02
            );
            const stirrupEdges = new THREE.EdgesGeometry(stirrupGeo);
            const stirrupLine = new THREE.LineSegments(stirrupEdges, new THREE.LineBasicMaterial({ color: 0xB8934A, linewidth: 2 }));
            if (isX) {
              stirrupLine.position.set(step, yLevel, seg.from[1]);
            } else {
              stirrupLine.position.set(seg.from[0], yLevel, step);
            }
            beamsGroup.add(stirrupLine);
          }
        });
      });
    };

    // (F) Floor Slab Reinforcement Mesh (Stage 3+)
    const buildSlabMesh = () => {
      const slabRebarGeo = new THREE.CylinderGeometry(0.025, 0.025, 7.8, 8);
      // Floor at y = 4.35
      for (let z = -3.8; z <= 3.8; z += 0.4) {
        const bar = new THREE.Mesh(slabRebarGeo, rebarMaterial);
        bar.rotation.z = Math.PI / 2;
        bar.position.set(0, 4.35, z);
        slabGroup.add(bar);
      }
      for (let x = -3.8; x <= 3.8; x += 0.4) {
        const bar = new THREE.Mesh(slabRebarGeo, rebarMaterial);
        bar.rotation.x = Math.PI / 2;
        bar.position.set(x, 4.38, 0);
        slabGroup.add(bar);
      }
    };

    // (G) Detailing Hotspot Markers (Stage 4 & 5)
    const buildDetailingMarkers = () => {
      // 3D coordinate target pin at beam-column node (4, 4.2, 4)
      const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xC85A32 });
      const pinMesh = new THREE.Mesh(sphereGeo, markerMat);
      pinMesh.position.set(4, 4.2, 4);

      // Target ring
      const ringGeo = new THREE.RingGeometry(0.2, 0.28, 32);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xC5A059, side: THREE.DoubleSide }));
      ring.position.set(4, 4.2, 4);
      ring.rotation.y = Math.PI / 4;

      detailingGroup.add(pinMesh, ring);
    };

    // (H) Architectural Concrete Hybrid Shell (Stage 8)
    const buildConcreteShell = () => {
      // Translucent architectural concrete form
      const concMat = new THREE.MeshStandardMaterial({
        color: 0xECEAE1, // Architectural soft warm concrete
        metalness: 0.1,
        roughness: 0.85,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      });

      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xE8F0F8,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.75,
        transparent: true,
        opacity: 0.45
      });

      // 4 Columns Concrete
      const colConcGeo = new THREE.BoxGeometry(0.9, 8.2, 0.9);
      const colPositions = [[-4, -4], [4, -4], [4, 4], [-4, 4]];
      colPositions.forEach(([x, z]) => {
        const colMesh = new THREE.Mesh(colConcGeo, concMat);
        colMesh.position.set(x, 4.1, z);
        concreteGroup.add(colMesh);
      });

      // Floor Slabs Concrete
      const slabConcGeo = new THREE.BoxGeometry(9.4, 0.35, 9.4);
      const floorSlab1 = new THREE.Mesh(slabConcGeo, concMat);
      floorSlab1.position.set(0, 4.2, 0);
      const floorSlab2 = new THREE.Mesh(slabConcGeo, concMat);
      floorSlab2.position.set(0, 8.2, 0);
      concreteGroup.add(floorSlab1, floorSlab2);

      // Subtle Glass Curtain Infill
      const glassGeo = new THREE.BoxGeometry(7.2, 3.6, 0.08);
      const glassWall1 = new THREE.Mesh(glassGeo, glassMat);
      glassWall1.position.set(0, 6.1, 3.9);
      const glassWall2 = new THREE.Mesh(glassGeo, glassMat);
      glassWall2.position.set(0, 2.1, 3.9);
      concreteGroup.add(glassWall1, glassWall2);
    };

    // EXECUTE BUILDS
    buildWireframeLines();
    buildEngineeringGrid();
    buildFoundationMat();
    buildColumnCages();
    buildBeams();
    buildSlabMesh();
    buildDetailingMarkers();
    buildConcreteShell();

    // INTERACTION / ROTATION CONTROLS
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0.45;
    let targetRotationX = 0.15;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      targetRotationX = Math.max(-0.2, Math.min(0.6, targetRotationX));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile/tablet
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
      targetRotationY += deltaX * 0.006;
      targetRotationX += deltaY * 0.006;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd);

    // STORE REFS
    sceneContextRef.current = {
      scene,
      camera,
      renderer,
      masterGroup,
      wireframeGroup,
      gridGroup,
      foundationGroup,
      columnsGroup,
      beamsGroup,
      slabGroup,
      detailingGroup,
      concreteGroup,
      setCameraPos: (x, y, z, tx = 0, ty = 3.5, tz = 0) => {
        cameraTargetPos.set(x, y, z);
        cameraLookAtTarget.set(tx, ty, tz);
      }
    };

    const cameraTargetPos = new THREE.Vector3(16, 12, 18);
    const cameraLookAtTarget = new THREE.Vector3(0, 3.5, 0);
    const currentLookAt = new THREE.Vector3(0, 3.5, 0);

    // ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle smooth rotation if not dragging
      if (!isDragging) {
        targetRotationY += 0.0012;
      }

      // Smooth master group rotation damping
      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.05;

      // Smooth camera motion
      camera.position.lerp(cameraTargetPos, 0.045);
      currentLookAt.lerp(cameraLookAtTarget, 0.045);
      camera.lookAt(currentLookAt);

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // UPDATE 3D SCENE ON STAGE CHANGE
  useEffect(() => {
    const ctx = sceneContextRef.current;
    if (!ctx) return;

    const {
      wireframeGroup,
      gridGroup,
      foundationGroup,
      columnsGroup,
      beamsGroup,
      slabGroup,
      detailingGroup,
      concreteGroup,
      setCameraPos
    } = ctx;

    // Reset visibility per stage rules:
    // Stage 0: STRUCTURAL INTENT (wireframe only)
    // Stage 1: ENGINEERING FRAMEWORK (wireframe + grid)
    // Stage 2: REINFORCEMENT SYSTEM (rebar reveals progressively)
    // Stage 3: REBAR DETAILING (camera zooms into joint)
    // Stage 4: QUANTITY INTELLIGENCE (rebar + data)
    // Stage 5: VERIFICATION (cleaned up model)
    // Stage 6: COMPLETE STRUCTURE (camera pulls back)
    // Stage 7: FINAL TRANSFORMATION (hybrid rebar + concrete shell)

    switch (currentStageIndex) {
      case 0: // 01 / STRUCTURAL INTENT
        wireframeGroup.visible = true;
        gridGroup.visible = false;
        foundationGroup.visible = false;
        columnsGroup.visible = false;
        beamsGroup.visible = false;
        slabGroup.visible = false;
        detailingGroup.visible = false;
        concreteGroup.visible = false;
        setCameraPos(16, 12, 18, 0, 3.5, 0);
        break;

      case 1: // 02 / ENGINEERING FRAMEWORK
        wireframeGroup.visible = true;
        gridGroup.visible = true;
        foundationGroup.visible = false;
        columnsGroup.visible = false;
        beamsGroup.visible = false;
        slabGroup.visible = false;
        detailingGroup.visible = false;
        concreteGroup.visible = false;
        setCameraPos(14, 15, 14, 0, 3.0, 0);
        break;

      case 2: // 03 / REINFORCEMENT SYSTEM
        wireframeGroup.visible = true;
        gridGroup.visible = true;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = false;
        concreteGroup.visible = false;
        setCameraPos(15, 10, 16, 0, 3.5, 0);
        break;

      case 3: // 04 / REBAR DETAILING (Zoom into beam-column junction)
        wireframeGroup.visible = false;
        gridGroup.visible = false;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = true;
        concreteGroup.visible = false;
        setCameraPos(7.5, 5.8, 7.5, 4, 4.2, 4); // Close-up on column-beam node
        break;

      case 4: // 05 / QUANTITY INTELLIGENCE
        wireframeGroup.visible = false;
        gridGroup.visible = true;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = true;
        concreteGroup.visible = false;
        setCameraPos(10, 7.5, 11, 2, 4.0, 2);
        break;

      case 5: // 06 / QUALITY CHECK / VERIFICATION
        wireframeGroup.visible = false;
        gridGroup.visible = true;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = false;
        concreteGroup.visible = false;
        setCameraPos(13, 9, 13, 0, 4.0, 0);
        break;

      case 6: // 07 / COMPLETE STRUCTURE (Camera pull-back wide angle)
        wireframeGroup.visible = true;
        gridGroup.visible = true;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = false;
        concreteGroup.visible = false;
        setCameraPos(21, 16, 22, 0, 3.5, 0);
        break;

      case 7: // 08 / FINAL TRANSFORMATION (Hybrid Rebar + Frame + Concrete)
        wireframeGroup.visible = false;
        gridGroup.visible = true;
        foundationGroup.visible = true;
        columnsGroup.visible = true;
        beamsGroup.visible = true;
        slabGroup.visible = true;
        detailingGroup.visible = false;
        concreteGroup.visible = true;
        setCameraPos(17, 12, 19, 0, 4.0, 0);
        break;

      default:
        break;
    }
  }, [currentStageIndex]);

  // AUTO-PLAY TIMER
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStageIndex((prev) => (prev + 1) % HERO_STAGES.length);
      }, 4200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-prime-bg border-b border-prime-border pt-24 pb-8">
      {/* Subtle Engineering Watermark Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-75 pointer-events-none" />

      {/* TOP HEADER / LOGO BAR METADATA */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-prime-accent animate-pulse" />
          <span className="tech-tag text-prime-slate text-xs font-mono">
            INTERACTIVE 3D CAD ENGINE — LOD 400 VERIFIED
          </span>
        </div>

        {/* 3D CONTROLS TOOLBAR */}
        <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-prime-border shadow-subtle text-xs">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono transition-smooth ${
              isPlaying ? 'bg-prime-accent text-white' : 'text-prime-navy hover:bg-prime-concrete'
            }`}
            title="Auto-play engineering stages"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'PAUSE' : 'AUTO-TOUR'}</span>
          </button>

          <span className="text-prime-border">|</span>

          <span className="text-prime-slate text-[11px] font-mono flex items-center gap-1">
            <Move3d className="w-3.5 h-3.5 text-prime-accent" />
            <span className="hidden sm:inline">Drag to Orbit / Inspect</span>
          </span>
        </div>
      </div>

      {/* MAIN VIEWPORT: 3D CANVAS & OVERLAY CONTENT */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] my-4">
        
        {/* LEFT / EDITORIAL CALLOUT CONTENT */}
        <div className="lg:col-span-5 z-10 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-prime-border rounded-md shadow-subtle w-fit">
            <span className="text-xs font-mono text-prime-accent font-semibold tracking-wider">
              {currentStage.tag}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy leading-[1.1] tracking-tight">
            {currentStage.headline}
          </h1>

          <p className="text-prime-slate text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            {currentStage.desc}
          </p>

          {/* DYNAMIC STAGE ANNOTATIONS (STAGE READOUT) */}
          <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl border border-prime-border shadow-subtle space-y-2">
            <div className="flex items-center justify-between border-b border-prime-borderLight pb-2">
              <span className="text-xs font-mono uppercase text-prime-slate font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-prime-accent" />
                Technical Parameters
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-prime-subtle rounded text-prime-navy">
                Stage {currentStage.num} of 08
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {currentStage.annotations.map((ann, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-[10px] font-mono text-prime-slate uppercase">{ann.label}</div>
                  <div className="text-xs font-mono font-semibold text-prime-navy truncate">{ann.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS (STAGE 8 or GLOBAL) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onStartProject}
              className="px-6 py-3.5 bg-prime-navy hover:bg-prime-navyLight text-white rounded-lg font-medium text-sm tracking-wide shadow-premium hover:shadow-elevated transition-smooth flex items-center gap-2 group"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="px-6 py-3.5 bg-white hover:bg-prime-concrete text-prime-navy border border-prime-border rounded-lg font-medium text-sm tracking-wide shadow-subtle transition-smooth"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>

        {/* RIGHT / 3D INTERACTIVE ARCHITECTURAL CANVAS */}
        <div className="lg:col-span-7 relative w-full h-[450px] sm:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden border border-prime-border bg-gradient-to-b from-[#FDFDFB] to-[#F3F2EB] shadow-technical flex items-center justify-center">
          
          {/* Three.js Canvas Container */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Engineering Canvas Corner HUD Accents */}
          <div className="absolute top-4 left-4 pointer-events-none crosshair-corner">
            <div className="text-[10px] font-mono text-prime-slate uppercase bg-white/80 px-2 py-0.5 rounded border border-prime-border">
              COORD: 11°39'N 78°09'E
            </div>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-prime-navy bg-white/85 backdrop-blur px-2.5 py-1 rounded border border-prime-border shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE CAD RENDER</span>
            </div>
          </div>

          {/* Bottom Floating Dimension Tag (Simulated Drawing Annotation) */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex items-center justify-between text-[11px] font-mono text-prime-slate bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-prime-border">
            <div className="flex items-center gap-4">
              <span>SCALE: 1:50</span>
              <span className="hidden sm:inline">PROJECTION: AXONOMETRIC</span>
              <span>GRID: 8.4M BAY</span>
            </div>
            <div className="text-prime-accent font-semibold">
              PRIME CORE ENGINE v2.6
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL / STAGE TIMELINE CONTROLLER (8 STAGES) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-4">
        <div className="bg-white/95 backdrop-blur-md rounded-xl border border-prime-border p-3 shadow-subtle">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {HERO_STAGES.map((stage, idx) => {
              const isActive = idx === currentStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setCurrentStageIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`text-left p-2 rounded-lg transition-smooth border ${
                    isActive
                      ? 'bg-prime-navy text-white border-prime-navy shadow-subtle'
                      : 'bg-prime-subtle/70 hover:bg-prime-concrete text-prime-slate border-transparent hover:border-prime-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-prime-accent' : 'text-prime-slateLight'}`}>
                      {stage.num}
                    </span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />}
                  </div>
                  <div className={`text-[11px] font-medium truncate mt-0.5 ${isActive ? 'text-white' : 'text-prime-navy'}`}>
                    {stage.tag.replace(/^\d+\s*\/\s*/, '')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
