// Prime Core Rebar - Central Engineering Data & Content Store
// All items are modular, verified, and completely editable placeholders

export const COMPANY_INFO = {
  name: "Prime Core Rebar",
  tagline: "Engineering the Information Behind the Structure",
  description: "Professional rebar detailing, BBS (Bar Bending Schedule), reinforcement quantity estimation, steel takeoff, and structural documentation services. Build-ready precision for structural consultants, fabricators, and contractors.",
  phone: "+91 93637 34963",
  whatsapp: "+91 93637 34963",
  email: "pediatechworld@gmail.com",
  location: "Salem - 636304",
  country: "India (Serving Global Engineering Teams)",
  foundedYear: "2014",
  socials: {
    instagram: "https://www.instagram.com/pedia_tech_world?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==",
    youtube: "https://www.youtube.com/@PediaTechWorld",
    facebook: "https://www.facebook.com/people/Sanjay-Kumar-S-S/61584899961028/?rdid=ooMFDruKRLgFaOWL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CzBz9iccw%2F",
    linkedin: "https://www.linkedin.com/in/pedia-tech-world-5aa1623a0/"
  },
  stats: [
    { label: "Delivered Structures", value: "100+", subtext: "Commercial, industrial & residential" },
    { label: "Engineering Partners", value: "40+", subtext: "Fabricators & consultancies worldwide" },
    { label: "Years Experience", value: "12+", subtext: "Senior rebar detailing specialists" },
    { label: "Detail-Focused", value: "100%", subtext: "Zero-clash tolerance protocol" },
    { label: "Steel Detailed", value: "320K+", subtext: "Metric tons of reinforcement documented" }
  ],
  standards: [
    { code: "ACI 318 / CRSI", region: "North America", desc: "Building Code Requirements for Structural Concrete & Manual of Standard Practice" },
    { code: "BS 8666 / BS 8110", region: "United Kingdom & Middle East", desc: "Scheduling, dimensioning, bending and cutting of steel reinforcement" },
    { code: "Eurocode 2 (EN 1992)", region: "Europe", desc: "Design of concrete structures - General rules and rules for buildings" },
    { code: "IS 2502 / IS 1786", region: "India & South Asia", desc: "Code of practice for bending and fixing of bars for concrete reinforcement" },
    { code: "AS/NZS 4671", region: "Australia & New Zealand", desc: "Steel reinforcing materials and detailing specifications" }
  ]
};

export const CORE_PILLARS = [
  {
    key: "detail",
    number: "01",
    title: "DETAIL",
    headline: "Uncompromising Rebar Shop Drawings",
    description: "Every lap, splice, stirrup hook, and bar mark is planned to the millimeter. We deliver clash-free 2D/3D shop drawings that fabricators cut directly and site ironworkers install without field modifications.",
    specs: ["Bar Placement Plans", "Lap & Splice Schedules", "Congestion Resolution", "3D Clash Detection"]
  },
  {
    key: "estimate",
    number: "02",
    title: "ESTIMATE",
    headline: "Accurate Bar Bending Schedules & Takeoffs",
    description: "Eliminate costly steel overruns. Our structural estimation engine produces cut-weight summaries, bar shape categorizations, waste minimization profiles, and direct procurement spreadsheets.",
    specs: ["BBS with Shape Codes", "Diameter-wise Weight Breakup", "Mill Cut Optimization", "Procurement Forecasts"]
  },
  {
    key: "deliver",
    number: "03",
    title: "DELIVER",
    headline: "Build-Ready Coordination Packages",
    description: "We don't deliver disconnected files; we deliver coordinated execution packages formatted in industry standards (.DWG, .DXF, .IFC, .BVBS, .PDF, .XLSX) ready for shear lines and automated bending benders.",
    specs: ["Automated Bender BVBS", "BIM IFC Reinforcement", "Fabrication Sequence", "Field Inspection Guides"]
  }
];

