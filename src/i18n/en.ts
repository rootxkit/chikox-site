import type { Dict } from './types';

export const en: Dict = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  otherLanguageName: 'ქართული',
  ui: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    primaryNav: 'Main navigation',
    systemsNav: 'Systems',
    languageSwitch: 'Language',
    footerTagline:
      'A platform for national-scale U-space. It observes and informs; it never commands an aircraft.',
    footerSystems: 'Systems',
    footerSite: 'Site',
    footerContact: 'Contact',
    readMore: 'Read more',
    systemsHeading: 'The four systems',
    whatItDoes: 'What it does',
    whatItDoesNot: 'What it deliberately does not do',
    interfacesAndStandards: 'Interfaces and standards',
    worksWith: 'Works with',
    backToPlatform: 'Platform overview',
    ogImageAlt: 'chikox — U-space airspace platform',
  },
  nav: {
    home: 'Home',
    platform: 'Platform',
    authority: 'Authority',
    ansp: 'ANSP',
    cisp: 'CISP',
    ussp: 'USSP',
    sensors: 'Sensors',
    security: 'Security & standards',
    openSource: 'Open source',
    contact: 'Contact',
  },
  meta: {
    home: {
      title: 'chikox — U-space airspace platform',
      description:
        'chikox is a platform for national-scale U-space: four cooperating systems and receive-only sensors that register drones, publish airspace information, support flight planning and watch the sky. It never commands an aircraft.',
    },
    platform: {
      title: 'Platform',
      description:
        'How the four chikox systems, the sensors and the shared judgement library fit together, and what the platform deliberately does not do.',
    },
    authority: {
      title: 'Authority',
      description:
        'The oversight system: registry of operators, drones and remote pilots, geographical zones, violations and incidents, occurrence reports and the audit log.',
    },
    ansp: {
      title: 'ANSP',
      description:
        'The U-space interface of an air navigation service provider: dynamic restrictions, the manned traffic picture and coordination with USSPs.',
    },
    cisp: {
      title: 'CISP',
      description:
        'The Common Information Service: validates, versions, signs and serves zones, U-space airspace and restrictions to every subscriber.',
    },
    ussp: {
      title: 'USSP',
      description:
        'A reference U-space Service Provider: operator portal, network identification, flight authorisation, conformance monitoring and traffic information.',
    },
    sensors: {
      title: 'Sensors',
      description:
        'Remote ID and ADS-B receivers: what they hear, how a receiver connects and why every sensor is receive-only.',
    },
    security: {
      title: 'Security & standards',
      description:
        'The security principles of the platform and the regulations and standards it is built against.',
    },
    openSource: {
      title: 'Open source',
      description:
        'The public components of chikox: the shared Go judgement library and the shared UI kit.',
    },
    contact: {
      title: 'Contact',
      description: 'How to reach chikox.',
    },
  },
  home: {
    eyebrow: 'U-space airspace platform',
    title: 'One picture of the low-altitude airspace, from independent sources.',
    lead:
      'chikox is a platform for national-scale U-space. Four cooperating systems and a network of receive-only sensors keep the registry, publish airspace information, support flight planning and watch the sky. It observes and informs; it never commands an aircraft.',
    primaryCta: 'See the platform',
    secondaryCta: 'Sensors',
    systemsTitle: 'Four systems, one ecosystem',
    systemsLead:
      'Each system has a single role from the EU U-space model and talks to the others through standard or published interfaces.',
    flowTitle: 'How it works',
    flowLead:
      'Every position comes from a source with a known level of trust, is checked against the registry and judged once, in one shared library. The result goes to people, never to an aircraft.',
    flow: {
      label: 'How it works: receive, identify, judge, inform',
      steps: [
        { title: 'Receive', lines: ['Remote ID, ADS-B,', 'network identification,', 'operator telemetry'] },
        { title: 'Identify', lines: ['each track checked', 'against the registry'] },
        { title: 'Judge', lines: ['zones, height limit,', 'conformance, proximity'] },
        { title: 'Inform', lines: ['alerts to people,', 'publications, records'] },
      ],
      links: [[], [], []],
    },
    principlesTitle: 'Design principles',
    principles: [
      {
        title: 'Observer only',
        body: 'No part of the platform has a path to an aircraft. It does not upload missions, change flight modes or geofence a vehicle. Alerts and advice go to people.',
      },
      {
        title: 'Receive-only sensors',
        body: 'Receivers listen and report. The radio broadcast cannot be authenticated, so the receiver is: every report it sends is signed.',
      },
      {
        title: 'One judgement, one place',
        body: 'Zone, height, identification and proximity judgements live once, in a shared library pinned by test vectors, so every system decides the same way.',
      },
      {
        title: 'Standard interfaces',
        body: 'Systems exchange information through ASTM, EUROCAE and published OpenAPI contracts, so a third-party USSP can join on equal terms.',
      },
    ],
    sensorsTitle: 'Sensors on the ground',
    sensorsBody:
      'Remote ID receivers hear the identification that drones broadcast over Bluetooth and Wi-Fi. ADS-B receivers hear manned aircraft on 1090 MHz. Both only listen, and both report over authenticated, encrypted links.',
    sensorsCta: 'How the sensors work',
  },
  platform: {
    title: 'Platform',
    lead:
      'chikox follows the role split of the EU U-space regulation: an authority that oversees, an air navigation service provider that reconfigures airspace, a single common information service that publishes, and service providers that serve operators. Each role is its own system, with its own database and its own failure domain.',
    architectureTitle: 'Architecture',
    architecture: {
      label:
        'Architecture: Remote ID receivers report to Authority; an ADS-B receiver feeds ANSP; Authority and ANSP publish through CISP; CISP serves signed publications to USSP; ANSP sends manned traffic to Authority and USSP; USSP provides network identification and records to Authority; operators exchange flight plans, telemetry, authorisations and alerts with USSP.',
      boxes: {
        authority: { title: 'Authority', lines: ['registry, zones,', 'violations, audit'] },
        cisp: { title: 'CISP', lines: ['signed common', 'information'] },
        ussp: { title: 'USSP', lines: ['operators, flights,', 'traffic, alerts'] },
        ansp: { title: 'ANSP', lines: ['restrictions,', 'manned traffic'] },
        ridRx: { title: 'Remote ID receivers', lines: ['Bluetooth, Wi-Fi'] },
        adsbRx: { title: 'ADS-B receiver', lines: ['1090 MHz'] },
        operators: { title: 'Operators', lines: ['and remote pilots'] },
      },
      radio: {
        drones: 'drones broadcasting Remote ID',
        manned: 'manned aircraft',
      },
      edges: {
        observations: 'signed reports',
        tunnel: 'encrypted tunnel',
        zones: 'zones, airspace',
        restrictions: 'restrictions',
        publications: 'signed publications',
        netId: 'network identification, records',
        manned: 'manned traffic',
        operatorsUp: 'plans, telemetry',
        operatorsDown: 'authorisations, alerts',
      },
      footnote: 'No arrow points at an aircraft: nothing flows towards one.',
      flowsTitle: 'The flows in the diagram',
      flows: [
        'Remote ID receivers send signed observation reports to Authority.',
        'An ADS-B receiver feeds ANSP over an encrypted tunnel.',
        'Authority publishes geographical zones, U-space airspace and the USSP list through CISP.',
        'ANSP publishes dynamic restrictions through CISP.',
        'CISP serves signed publications to every USSP and subscriber.',
        'ANSP streams the manned traffic picture to USSPs and to Authority.',
        'USSPs provide network identification and flight records to Authority.',
        'Operators send flight plans and telemetry to their USSP and receive authorisations and alerts.',
      ],
    },
    doesTitle: 'What the platform does',
    does: [
      'Keeps the registry of UAS operators, drones and remote pilots, and answers registration checks.',
      'Defines geographical zones and U-space airspace and publishes them in the EUROCAE ED-318 format.',
      'Activates time-bounded restrictions inside U-space airspace and delivers them to every service provider.',
      'Builds an airspace picture from direct Remote ID, network identification and manned traffic, with the source and trust of each track shown.',
      'Detects violations from its own evidence: height limit, zone incursion, unregistered aircraft, identification mismatch, flight without authorisation.',
      'Authorises flights with strategic deconfliction and monitors their conformance.',
      'Records incidents with sealed evidence, keeps occurrence reports apart from enforcement, and logs every oversight act.',
    ],
    doesNotTitle: 'What it deliberately does not do',
    doesNotLead:
      'These are design boundaries, not missing features. Each one is enforced by the structure of the systems, not only by policy.',
    doesNot: [
      'It never commands, configures or geofences an aircraft. No service has a send path towards a vehicle.',
      'Sensors never transmit. Remote ID and ADS-B receivers only listen.',
      'The oversight system does not alert pilots in real time or authorise flights; those are service-provider roles.',
      'The ANSP interface is not an air traffic management system: no clearances, no separation, no alerts to operators.',
      'The common information service does not author airspace information, hold operator or flight data, or judge a flight.',
      'Occurrence reports are never turned into violations or used against the people who report them.',
    ],
    sharedTitle: 'Shared foundations',
    shared: [
      {
        title: 'One judgement library',
        body: 'Every safety judgement — decoding Remote ID, geodesy and terrain, zone applicability, identification, proximity and alerting — lives once in a shared Go library. Each system pins a released version, and the behaviour is fixed by language-neutral test vectors.',
      },
      {
        title: 'One interface kit',
        body: 'Consoles and portals are built on one UI kit with map layers for zones, tracks, alerts and receivers, accessible tables and forms, and two languages, ka and en, throughout. They render; they decide nothing.',
      },
      {
        title: 'Separate failure domains',
        body: 'Each system runs its own processes and databases. A slow service on one side does not stall ingest on another, and a missing source is shown as silent rather than as empty sky.',
      },
      {
        title: 'Tested against simulation',
        body: 'A separate lab runs every system from its images against simulated aircraft, operators, receivers, manned traffic and a second service provider, and runs the conformance and load tests.',
      },
    ],
  },
  systems: {
    authority: {
      name: 'Authority',
      role: 'Oversight system',
      card: 'Registry, geographical zones, the authority’s own airspace picture, violations, incidents and the audit log.',
      lead:
        'The system for the competent-authority role in U-space. It keeps the registry, defines zones and U-space airspace, certifies providers, and builds its own picture of the airspace from receivers it operates. It observes and records.',
      does: [
        'Registry of UAS operators, drones and remote pilots, with registration numbers and status; personal data is encrypted at the application layer, and validity checks answer with status only.',
        'Geographical zones and U-space airspace designations, authored and versioned in ED-318 (ED-269 import supported) and published through the CISP.',
        'Certificates of USSPs and of the CISP, and the public register of certified providers.',
        'Its own airspace picture: direct Remote ID from its receivers, an ASTM F3411 Display Provider view of every USSP’s network identification, and manned traffic.',
        'Violations from its own evidence: above the height limit, zone incursion, unregistered aircraft, identification mismatch, and flight without authorisation.',
        'Incidents with evidence packs sealed by a SHA-256 hash, and recorded traffic history queried by time.',
        'Occurrence reports under Regulation (EU) 376/2014, kept separate from enforcement.',
        'An append-only audit log of every oversight view, export and change.',
        'The ecosystem token issuer: OAuth2 with signed, short-lived tokens and a published key set.',
      ],
      doesNot: [
        'Command, configure or geofence an aircraft.',
        'Alert remote pilots in real time, separate traffic or give resolution advice.',
        'Authorise individual flights; that is the USSP’s service.',
        'Turn an occurrence report into a violation or use it against the reporter.',
      ],
      interfaces: [
        'Published national API (OpenAPI 3.1)',
        'ASTM F3411 Display Provider',
        'EUROCAE ED-318 and ED-269 geographical zones',
        'Signed Remote ID observation reports from receivers',
        'Regulation (EU) 2019/947 registration, 2021/664 oversight, 376/2014 occurrence reporting',
      ],
      worksWith: [
        { system: 'cisp', text: 'publishes zones, U-space airspace and the USSP list' },
        { system: 'ussp', text: 'receives network identification, records and registration checks' },
        { system: 'ansp', text: 'receives the manned traffic picture' },
      ],
    },
    ansp: {
      name: 'ANSP',
      role: 'Air navigation service provider interface',
      card: 'Dynamic restrictions inside U-space airspace, the manned traffic picture, and coordination with service providers.',
      lead:
        'The U-space interface of an air navigation service provider. It reconfigures U-space airspace for a limited time, brings manned traffic into U-space, and receives coordination notices from service providers. It is an interface, not an air traffic management system.',
      does: [
        'Dynamic airspace reconfiguration: plan, activate, extend, end and cancel time-bounded restrictions inside designated U-space airspace.',
        'Delivers each restriction to the CISP and, as ASTM F3548 constraints, to the discovery service, through one idempotent outbox with a delivery record per attempt.',
        'A direct, degraded delivery path that is used only while the CISP cannot be reached.',
        'The manned traffic feed: surveillance sources such as an ADS-B receiver are normalised and streamed to USSPs and to the authority.',
        'A coordination inbox for flight intents and non-conformance notices from USSPs, acknowledged by the watch supervisor.',
      ],
      doesNot: [
        'Issue clearances or separate traffic.',
        'Send alerts to drone operators; that is the USSP’s service.',
        'Serve the public map or the common information feed; that is the CISP’s role.',
        'Reach an aircraft in any way.',
      ],
      interfaces: [
        'Regulation (EU) 2021/664 and 2021/665 (ATS.OR.127, ATS.TR.237)',
        'ASTM F3548 constraints',
        'EUROCAE ED-318 restriction features',
        'Published national API (OpenAPI)',
        'Mutual TLS for streams and publishing',
      ],
      worksWith: [
        { system: 'cisp', text: 'publishes dynamic restrictions' },
        { system: 'ussp', text: 'streams manned traffic; receives intents and non-conformance notices' },
        { system: 'authority', text: 'streams manned traffic' },
      ],
    },
    cisp: {
      name: 'CISP',
      role: 'Common Information Service Provider',
      card: 'The single source of common information: validates, versions, signs and serves zones, airspace and restrictions.',
      lead:
        'The common information service of the U-space model. It validates, versions, signs, stores and serves the information the authority and the ANSP publish, and notifies every subscriber when it changes. It publishes; it never authors.',
      does: [
        'Carries ED-318 geographical zones, U-space airspace volumes with their requirements and adjacency, dynamic restrictions, the list of USSPs and their terms, and the publication history of all of them.',
        'Validates every publication before accepting it and keeps every version.',
        'Signs what it serves; signing keys rotate with an overlap period in the published key set, and publishers’ own signatures travel with the data so provenance survives.',
        'Serves a pull API with version deltas, a change stream, signed webhooks, a public read subset and a public zone map, in two languages (ka and en).',
        'Records an audit trail of publications and administrative actions.',
      ],
      doesNot: [
        'Author or edit airspace information.',
        'Hold operator or flight data.',
        'Judge a flight.',
        'Command an aircraft.',
      ],
      interfaces: [
        'Regulation (EU) 2021/664 Art. 5 (common information services)',
        'EUROCAE ED-318',
        'Published API (OpenAPI 3.1) with ETag and version deltas',
        'Signed webhooks (JWS) with a published key set',
        'Mutual TLS for publishers',
      ],
      worksWith: [
        { system: 'authority', text: 'publisher of zones, U-space airspace and the USSP list' },
        { system: 'ansp', text: 'publisher of dynamic restrictions' },
        { system: 'ussp', text: 'subscriber, like any third-party USSP' },
      ],
    },
    ussp: {
      name: 'USSP',
      role: 'U-space Service Provider',
      card: 'Operator portal, network identification, flight authorisation, conformance monitoring and traffic information.',
      lead:
        'A reference U-space service provider. It serves drone operators and the ecosystem through standard interfaces, and it is one of possibly many: a third party can build its own USSP against the same published contracts. It informs; it does not resolve.',
      does: [
        'Operator portal and accounts, with machine clients for operators’ own software.',
        'Network identification as an ASTM F3411 Network Remote ID service provider.',
        'Flight authorisation with strategic deconfliction, through ASTM F3548 operational intents.',
        'Conformance monitoring: alerts to the operator and to nearby operators, notices to peer providers and to the ANSP.',
        'Traffic information: manned and unmanned traffic with trust class and age, and proximity alerts.',
        'Geo-awareness from the CISP’s ED-318 publication, cached and versioned.',
        'Flight records and occurrence reports to the authority; weather from a configured source, where required.',
      ],
      doesNot: [
        'Command an aircraft.',
        'Resolve conflicts on the operator’s behalf; it informs and alerts.',
        'Assume it is the only USSP: every interface is a standard or a published contract.',
      ],
      interfaces: [
        'Regulation (EU) 2021/664 Art. 7–13 and 15',
        'ASTM F3411 Network Remote ID',
        'ASTM F3548 strategic coordination and conformance',
        'EUROCAE ED-318 geo-awareness',
        'Published operator API (OpenAPI)',
      ],
      worksWith: [
        { system: 'cisp', text: 'subscribes to zones, airspace and restrictions' },
        { system: 'ansp', text: 'receives manned traffic; sends intents and non-conformance notices' },
        { system: 'authority', text: 'provides network identification and records; checks registrations' },
      ],
    },
  },
  sensors: {
    title: 'Sensors',
    lead:
      'The platform does not depend on what operators choose to share. It listens: Remote ID receivers hear drones, ADS-B receivers hear manned aircraft, and each report reaches the platform over an authenticated link.',
    receiveOnlyTitle: 'Receive-only, by construction',
    receiveOnly:
      'A sensor has no transmit path to an aircraft. It listens, timestamps what it heard and reports it. A broadcast cannot be authenticated, but the receiver can be, and is.',
    receivesTitle: 'What it receives',
    rid: {
      title: 'Remote ID receivers',
      body: 'Small ESP32-class receivers hear the direct Remote ID that drones broadcast over Bluetooth and Wi-Fi under ASTM F3411 and ASD-STAN prEN 4709-002. A receiver decodes nothing itself: it forwards each frame exactly as received, and decoding is done once, centrally.',
      receives: [
        'Identification: serial number, operator registration and the broadcast type',
        'Position, altitude, speed and heading of the drone',
        'Take-off or operator position, where it is broadcast',
        'Signal strength and the receiver’s own reception time',
      ],
      path: {
        label: 'Remote ID path: drone broadcast, receiver, signed report to Authority',
        steps: [
          { title: 'Drone', lines: ['Bluetooth or Wi-Fi', 'broadcast'] },
          { title: 'Receiver', lines: ['listens, timestamps,', 'signs each batch'] },
          { title: 'Authority', lines: ['verifies, decodes,', 'identifies'] },
        ],
        links: [['radio, one way'], ['signed HTTPS']],
      },
      connectTitle: 'How a receiver connects',
      connect: [
        'It is registered with its mounted position and receives its own credentials once; they cannot be read back, only rotated.',
        'Every report carries the receiver’s key and a signature over the exact bytes sent.',
        'Reports far from the platform’s clock, or repeating an earlier request, are refused.',
        'While the platform is unreachable the receiver buffers and later replays what it heard, with the original reception times.',
        'Credentials rotate with a grace period, or are revoked at once if a receiver is lost; a receiver that reports from away from its mounted position is recorded.',
      ],
    },
    adsb: {
      title: 'ADS-B receivers',
      body: 'An ADS-B receiver hears manned aircraft on 1090 MHz: a software-defined radio (RTL-SDR) with a decoder such as readsb on a small computer. Its output feeds the ANSP, which normalises it into the manned traffic picture for USSPs and the authority.',
      receives: [
        'Aircraft address and call sign',
        'Position, barometric and geometric altitude',
        'Ground speed, track and vertical rate',
      ],
      path: {
        label: 'ADS-B path: manned aircraft, receiver, encrypted tunnel to ANSP',
        steps: [
          { title: 'Aircraft', lines: ['1090 MHz', 'broadcast'] },
          { title: 'Receiver', lines: ['RTL-SDR and', 'decoder'] },
          { title: 'ANSP', lines: ['normalises the', 'manned picture'] },
        ],
        links: [['radio, one way'], ['encrypted tunnel']],
      },
      connectTitle: 'How a receiver connects',
      connect: [
        'The receiver reaches the platform only through an encrypted point-to-point tunnel; nothing else of it is exposed.',
        'Its clock must be synchronised: positions timed ahead of the platform’s clock are refused.',
        'One adapter per feed: each surveillance source has its own process and its own switch.',
      ],
    },
    relay: {
      title: 'Operator telemetry (optional)',
      body: 'Cooperative operators can also share their own telemetry. It is the richest feed — position plus battery, flight mode and GPS quality — but it depends on the operator, so it complements Remote ID and never replaces it.',
      items: [
        'Through a USSP: operator software streams telemetry to its USSP over an authenticated connection.',
        'Through a ground relay: a receive-only relay forwards the MAVLink stream of the ground control station over TLS. Its socket only receives; it never sends anything towards the vehicle.',
      ],
    },
    silentTitle: 'A silent source is shown as silent',
    silent:
      'Every source reports its own status. A receiver that stops reporting is shown as stale or silent, with the time it went quiet — never as an empty sky.',
  },
  security: {
    title: 'Security & standards',
    lead:
      'The platform handles personal data, holds an audit record and publishes information other systems rely on. These are the principles it is built on.',
    principles: [
      {
        title: 'Systems authenticate each other',
        items: [
          'Mutual TLS between systems.',
          'Short-lived, scoped and audience-bound OAuth2 tokens from one ecosystem issuer, with a published key set.',
          'Webhooks signed by the sender and verified by the receiver.',
        ],
      },
      {
        title: 'Information keeps its provenance',
        items: [
          'Publications are signed by their publisher and by the CISP, so a subscriber can check where data came from.',
          'Signing keys rotate with an overlap period, so verification never breaks during a rotation.',
        ],
      },
      {
        title: 'Sensors are authenticated',
        items: [
          'Each receiver has its own credentials and signs every report.',
          'Clock-skew and replay checks on every request; credentials can be rotated or revoked at once.',
          'Receivers are receive-only.',
        ],
      },
      {
        title: 'A verifiable supply chain',
        items: [
          'Container images are built in CI only, signed, and carry a software bill of materials (SBOM); signatures are verified before deployment.',
          'Dependencies are pinned and verified by checksum.',
          'Secret scanning in CI; no secret, key or real hostname is ever committed.',
        ],
      },
      {
        title: 'Personal data is protected',
        items: [
          'Personal data is encrypted at the application layer.',
          'Registration checks answer with status only.',
          'The public network identification view leaves out the remote pilot’s position.',
          'The identity of an occurrence reporter is visible only to the role that handles occurrence reports.',
        ],
      },
      {
        title: 'Accounts and records',
        items: [
          'Multi-factor authentication for console accounts; passwords stored as slow hashes.',
          'Roles with the least privilege each task needs; sensitive queries carry a stated purpose and are audited.',
          'An append-only audit log, and evidence packs sealed by hash.',
        ],
      },
    ],
    standardsTitle: 'Regulations and standards',
    standardsLead: 'The systems are designed against the following texts.',
    standardsHead: { name: 'Text', scope: 'What it covers here' },
    standards: [
      { name: 'Regulation (EU) 2021/664', scope: 'The U-space regulatory framework: roles, services, common information' },
      { name: 'Regulations (EU) 2021/665 and 2021/666', scope: 'ATS provider obligations in U-space; manned aircraft in U-space airspace' },
      { name: 'Regulation (EU) 2019/947 and 2019/945', scope: 'UAS operations, registration and Remote ID' },
      { name: 'Regulation (EU) 376/2014', scope: 'Occurrence reporting' },
      { name: 'EUROCAE ED-318', scope: 'Geographical zones and U-space airspace data' },
      { name: 'EUROCAE ED-269', scope: 'Geographical zone data (import)' },
      { name: 'ASTM F3411', scope: 'Broadcast and network Remote ID' },
      { name: 'ASTM F3548', scope: 'Strategic coordination, constraints and conformance' },
      { name: 'ASD-STAN prEN 4709-002', scope: 'Direct Remote ID broadcast' },
    ],
    standardsNote:
      'Designed against these texts; no certification is claimed on this site.',
  },
  openSource: {
    title: 'Open source',
    lead:
      'The two components every system shares are developed in public and released under the Apache License 2.0.',
    repos: [
      {
        name: 'uspace-core',
        kind: 'Go library',
        body: 'The shared judgement library. A library, not a service: no process, no port, no database. Each system compiles it in and pins a released version, so every safety judgement lives in one place.',
        items: [
          'Open Drone ID decoding',
          'Geodesy, terrain and geoid',
          'ED-269 and ED-318 zone data',
          'ASTM F3411 and F3548 types',
          'Identification, zone judgement, proximity and alerting',
          'Receiver report and token verification',
        ],
      },
      {
        name: 'uspace-ui',
        kind: 'UI kit',
        body: 'The shared interface kit the consoles and portals are built on. It renders what each system’s API says and judges nothing.',
        items: [
          'Map components and layers with legends: zones, tracks, alerts, manned traffic, receivers',
          'Two languages, ka and en, with bundled Noto Sans fonts',
          'Live-feed client with source and degraded-state components',
          'Accessible table and form kits',
        ],
      },
    ],
    reportTitle: 'Reporting a vulnerability',
    report:
      'Please report security issues privately by email to info@chikox.net, not in public.',
    otherTitle: 'The systems themselves',
    other:
      'The four systems are built on these components. Their source is not published on this site.',
  },
  contact: {
    title: 'Contact',
    lead: 'For questions about the platform, the standards it follows or the open-source components, write to us.',
    emailLabel: 'Email',
    topicsTitle: 'Good topics to write about',
    topics: [
      'How the systems fit the U-space role model',
      'Interfaces for a third-party USSP',
      'Remote ID and ADS-B receivers',
      'The open-source components',
    ],
    privacyTitle: 'Privacy',
    privacy:
      'This site sets no cookies and uses no analytics or trackers. It has no forms: an email you send is the only information we receive.',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you were looking for does not exist or has moved.',
    home: 'Go to the home page',
  },
};
