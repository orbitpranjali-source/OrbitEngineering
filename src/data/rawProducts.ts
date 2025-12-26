// Product images
import bulkFlowMeter from '../assets/products/bulk-flow-meter.jpg';
import electromagneticFlowMeter from '../assets/products/electromagnetic-flow-meter.jpg';
import ultrasonicLevelTx from '../assets/products/ultrasonic-level-tx.jpg';
import waterMeter from '../assets/products/water-meter.jpg';
import chlorineTransmitter from '../assets/products/chlorine-transmitter.jpg';
import doTransmitter from '../assets/products/do-transmitter.png';
import phTransmitter from '../assets/products/ph-transmitter.jpg';
import turbidityTransmitter from '../assets/products/turbidity-transmitter.jpg';
import differentialPressureTransmitter from '../assets/products/differential-pressure-transmitter.jpg';
import smartTypePressureTransmitter from '../assets/products/smart-type-pressure-transmitter.jpg';
import hydrostaticLevelTx from '../assets/products/hydrostatic-level-tx.jpg';
import capacitanceLevelTransmitter from '../assets/products/capacitance-level-transmitter.jpg';
import conductiveLevelSwitch from '../assets/products/conductive-level-switch.jpg';
import floatLevelSwitch from '../assets/products/float-level-switch.jpg';
import blindTypePressureTransmitters from '../assets/products/blind-type-pressure-transmitters.jpg';
import butterflyValves from '../assets/products/butter-fly-valves.jpg';
import gateValve from '../assets/products/gate-valve.jpg';
import motorizedBallValve from '../assets/products/motorized-ball-valve.jpg';
import sluceValves from '../assets/products/sluce-valves.jpg';
import rtu from '../assets/products/rtu.jpg';
import scada from '../assets/products/scada.jpg';
import iot from '../assets/products/iot.png';
import servers from '../assets/products/servers.jpg';
import softwares from '../assets/products/softwares.jpg';
import bulletCamera from '../assets/products/bullet-camera.jpg';
import domeCamera from '../assets/products/dome-camera.jpg';
import highSpeedCamera from '../assets/products/high-speed-camera.jpg';
import ptzCamera from '../assets/products/ptz-camera.jpg';
import bigJointingMachines from '../assets/products/big-jointing-machines.jpg';
import buttFusionJointing from '../assets/products/butt-fusion-jointing.jpg';
import electrofusionJointingMachine from '../assets/products/electrofusion-jointing-machine.jpg';
import hdpeFittings from '../assets/products/hdpe-fittings.jpg';