export const CAPABILITIES = [
  {
    id: "rebar-detailing",
    num: "01",
    title: "REBAR DETAILING",
    tagline: "Site-ready placement drawings with absolute dimensional clarity.",
    description: "Detailed reinforcement drawings prepared for practical site execution, avoiding bar clashing at dense beam-column junctions and ensuring clear concrete covers according to project structural specifications.",
    deliverables: ["Foundation footing layouts", "Column cage & tie elevations", "Transfer beam framing", "Two-way slab mesh & crank schedules", "Staircase reinforcement details", "Retaining & shear wall schedules"],
    tools: ["AutoCAD Structural", "Tekla Structures", "Revit Rebar BIM", "RebarCAD"],
    standards: "ACI 318, BS 8666, IS 2502"
  },
  {
    id: "bbs",
    num: "02",
    title: "BAR BENDING SCHEDULE (BBS)",
    tagline: "Standardized bar schedules with marks, shapes, dimensions, and weights.",
    description: "Accurate bar bending schedules prepared strictly per regional codes (ACI / BS 8666 / IS 2502 / Eurocode 2). Every bar mark is tagged with bend shape code, cutting length, hook allowances, and total weight.",
    deliverables: ["Standard Bar Shape Codes", "Member-wise BBS Tables", "Summary by Rebar Grade & Diameter", "BVBS / CAM Machine Exports", "Cutting & Scrap Analysis"],
    tools: ["Custom BBS Engine", "Tekla BBS", "Automated Excel Macro Packages"],
    standards: "BS 8666:2020, ACI 315, IS 2502"
  },
  {
    id: "estimation",
    num: "03",
    title: "REBAR QUANTITY ESTIMATION",
    tagline: "Reliable reinforcement quantity calculations for tender bidding and material orders.",
    description: "Comprehensive rebar takeoffs generated directly from architectural and structural contract drawings. Accurate tonnage forecasts allow estimators to win competitive bids and avoid budget surprises.",
    deliverables: ["Tender Rebar Estimates", "Gross vs Net Weight Analysis", "Diameter Distribution Metrics", "Lap & Chair Allowance Logs", "Cost Reconciliation Sheets"],
    tools: ["PlanSwift", "Bluebeam Revu", "Tekla Estimation"],
    standards: "CRSI Manual, SMM7, NRM2"
  },
  {
    id: "steel-takeoff",
    num: "04",
    title: "STEEL TAKEOFF & MATERIAL PLANNING",
    tagline: "Granular bill of quantities for purchasing, mill orders, and logistics.",
    description: "Granular tracking of all steel reinforcement elements including couplers, tie wire, dowel bars, weldable rebar, and support chairs to streamline mill procurement and site supply logistics.",
    deliverables: ["Mill Order Length Optimization", "Coupler & Mechanical Splice Takeoff", "Support Bar / Chair Scheduling", "Procurement Phasing Schedules"],
    tools: ["SteelTakeoff Pro", "Linear Cut Optimizer"],
    standards: "ASTM A615 / A706, BS 4449, IS 1786"
  },
  {
    id: "structural-drawings",
    num: "05",
    title: "STRUCTURAL REINFORCEMENT DRAWINGS",
    tagline: "Engineering support drawings translating design intent into construction realities.",
    description: "Support structural engineers and general contractors by translating structural design design calculations and framing sketches into comprehensive construction documentation sets.",
    deliverables: ["Structural General Notes", "Typical Reinforcement Details", "Expansion Joint Details", "Water-retaining Basements", "Post-Tensioning Interface Plans"],
    tools: ["Revit", "AutoCAD", "Navisworks"],
    standards: "AISC, ACI, Eurocode"
  },
  {
    id: "3d-rebar-modeling",
    num: "06",
    title: "3D REBAR MODELING & BIM COORDINATION",
    tagline: "Parametric 3D rebar models for federated clash resolution and 4D sequencing.",
    description: "Full LOD 400 3D reinforcement models integrated into federated BIM environments. Identify clashes between rebar, MEP ducting, embed plates, anchor bolts, and post-tensioned tendons before concrete pours.",
    deliverables: ["LOD 350/400 BIM Models", "Navisworks Clash Reports", "Bar Congestion Heatmaps", "Visual 4D Pour Sequence Videos"],
    tools: ["Tekla Structures", "Autodesk Revit", "Navisworks Manage"],
    standards: "BIM Level 2, ISO 19650"
  },
  {
    id: "shop-drawings",
    num: "07",
    title: "REBAR FABRICATION SHOP DRAWINGS",
    tagline: "Clear instructions tailored for factory shearlines, benders, and tagged bundling.",
    description: "Fabrication-focused drawing sets tailored to the specific bending equipment, transport limits, and handling capacities of your rebar fabrication yard.",
    deliverables: ["Shearline Cut Lists", "Bundle Tagging Diagrams", "Truck Loading Plans", "Field Placement Guides"],
    tools: ["aSa Rebar Software", "Soule", "RebarCAD"],
    standards: "CRSI Fabricator Standards"
  },
  {
    id: "construction-doc",
    num: "08",
    title: "CONSTRUCTION DOCUMENTATION",
    tagline: "As-built records, site modification logs, and engineering sign-off packs.",
    description: "Keep project records audit-ready. We update detailing packages to reflect field RFI resolutions, site adjustments, inspection punch lists, and final as-built reinforcement documentation.",
    deliverables: ["As-Built Reinforcement Drawings", "RFI Resolution Drawings", "Site Query Response Sheets", "Concreting Sign-off Dossiers"],
    tools: ["Procore", "PlanGrid", "Bluebeam"],
    standards: "QA/QC Structural ISO 9001"
  }
];

