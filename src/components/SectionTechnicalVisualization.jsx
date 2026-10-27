import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, ZoomIn, ZoomOut, Maximize2, Split, Eye, ShieldCheck } from 'lucide-react';

export default function SectionTechnicalVisualization() {
  const mountRef = useRef(null);
  const [viewMode, setViewMode] = useState('reinforcement'); // reinforcement, structural, exploded, wireframe
  const [isExploded, setIsExploded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showTies, setShowTies] = useState(true);

  const modelRefs = useRef({
    foundationMesh: null,
    columnsMeshes: [],
    beamsMeshes: [],
    concreteMeshes: [],
    tiesMeshes: [],
    scene: null,
    camera: null,
    renderer: null,
    masterGroup: null
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F4EE);
    scene.fog = new THREE.FogExp2(0xF5F4EE, 0.02);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(14, 10, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xfffaed, 1.8);
    sun.position.set(15, 25, 15);
    sun.castShadow = true;
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xdbe6f5, 0.8);
    fill.position.set(-15, 10, -10);
    scene.add(fill);

    // Grid platform
    const grid = new THREE.GridHelper(24, 24, 0xC5A059, 0xDED9CE);
    scene.add(grid);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // MATERIALS
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x1E2836, metalness: 0.85, roughness: 0.35 });
    const tieMat = new THREE.MeshStandardMaterial({ color: 0xB8934A, metalness: 0.8, roughness: 0.4 });
    const concMat = new THREE.MeshStandardMaterial({ color: 0xE2DFD2, metalness: 0.1, roughness: 0.8, transparent: true, opacity: 0.65 });
    const wireMat = new THREE.LineBasicMaterial({ color: 0x0B1528, linewidth: 2 });

    // BUILD STRUCTURE PARTS
    // 1. Foundation
    const foundationGroup = new THREE.Group();
    masterGroup.add(foundationGroup);
    const footingGeo = new THREE.BoxGeometry(7, 0.6, 7);
    const footingConc = new THREE.Mesh(footingGeo, concMat);
    footingConc.position.y = 0.3;
    foundationGroup.add(footingConc);

    // 2. Columns
    const columnsGroup = new THREE.Group();
    masterGroup.add(columnsGroup);
    const colCoords = [[-2.4, -2.4], [2.4, -2.4], [2.4, 2.4], [-2.4, 2.4]];
    const columnRebars = [];
    const ties = [];

    colCoords.forEach(([cx, cz]) => {
      // Concrete Column
      const colConc = new THREE.Mesh(new THREE.BoxGeometry(0.8, 6.0, 0.8), concMat);
      colConc.position.set(cx, 3.6, cz);
      columnsGroup.add(colConc);
      modelRefs.current.concreteMeshes.push(colConc);

      // Rebar bars inside
      const offsets = [[-0.25, -0.25], [0.25, -0.25], [0.25, 0.25], [-0.25, 0.25]];
      offsets.forEach(([ox, oz]) => {
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 6.2, 12), steelMat);
        bar.position.set(cx + ox, 3.6, cz + oz);
        columnsGroup.add(bar);
        columnRebars.push(bar);
      });

      // Lateral Ties
      for (let y = 1.0; y <= 6.2; y += 0.4) {
        const tie = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.015, 8, 4), tieMat);
        tie.rotation.x = Math.PI / 2;
        tie.position.set(cx, y, cz);
        columnsGroup.add(tie);
        ties.push(tie);
      }
    });

    // 3. Beams & Floor Slab
    const beamsGroup = new THREE.Group();
    masterGroup.add(beamsGroup);
    const slabGeo = new THREE.BoxGeometry(6.6, 0.3, 6.6);
    const slabMesh = new THREE.Mesh(slabGeo, concMat);
    slabMesh.position.set(0, 6.6, 0);
    beamsGroup.add(slabMesh);
    modelRefs.current.concreteMeshes.push(slabMesh);

    // Beams Rebar at roof
    for (let i = -2.4; i <= 2.4; i += 0.6) {
      const topBar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 6.0, 10), steelMat);
      topBar.rotation.z = Math.PI / 2;
      topBar.position.set(0, 6.6, i);
      beamsGroup.add(topBar);
    }

    // Save refs
    modelRefs.current = {
      foundationMesh: foundationGroup,
      columnsGroup,
      beamsGroup,
      concreteMeshes: modelRefs.current.concreteMeshes,
      tiesMeshes: ties,
      scene,
      camera,
      renderer,
      masterGroup
    };

    // User Interaction Dragging
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let rotY = 0.5;
    let rotX = 0.2;

    const onMouseDown = (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      rotY += dx * 0.006;
      rotX += dy * 0.006;
      rotX = Math.max(-0.2, Math.min(0.6, rotX));
    };
    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isDragging) {
        rotY += 0.0015;
      }
      masterGroup.rotation.y += (rotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (rotX - masterGroup.rotation.x) * 0.05;
      camera.lookAt(0, 3.5, 0);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // UPDATE VIEW MODES & EXPLODED VIEW
  useEffect(() => {
    const { foundationMesh, columnsGroup, beamsGroup, concreteMeshes, tiesMeshes, camera } = modelRefs.current;
    if (!foundationMesh || !columnsGroup || !beamsGroup) return;

    // Explode offsets
    if (isExploded) {
      foundationMesh.position.y = -1.5;
      beamsGroup.position.y = 2.5;
      columnsGroup.position.y = 0.5;
    } else {
      foundationMesh.position.y = 0;
      beamsGroup.position.y = 0;
      columnsGroup.position.y = 0;
    }

    // Concrete visibility
    const showConcrete = viewMode === 'structural';
    concreteMeshes.forEach((mesh) => {
      mesh.visible = showConcrete;
    });

    // Ties visibility
    tiesMeshes.forEach((tie) => {
      tie.visible = showTies;
    });

  }, [viewMode, isExploded, showTies]);

  // ZOOM HANDLER
  const handleZoom = (direction) => {
    const camera = modelRefs.current.camera;
    if (!camera) return;
    if (direction === 'in') {
      camera.position.multiplyScalar(0.85);
    } else {
      camera.position.multiplyScalar(1.15);
    }
  };

  const handleReset = () => {
    const camera = modelRefs.current.camera;
    if (!camera) return;
    camera.position.set(14, 10, 14);
    setIsExploded(false);
    setViewMode('reinforcement');
    setShowTies(true);
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F6F5EE] border-b border-prime-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-prime-border gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-prime-accent tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-prime-accent" />
              SECTION 08 / BIM LOD 400 VIEWER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-prime-navy tracking-tight leading-tight">
              TECHNICAL VISUALIZATION.
            </h2>
          </div>
          <p className="text-prime-slate text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Manipulate our parametric 3D structural model directly. Isolate reinforcement cages, toggle concrete skin, or inspect exploded assemblies.
          </p>
        </div>

        {/* 3D VIEWER CONTAINER WITH HUD CONTROLS */}
        <div className="relative w-full h-[520px] sm:h-[620px] rounded-2xl overflow-hidden border border-prime-border bg-[#F5F4EE] shadow-technical">
          
          {/* Canvas Mount */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* TOP FLOATING CONTROLS: VIEW MODES */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-prime-border shadow-subtle flex items-center gap-1 pointer-events-auto">
              <button
                onClick={() => setViewMode('reinforcement')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-smooth ${
                  viewMode === 'reinforcement'
                    ? 'bg-prime-navy text-white font-semibold'
                    : 'text-prime-navy hover:bg-prime-subtle'
                }`}
              >
                REBAR CAGE VIEW
              </button>
              <button
                onClick={() => setViewMode('structural')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-smooth ${
                  viewMode === 'structural'
                    ? 'bg-prime-navy text-white font-semibold'
                    : 'text-prime-navy hover:bg-prime-subtle'
                }`}
              >
                STRUCTURAL ENVELOPE
              </button>
            </div>

            {/* EXPLODE VIEW TOGGLE */}
            <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-prime-border shadow-subtle flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setIsExploded(!isExploded)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-smooth flex items-center gap-1.5 ${
                  isExploded
                    ? 'bg-prime-accent text-white'
                    : 'bg-prime-subtle text-prime-navy hover:bg-prime-concrete'
                }`}
              >
                <Split className="w-3.5 h-3.5" />
                <span>{isExploded ? 'COLLAPSE MODEL' : 'EXPLODE VIEW'}</span>
              </button>
            </div>
          </div>

          {/* RIGHT FLOATING TOOLBAR: ZOOM & RESET */}
          <div className="absolute right-4 bottom-4 flex flex-col gap-2 pointer-events-auto">
            <button
              onClick={() => handleZoom('in')}
              className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-prime-border shadow-subtle flex items-center justify-center text-prime-navy hover:bg-white hover:text-prime-accent transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom('out')}
              className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-prime-border shadow-subtle flex items-center justify-center text-prime-navy hover:bg-white hover:text-prime-accent transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-prime-border shadow-subtle flex items-center justify-center text-prime-navy hover:bg-white hover:text-prime-accent transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* BOTTOM LEFT: HUD READOUT */}
          <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-prime-border shadow-subtle text-xs font-mono text-prime-slate pointer-events-none space-y-0.5">
            <div className="text-prime-navy font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-prime-accent" />
              <span>TEKLA LOD 400 SIMULATION</span>
            </div>
            <div className="text-[10px]">
              STATUS: {isExploded ? 'EXPLODED ASSEMBLY (Z-AXIS SEPARATED)' : 'COLLAPSED MONOLITHIC FRAME'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