export const RAW_SUB_PRODUCTS = [
  {
    category: 'Flow Meters',
    items: [
      {
        name: 'Bulk Flow Meter',
        image: bulkFlowMeter,
        paragraphs: [
          'The bulk flow meter flow meter is precision made positive displacement liquid measuring instruments which maintain accurate metering over long periods of operation.The simplicity of design and construction together with the sustained accuracy of an Avery Hardoll bulk meter has led to the widespread use of these meters on aviation refueling vehicles in oil terminals throughout the world and also as master meters for use in calibration. The bulk flow meter (PD meter) is a system with freely-moving blades used to measure white petroleum products such as fuels bio-fuels and refined liquid hydrocarbons.'
        ],
        bullets: [
          'Serviceability: Designed for quick and easy maintenance.',
          'Automatic additive injector available.',
          'Electronic control available.'
        ]
      },
      {
        name: 'Electromagnetic Flow Meter',
        image: electromagneticFlowMeter,
        paragraphs: [
          'Electromagnetic flow meters (or magmeters) are a type of velocity or volumetric flow meter that operate pursuant to Faradays law of electromagnetic induction – which states that a voltage will be induced when a conductor moves through a magnetic field. Magmeters can detect the flow rate of conductive fluids only.'
        ]
      },
      {
        name: 'Ultrasonic Flow Meter',
        image: ultrasonicLevelTx,
        paragraphs: [
          'An ultrasonic flow meter is a type of flow meter that measures the velocity of a fluid with ultrasound to calculate volume flow. Using ultrasonic transducers the flow meter can measure the average velocity along the path of an emitted beam of ultrasound by averaging the difference in measured transit time between the pulses of ultrasound propagating into and against the direction of the flow or by measuring the frequency shift from the Doppler effect. Ultrasonic flow meters are affected by the acoustic properties of the fluid and can be impacted by temperature density viscosity and suspended particulates depending on the exact flow meter. They vary greatly in purchase price but are often inexpensive to use and maintain because they do not use moving parts unlike mechanical flow meters.'
        ]
      },
      {
        name: 'Water Meter',
        image: waterMeter,
        paragraphs: [
          'Water metering is the practice of measuring water use. Water meters measure the volume of water used by residential and commercial building units that are supplied with water by a public water supply system. They are also used to determine flow through a particular portion of the system.',
          'In most of the world water meters are calibrated in cubic metres (m3) or litres[1] but in the United States and some other countries water meters are calibrated in cubic feet (ft.3) or US gallons on a mechanical or electronic register. Modern meters typically can display rate-of-flow in addition to total volume.',
          'Several types of water meters are in common use and may be characterized by the flow measurement method the type of end-user the required flow rates and accuracy requirements.'
        ]
      }
    ]
  },
  {
    category: 'Analyzers & Transmitters',
    items: [
      {
        name: 'Total Chlorine Transmitter/Controller',
        image: chlorineTransmitter,
        bullets: [
          'Up to four analysis inputs in any combination for direct connection of sensors for liquid analysis',
          'Up to 21 further measuring signals can be connected either directly or via interface',
          'Interfaces: USB host USB device Modbus PROFIBUS DP Ethernet',
          'Ethernet function: web server alarm alerts by email setup per PC readout of recorded measurement data',
          'Vibrant TFT color graphics screen with 5.5″ diagonal screen sizes 320 × 240 pixels and 256 colors',
          'Intuitive operation via touchscreen',
          'Wall-mounted housing (protection type IP67) with spacious connection area'
        ]
      },
      {
        name: 'Measurement of dissolved oxygen (DO) in aqueous solutions',
        image: doTransmitter,
        bullets: [
          'Safe 1-point calibration',
          '2-wire transmitter (for basic and standard version)',
          'Electrical isolation of measurement signal (DO) and output signal (mA)',
          'Easy connection to an existing system (e.g PLC)',
          'Can be used as stand-alone system in maximum version',
          'Compensation of temperature atmospheric pressure and salinity',
          'Further processing of the temperature of the medium is possible (separate Pt 1000 or 2-wire transmitter)'
        ]
      },
      {
        name: 'pH Transmitter',
        image: phTransmitter,
        bullets: [
          'Up to four analysis inputs in any combination for direct connection of sensors for liquid analysis',
          'Up to 21 further measuring signals can be connected either directly or via interface',
          'Interfaces: USB host USB device Modbus PROFIBUS DP Ethernet',
          'Ethernet function: web server alarm alerts by email setup per PC readout of recorded measurement data',
          'Vibrant TFT color graphics screen with 5.5″ diagonal screen sizes 320 × 240 pixels and 256 colors',
          'Intuitive operation via touchscreen',
          'Wall-mounted housing (protection type IP67) with spacious connection area',
          'lain language operation multilingual',
          'Graphic display with background lighting',
          'Can be combined with tecLine Ci tecLine Ci-S ecoLine Ci conductivity and temperature sensors'
        ]
      },
      {
        name: 'Turbidity Transmitter',
        image: turbidityTransmitter,
        paragraphs: ['Water clarity and suspended solids measurement'],
        bullets: [
          'Real-time monitoring',
          'Low maintenance',
          'High sensitivity'
        ]
      },
      {
        name: 'Capacitance Level Transmitter',
        image: capacitanceLevelTransmitter,
        bullets: [
          '2-wire compact transmitter',
          'High sensitivity',
          'Rod (0.2 – 3 m) or cable (1 – 20 m) probes',
          'Plastic aluminium or stainless steel housing',
          'Fully or partly insulated probes',
          'Plug-in display module',
          '32-point linearisation',
          'Explosion-proof models',
          'Chemicals with dense gas layers above the surface',
          'High pressure high temperature or vacuum',
          'Viscous or corrosive media'
        ]
      },
      {
        name: 'Conductive Level Switch',
        image: conductiveLevelSwitch,
        bullets: [
          'Limit switch or differential switch versions',
          'Adjustable sensitivity',
          'Adjustable time delay',
          'High or low fail-safe mode',
          'All wetted parts stainless steel',
          'Compact unit with two independent relays',
          'Separate probe and relay unit',
          'Rod probes up to 3 m'
        ]
      },
      {
        name: 'Float Level Switch',
        image: floatLevelSwitch,
        bullets: [
          'Operation without power supply',
          'Low cost polypropylene level switch',
          'Hermetically moulded double chamber',
          'Mercury free micro switch',
          'Adjustable switch differential',
          'For low density liquids'
        ]
      },
      {
        name: 'Hydrostatic Level Transmitter',
        image: hydrostaticLevelTx,
        bullets: [
          '2- or 3-wire submersible transmitter',
          'Plastic or stainless steel body',
          'Capacitive ceramic piezoresistive stainless steel and piezoresistive ceramic sensor',
          'Up to 200 m range',
          'Reverse polarity protection',
          'Optional lightning protection',
          'Linearity: ±0.25 %',
          'HART communication',
          'Venting tube in cable',
          'Incorporated Pt100 temperature sensor',
          'Explosion-proof models'
        ]
      },
      {
        name: 'Ultrasonic Level Transmitter',
        image: ultrasonicLevelTx,
        bullets: [
          '2- or 4-wire integrated transmitter',
          'Non-contact level metering',
          'Narrow 5° beam angle',
          'Excellent signal processing',
          'Temperature compensated',
          'Secondary lightning protection',
          '32-point linearization',
          'PP PVDF PTFE housing and transducers',
          'Plug-in display module',
          'Plastic aluminum or stainless steel housing',
          'Explosion-proof models',
          'Level and volume measurement and display',
          'Open channel flow measurement',
          'Fail-safe indication',
          'For challenging applications such as long distance measurement and light dust during filling'
        ]
      },

    ]
  },
  {
    category: 'Valves & Piping',
    items: [
      {
        name: 'Butterfly valves',
        image: butterflyValves,
        paragraphs: [
          'Butterfly valves are used where space is limited. Unlike gate valves butterfly valves can be used for throttling or regulating flow as well as in the full open and fully closed position. The pressure loss through a butterfly valve is small in comparison with the gate valve.'
        ],
        bullets: [
          'Type- Lined Size range – 50 mm to 600 mm Pressure- PN 25Seating material – EPDM/Viton/ Nitrile'
        ]
      },
      {
        name: 'GATE VALUE',
        image: gateValve,
        bullets: [
          'MOC- DI',
          'Connection – Flanged End',
          'Size- Upto 400 MM',
          'Pressure – PN 16'
        ]
      },
      {
        name: 'HDPE pipe',
        image: hdpeFittings,
        paragraphs: [
          'HDPE pipe is a type of flexible plastic pipe used for fluid and gas transfer and is often used to replace ageing concrete or steel mains pipeline.',
          'We offered range of HDPE pipes & fittings up to 2500mm outer diameter.'
        ]
      },
      {
        name: 'Motorized Ball Valve',
        image: motorizedBallValve,
        paragraphs: [
          'A motorized valve is an automated device used for controlling the flow of liquids gases and other materials in industrial commercial and manufacturing settings. This type of valve uses a motor to open and close the valve allowing for precise control over the output pressure and flow rate.'
        ]
      },
      {
        name: 'Gate valves',
        image: sluceValves,
        paragraphs: [
          'A complete range of Gate valves for all of your applications. We offer the valves in sizes up to 24″ (600 mm).'
        ]
      }
    ]
  },
  {
    category: 'Automation (IoT / PLC / RTU / SCADA)',
    items: [
      { name: 'IOT', image: iot, paragraphs: ['IOT- We offer an Integrated IOT Platform to manage Customer Device and Data. We also provided integration plugins with popular CRMs Billing and ERP solutions.'] },
      { name: 'PLC', image: 'https://syncwatertech.com/wp-content/uploads/2024/08/PLC.jpg', paragraphs: [''] },
      { name: 'RTU', image: rtu, paragraphs: ['RTU=  Event based secure protocol connects clients (producers and subscribers) to get live data (semi real-time) even on non-real-time connections. The dedicated protocol ensures optimal latency with lowest possible traffic even on mobile networks (also 2G) and Narrow Band Iot (NBIoT).'] },
      {
        name: 'SCADA', image: scada, bullets: [
          'SCADA= Process visualization with network function',
          'Real time operation',
          'Batch related and continuous logging',
          'Process group and trend pictures',
          'Alarm or event lists',
          'Management of up to 50 plants per PC',
          'Visualization of up to 100 plants per network',
          'Mobile Access',
          'App for Android and iOS systems',
          'Mobile access to devices',
          'Batch related and continuous logging',
          'Process group and trend pictures',
          'Alarm or event lists',
          'Management of up to 50 plants per PC',
          'Visualization of up to 100 plants per network'
        ]
      }
    ]
  },
  {
    category: 'Cameras & Vision',
    items: [
      {
        name: 'Bullet Camera',
        image: bulletCamera,
        paragraphs: ['Fixed direction surveillance camera designed for outdoor monitoring applications. Features weatherproof housing and infrared night vision capabilities for 24/7 security coverage.'],
        bullets: [
          'Weatherproof design',
          'Infrared night vision',
          'Fixed direction monitoring',
          '24/7 operation',
          'High resolution imaging'
        ]
      },
      {
        name: 'Dome Camera',
        image: domeCamera,
        paragraphs: ['360-degree surveillance dome camera with vandal-resistant design. Provides discreet monitoring with wide-angle coverage for comprehensive area surveillance.'],
        bullets: [
          '360-degree coverage',
          'Vandal-resistant housing',
          'Discreet appearance',
          'Wide-angle lens',
          'Professional surveillance'
        ]
      },
      {
        name: 'High Speed Camera',
        image: highSpeedCamera,
        paragraphs: ['High frame rate recording camera designed for capturing rapid motion and detailed analysis. Professional-grade equipment for specialized monitoring applications.'],
        bullets: [
          'High frame rate capture',
          'Motion analysis capability',
          'Professional grade',
          'Detailed recording',
          'Specialized applications'
        ]
      },
      {
        name: 'PTZ Camera',
        image: ptzCamera,
        paragraphs: ['Pan-Tilt-Zoom controllable camera with remote operation capabilities. Features motorized movement and zoom functions for dynamic surveillance coverage.'],
        bullets: [
          'Pan-tilt-zoom control',
          'Remote operation',
          'Motorized movement',
          'Dynamic coverage',
          'Auto-tracking features'
        ]
      },
      {
        name: 'Servers',
        image: servers,
        paragraphs: ['High-capacity video recording and storage servers designed for surveillance systems. Features redundant storage and remote access capabilities for reliable data management.'],
        bullets: [
          'High storage capacity',
          'Redundant backup systems',
          'Remote access capability',
          'Reliable data management',
          'Scalable architecture'
        ]
      },
      {
        name: 'Software',
        image: softwares,
        paragraphs: ['Comprehensive video management and analytics software for surveillance systems. Provides multi-camera support, intelligent analytics, and user-friendly interface for efficient monitoring.'],
        bullets: [
          'Multi-camera management',
          'Intelligent analytics',
          'User-friendly interface',
          'Real-time monitoring',
          'Advanced reporting'
        ]
      }
    ]
  },
  {
    category: 'Jointing Machines',
    items: [
      { name: 'Big Jointing Machines', image: bigJointingMachines, paragraphs: ['Lovable AI'] },
      {
        name: 'HDPE Butt Fusion Welding Machine – Application & Features :', image: buttFusionJointing, bullets: [
          'Suitable for butt fusion welding Of plastic pipes and fittings made Of PE PP. and PVDF in construction site or workshop.',
          'Consists of basic frame heating plate planning tool and support (for planning tool & heating plate).',
          'Removable PTFE coated heating plate with inbuilt Digital temperature control system with countdown timers for heating TI T2 & cooling phase T5.',
          'Electric facer cutter With double cutting edge blades.',
          'Low starting pressure ensures reliable welding quality Of small pipes.',
          'It is made of lightweight and high strength material; simple structure and easy to operate.',
          'Trolley style wheel & handle system for easy mobility.',
          'Use of high quality pressure casting allows low weight without compromising strength and performance while providing extra strength when welding not perfectly round pipe.',
          'Size- 50 to 250 MM'
        ]
      },
      {
        name: 'Electrofusion welding machines', image: electrofusionJointingMachine, bullets: [
          'Electrofusion welding machines are universal devices used to connect thermoplastic pipes and fittings (PE PP PVDF) resistance method using electrofusion fittings. They are widely used in the construction and repair of gas pipelines water supply sewage industrial installations etc.',
          'Automatic control',
          'Optical and acoustic signaling of the welding process.',
          'Automatic compensation of welding time depending on the ambient temperature.',
          'An electronic control system that responds to changes in power parameters in real time.',
          'Automatic setting of voltage and cycle times depending on the type of fitting.',
          'Ability to program work parameters:',
          'automatic mode using barcode scanner',
          'automatic mode by entering the digital barcode from the barcode',
          'manual (manual) mode by entering voltage and time parameters from the fitting',
          '“last time” mode – automatic programming using settings of the last weld.',
          'Real-time monitoring weld status abnormal welding process could be terminated in short time.',
          'Built in memory can record more than 3000welding records.',
          'Welding records could be download to USB flash disk via USB interface.',
          'Operation modes: (1) Manually Set (2) Read in by bar code scanner.',
          'Welding Range(mm)- 20 -800 mm'
        ]
      }
    ]
  },
  {
    category: 'Rosemount 3051S Series Coplanar Pressure Transmitter',
    items: [
      {
        name: 'Differential Pressure Transmitter',
        image: differentialPressureTransmitter,
        bullets: [
          '0 to 250 mbar – 0 to 1.6 bar relative / 0 to 600 mbar – 0 to 25 bar absolute',
          'Welded measuring system',
          'Compact design: as of 71 mm in length',
          'High bursting strength'
        ]
      },
      {
        name: 'Smart Type Pressure Transmitter',
        image: smartTypePressureTransmitter,
        bullets: [
          'HART® interface',
          'Ex d explosion protection according to ATEX GOST-R',
          'Linearity 0.07 %',
          'Turn down: 1:200',
          'Simple operation with rotary knob',
          'Characteristic line and display also adjustable for flow measurement'
        ]
      },
      {
        name: 'Pressure Transmitter (Optional Ex ia)',
        image: blindTypePressureTransmitters,
        bullets: [
          'HART® interface',
          'Optional explosion protection Ex ia according to ATEX GOST-R',
          'Linearity 0.07 %',
          'Turn down: 1:200',
          'Simple operation with rotary knob',
          'Characteristic line and display also adjustable for flow measurement'
        ]
      }
    ]
  }
];