export const WORKFLOW_STAGES = [
  {
    stage: "01",
    title: "DRAWING INGESTION",
    sub: "Architectural & Structural Ingestion",
    desc: "Receive contract design drawings, general structural notes, soil reports, and specification documents. Perform initial audit of dimensions and grid alignments.",
    duration: "Day 01"
  },
  {
    stage: "02",
    title: "INTERPRETATION & RFI",
    sub: "Design Intent Clarification",
    desc: "Cross-reference structural calculations against architectural clearances. Generate concise RFIs to resolve ambiguities before drawing generation.",
    duration: "Day 01-02"
  },
  {
    stage: "03",
    title: "REBAR DETAILING",
    sub: "Precision 2D/3D Drafting",
    desc: "Develop comprehensive reinforcement layouts. Detail bar laps, crank bars, corner ties, and embed clearances matching code-mandated cover depths.",
    duration: "Day 02-04"
  },
  {
    stage: "04",
    title: "BBS GENERATION",
    sub: "Algorithmic Bar Scheduling",
    desc: "Generate full Bar Bending Schedules attributing each rebar mark with shape code, bend dimensions, cutting length, count, and theoretical weight.",
    duration: "Day 04"
  },
  {
    stage: "05",
    title: "ESTIMATION & TAKEOFF",
    sub: "Material Optimization",
    desc: "Compile member-wise and diameter-wise weight summaries. Optimize stock lengths to minimize scrap and wastage percentage.",
    duration: "Day 05"
  },
  {
    stage: "06",
    title: "QUALITY CHECK (QA/QC)",
    sub: "Senior Engineer Verification",
    desc: "Multi-tier peer check against project specifications, code standards, and bar clash tolerances. Zero-error signoff by chartered structural engineer.",
    duration: "Day 05-06"
  },
  {
    stage: "07",
    title: "BUILD-READY DELIVERY",
    sub: "Multi-Format Coordination Package",
    desc: "Issue final package (.PDF, .DWG, .DXF, .IFC, .BVBS, .XLSX) complete with fabrication cut lists and site installation guide for immediate field execution.",
    duration: "Delivery"
  }
];

export const PROJECTS_DATA = [
  {
    id: "proj-01",
    name: "The Grand Horizon Substructure & Raft",
    category: "COMMERCIAL",
    type: "Dense Raft Foundation & Sump Pit Reinforcement",
    location: "Financial Tower District",
    year: "2025",
    area: "780,000 sq.ft",
    tonnage: "4,650 MT Rebar",
    scope: ["Raft Mat Bottom & Top Grids", "Elevator Pit & Sump Formwork Detailing", "Column Starter Dowels Coordination", "BBS Bar Marking Schedule"],
    highlight: "Detailed high-density 32mm bottom and top mat reinforcement with coordinated elevator sump recess drops and starter cage lap offsets.",
    image: "/images/projects/raft-foundation-mat.jpg",
    stats: { foundation: "1,850 MT", columns: "1,450 MT", slabs: "1,350 MT", scrapRate: "1.4%" }
  },
  {
    id: "proj-02",
    name: "Riverview Cable-Stayed Viaduct & Pylons",
    category: "INFRASTRUCTURE",
    type: "Cable-Stayed Bridge Deck & Pylon Reinforcement",
    location: "National Coastal Highway",
    year: "2025",
    area: "3.8 km Alignment",
    tonnage: "8,900 MT Rebar",
    scope: ["Flared Cable-Stayed Pylon Cages", "Box Girder Segmental Reinforcement", "Post-Tensioning Duct Coordination", "Seismic Ductile Tie Schedules"],
    highlight: "Complex 3D rebar detailing for towering bridge pylons, anchorage heads, and cantilevered segmental box girders with zero tendon clashing.",
    image: "/images/projects/cable-stayed-bridge-viaduct.jpg",
    stats: { foundation: "3,600 MT", columns: "3,100 MT", slabs: "2,200 MT", scrapRate: "1.2%" }
  },
  {
    id: "proj-03",
    name: "Apex Logistics & Automated Fulfillment Center",
    category: "INDUSTRIAL",
    type: "Heavy Column Cages & Substructure Inspection",
    location: "Global Industrial Corridor",
    year: "2024",
    area: "1,250,000 sq.ft",
    tonnage: "6,200 MT Rebar",
    scope: ["Heavy Column Cages with Ductile Ties", "High-Bay Foundation Pedestals", "BBS Bar Marks & Lap Staggering", "On-Deck Rebar Inspection Coordination"],
    highlight: "Conducted joint drawing-to-site verification audits for 8-bar column starter bundles and continuous perimeter raft mesh.",
    image: "/images/projects/column-cage-site-inspection.jpg",
    stats: { foundation: "2,600 MT", columns: "1,400 MT", slabs: "2,200 MT", scrapRate: "1.1%" }
  },
  {
    id: "proj-04",
    name: "Metro Substructure Core & Pump Deck",
    category: "INFRASTRUCTURE",
    type: "Mass Concrete Foundation & Wall Pour Sequencing",
    location: "Central Transit Junction",
    year: "2024",
    area: "620,000 sq.ft",
    tonnage: "5,100 MT Rebar",
    scope: ["Mass Concrete Foundation Sequencing", "Shear Wall Starter Bars", "Boom Pump & Crane Clearances", "Automated Bender BVBS Export"],
    highlight: "Multi-stage pour sequencing detailing rebar dowel projections, pump boom clearances, and pre-tied cage bundles ready for immediate placement.",
    image: "/images/projects/heavy-industrial-foundation-pour.jpg",
    stats: { foundation: "2,300 MT", columns: "1,200 MT", slabs: "1,600 MT", scrapRate: "1.5%" }
  },
  {
    id: "proj-05",
    name: "Aura High-Rise Cantilever Deck",
    category: "RESIDENTIAL",
    type: "Cantilevered Edge Beams & Suspended Slab Detailing",
    location: "Bayfront Skyline Tower",
    year: "2024",
    area: "950,000 sq.ft",
    tonnage: "4,850 MT Rebar",
    scope: ["Cantilever Edge Beam Reinforcement", "Shoring & Formwork Load Interface", "Top Tension Crack-Control Mesh", "Slab Edge Safety Kickers"],
    highlight: "Engineered negative top reinforcement and perimeter tie hooks for heavy cantilevered balcony edges and transfer falsework.",
    image: "/images/projects/cantilever-slab-shoring.jpg",
    stats: { foundation: "1,350 MT", columns: "1,950 MT", slabs: "1,550 MT", scrapRate: "1.3%" }
  }
];

export const DETAILING_LAB_SAMPLES = [
  {
    id: "col-c1",
    name: "Column C-1 Heavy Cage",
    member: "Square Column 600mm x 600mm",
    cover: "40 mm",
    bars: [
      { mark: "C1-01", type: "Main Longitudinal", dia: 25, count: 12, length: 4.85, shapeCode: "00 (Straight)", weightUnit: 3.85, totalWeight: 224.07 },
      { mark: "C1-02", type: "Outer Master Tie", dia: 10, count: 24, length: 2.28, shapeCode: "51 (Rectangular Tie)", weightUnit: 0.617, totalWeight: 33.76 },
      { mark: "C1-03", type: "Diamond Cross Tie", dia: 10, count: 24, length: 1.62, shapeCode: "53 (Diamond Tie)", weightUnit: 0.617, totalWeight: 23.99 }
    ],
    totalMemberWeight: 281.82,
    code: "ACI 318-19 / IS 13920"
  },
  {
    id: "beam-b12",
    name: "Transfer Girder B-12",
    member: "Continuous Girder 450mm x 900mm",
    cover: "50 mm",
    bars: [
      { mark: "B12-01", type: "Top Negative Bars", dia: 32, count: 6, length: 7.20, shapeCode: "21 (L-Bend)", weightUnit: 6.313, totalWeight: 272.72 },
      { mark: "B12-02", type: "Bottom Positive Bars", dia: 28, count: 8, length: 8.40, shapeCode: "21 (L-Bend)", weightUnit: 4.834, totalWeight: 324.84 },
      { mark: "B12-03", type: "4-Legged Shear Stirrups", dia: 12, count: 48, length: 2.54, shapeCode: "51 (Closed Stirrup)", weightUnit: 0.888, totalWeight: 108.26 }
    ],
    totalMemberWeight: 705.82,
    code: "BS 8666:2020 / EN 1992-1-1"
  },
  {
    id: "footing-f4",
    name: "Isolated Raft Footing F-4",
    member: "Pad Footing 3200mm x 3200mm x 850mm",
    cover: "75 mm",
    bars: [
      { mark: "F4-01", type: "Bottom Mesh X-Dir", dia: 20, count: 22, length: 3.45, shapeCode: "21 (L-Bend Up)", weightUnit: 2.466, totalWeight: 187.17 },
      { mark: "F4-02", type: "Bottom Mesh Y-Dir", dia: 20, count: 22, length: 3.45, shapeCode: "21 (L-Bend Up)", weightUnit: 2.466, totalWeight: 187.17 },
      { mark: "F4-03", type: "Column Starter Dowels", dia: 25, count: 16, length: 2.10, shapeCode: "21 (L-Footing)", weightUnit: 3.85, totalWeight: 129.36 }
    ],
    totalMemberWeight: 503.70,
    code: "ACI 318 / IS 456:2000"
  }
];

export const GALLERY_DATA = [
  { id: 1, title: "Dense Raft Foundation Mesh & Elevator Pit Formwork", category: "REBAR", tag: "Heavy Rebar", img: "/images/projects/raft-foundation-mat.jpg" },
  { id: 2, title: "Cable-Stayed Bridge Pylon & Segmental Box Girder", category: "SITE", tag: "Infrastructure", img: "/images/projects/cable-stayed-bridge-viaduct.jpg" },
  { id: 3, title: "Engineers Conducting Column Cage Placement Audit", category: "TEAM", tag: "Structural Team", img: "/images/projects/column-cage-site-inspection.jpg" },
  { id: 4, title: "Algorithmic Bar Bending Schedule (BBS) Sheet", category: "BBS", tag: "BS 8666", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" },
  { id: 5, title: "Mass Concrete Substructure Pour & Boom Pump Deck", category: "PROJECTS", tag: "Executed Site", img: "/images/projects/heavy-industrial-foundation-pour.jpg" },
  { id: 6, title: "Structural Engineering CAD Drafting Station", category: "DRAWINGS", tag: "CAD / Revit", img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80" },
  { id: 7, title: "High-Rise Cantilever Balcony Deck Shoring & Ties", category: "DETAILING", tag: "Slab Detailing", img: "/images/projects/cantilever-slab-shoring.jpg" },
  { id: 8, title: "LOD 400 3D Reinforcement Model of Core Junction", category: "3D MODELS", tag: "Tekla BIM", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" },
  { id: 9, title: "Curved Retaining Wall Spiral & Horizontal Reinforcement", category: "REBAR", tag: "Specialized", img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80" }
];

export const TEAM_MEMBERS = [
  {
    name: "Sanjay Kumar S S",
    role: "Managing Director & Chief Structural Technologist",
    credentials: "B.E. Civil, M.Tech Structural Engineering",
    expertise: "Rebar Engineering, Large Scale Infrastructure Detailing & International Code Compliance",
    experience: "15+ Years",
    bio: "Leads engineering delivery, QA protocol enforcement, and technological modernization at Prime Core Rebar."
  },
  {
    name: "R. Balakrishnan",
    role: "Principal Rebar Detailing Specialist",
    credentials: "Diploma in Civil & Structural Detailing",
    expertise: "ACI 318 / BS 8666 Shop Drawings, Heavy Industrial Foundations & Transfer Beams",
    experience: "12+ Years",
    bio: "Oversees senior detailing teams with mastery in avoiding steel congestion in heavily reinforced junctions."
  },
  {
    name: "K. Mohanraj",
    role: "Chief Estimation & Quantity Takeoff Engineer",
    credentials: "B.Tech Civil Engineering",
    expertise: "Steel Takeoffs, Scrap Minimization Algorithms, Mill Cut Optimization & BBS Auditing",
    experience: "10+ Years",
    bio: "Ensures material variance stays under 1.5% across multimillion-dollar procurement packages."
  },
  {
    name: "N. Divya Lakshmi",
    role: "BIM Rebar & 3D Modeling Lead",
    credentials: "M.Sc BIM & Digital Construction",
    expertise: "Tekla Structures LOD 400, Navisworks Clash Detection & IFC Interoperability",
    experience: "8+ Years",
    bio: "Drives 3D rebar digital twins, enabling ironworkers and general contractors to coordinate pours virtually."
  },
  {
    name: "V. Anand Kumar",
    role: "Senior QA/QC Structural Auditor",
    credentials: "Chartered Structural Engineer",
    expertise: "Peer Reviews, ISO 9001 Compliance, Code Verification (IS, BS, Eurocode, ACI)",
    experience: "14+ Years",
    bio: "Performs rigorous multi-pass quality checks before any shop drawing leaves our studio."
  },
  {
    name: "M. Praveen",
    role: "Global Project Delivery Coordinator",
    credentials: "B.E. Civil & Project Management",
    expertise: "RFI Management, Client Liaison, Mill Delivery Schedules & Timeframe Control",
    experience: "7+ Years",
    bio: "Liaises directly with client fabrication shops and job sites across USA, UK, UAE, and India."
  }
];

export const INDUSTRIES_LIST = [
  {
    id: "ind-1",
    title: "Commercial & Mixed-Use",
    desc: "Corporate office towers, retail podiums, convention complexes, and underground parking basements requiring intricate PT-rebar coordination.",
    stat: "42+ Structures"
  },
  {
    id: "ind-2",
    title: "High-Rise Residential",
    desc: "Tall shear wall and core wall systems, transfer slabs, and modular floor repetition optimized for fast-track ironwork cycles.",
    stat: "38+ Towers"
  },
  {
    id: "ind-3",
    title: "Heavy Industrial & Manufacturing",
    desc: "Turbine machine foundations, deep pit walls, crane runways, and automated high-bay fulfillment slabs with extreme load capacities.",
    stat: "25+ Plants"
  },
  {
    id: "ind-4",
    title: "Infrastructure & Transportation",
    desc: "Viaducts, bridge piers, abutments, metro station boxes, drainage culverts, and retaining walls built to rigorous transport authority codes.",
    stat: "18+ Projects"
  },
  {
    id: "ind-5",
    title: "Institutional & Healthcare",
    desc: "Hospitals with vibration-sensitive scanner labs, universities, research centres, and government civic headquarters.",
    stat: "15+ Campuses"
  },
  {
    id: "ind-6",
    title: "Specialized Concrete Structures",
    desc: "Water retaining reservoirs, silos, radiation shielding bunkers, marine docks, and precast element reinforcement.",
    stat: "20+ Complexes"
  }
];

export const HERO_STAGES = [
  {
    id: 1,
    num: "01",
    tag: "01 / STRUCTURAL INTENT",
    headline: "EVERY STRUCTURE STARTS WITH PRECISION.",
    desc: "The minimal architectural line drawing establishes the primary spatial geometry. Pure structural intent before a single kilogram of steel is cast.",
    annotations: [
      { label: "GRID REF", value: "AXIS A1-G7" },
      { label: "GEOMETRY", value: "Symmetric Frame" },
      { label: "AXIS TOLERANCE", value: "± 2.0 mm" }
    ],
    threeMode: "wireframe"
  },
  {
    id: 2,
    num: "02",
    tag: "02 / ENGINEERING FRAMEWORK",
    headline: "ENGINEERING FRAMEWORK ALIGNED TO LOAD PATHS.",
    desc: "Structural grids solidify. Column locations, beam lines, dimension markers, and coordinate reference points emerge to balance gravity and lateral shears.",
    annotations: [
      { label: "COL GRID", value: "8400 x 8400 mm" },
      { label: "DESIGN LOAD", value: "Dead + Live 14.5 kN/m²" },
      { label: "SEISMIC ZONE", value: "Zone III / Ductile" }
    ],
    threeMode: "grid"
  },
  {
    id: 3,
    num: "03",
    tag: "03 / REINFORCEMENT SYSTEM",
    headline: "THE REINFORCEMENT SKELETON EMERGES.",
    desc: "Structural lines transform into realistic steel reinforcement. Foundation mat bottom/top mats, column cages with ductile ties, beam bottom bars, and slab meshes reveal progressively.",
    annotations: [
      { label: "STEEL GRADE", value: "Fe500D / Gr 60" },
      { label: "MAT BARS", value: "T25 @ 150 c/c B/W" },
      { label: "CAGE STATUS", value: "Tied & Positioned" }
    ],
    threeMode: "rebarProgressive"
  },
  {
    id: 4,
    num: "04",
    tag: "04 / REBAR DETAILING",
    headline: "PRECISION DOWN TO THE SMALLEST DETAIL.",
    desc: "Camera zooms into intricate reinforcement nodes. Inspect bar marks, diameter callouts, spacing, lap locations, 135° seismic bend hooks, and congestion-free beam-column cores.",
    annotations: [
      { label: "BAR MARK", value: "B-12 / MK-04" },
      { label: "HOOK RADIUS", value: "6d Mandrel Pin" },
      { label: "LAP SPLICE", value: "Class B / 54d Staggered" }
    ],
    threeMode: "detailZoom"
  },
  {
    id: 5,
    num: "05",
    tag: "05 / QUANTITY INTELLIGENCE",
    headline: "DATA EMBEDDED IN EVERY ELEMENT.",
    desc: "The 3D structural model calculates steel in real time. Dynamic engineering data tags integrate seamlessly into the scene: Bar Mark B12, Dia 16mm, Length 4.85m, Qty 24, Weight 182.4 kg.",
    annotations: [
      { label: "BAR MARK", value: "B12" },
      { label: "DIAMETER", value: "16 MM" },
      { label: "LENGTH", value: "4.85 M" },
      { label: "QUANTITY", value: "24 PCS" },
      { label: "THEORETICAL WEIGHT", value: "182.40 KG" }
    ],
    threeMode: "quantities"
  },
  {
    id: 6,
    num: "06",
    tag: "06 / QUALITY CHECK",
    headline: "CHECKED. COORDINATED. BUILD-READY.",
    desc: "Reinforcement model undergoes multi-tier clash checks. Extraneous elements resolve. Couplers, clear covers, and pour joints align strictly to ACI, BS, and Eurocode tolerances.",
    annotations: [
      { label: "CLASH STATUS", value: "0 Detected (LOD 400)" },
      { label: "CODE AUDIT", value: "ACI 318 / BS 8666 PASS" },
      { label: "CLEAR COVER", value: "Verified 40mm ± 0" }
    ],
    threeMode: "verification"
  },
  {
    id: 7,
    num: "07",
    tag: "07 / COMPLETE STRUCTURE",
    headline: "THE COMPLETE STRUCTURAL REINFORCEMENT SYSTEM.",
    desc: "The camera pulls backward into a magnificent architectural perspective, revealing the full integrated cage: deep mat foundation, tied columns, cross-beams, suspended slabs, stairs, and structural connections.",
    annotations: [
      { label: "TOTAL TONNAGE", value: "248.60 MT" },
      { label: "TOTAL ELEMENTS", value: "1,420 Tagged Bars" },
      { label: "BBS STATUS", value: "Fully Verified" }
    ],
    threeMode: "fullRebar"
  },
  {
    id: 8,
    num: "08",
    tag: "08 / FINAL TRANSFORMATION",
    headline: "DETAILED FOR THE WAY YOU BUILD.",
    desc: "The exposed reinforcement harmonizes into a subtle architectural form. A layered visualization uniting steel reinforcement, structural concrete framework, and architectural elegance.",
    annotations: [
      { label: "SYSTEM", value: "Rebar + Frame + Form" },
      { label: "POUR STATUS", value: "Ready for Concrete" },
      { label: "EXPORT", value: ".DWG / .IFC / .BVBS" }
    ],
    threeMode: "hybridArchitecture"
  }
];
