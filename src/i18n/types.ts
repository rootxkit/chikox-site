// Shape of the display text. Every string shown on the site lives in a
// dictionary of this type, one per locale (ka.ts, en.ts); templates never
// hold display text of their own.

export type Locale = 'ka' | 'en';

export type RouteKey =
  | 'home'
  | 'platform'
  | 'authority'
  | 'ansp'
  | 'cisp'
  | 'ussp'
  | 'sensors'
  | 'security'
  | 'openSource'
  | 'contact';

export type SystemKey = 'authority' | 'ansp' | 'cisp' | 'ussp';

export interface PageMeta {
  title: string;
  description: string;
}

/** A box in a pipeline diagram: a bold title and up to three short lines. */
export interface DiagramStep {
  title: string;
  lines: string[];
}

export interface Pipeline {
  /** Accessible name of the diagram. */
  label: string;
  steps: DiagramStep[];
  /** One label per gap between steps (length = steps.length - 1); lines. */
  links: string[][];
}

export interface Section {
  title: string;
  body?: string;
  items?: string[];
}

export interface SystemContent {
  /** Short name used in navigation and cards, e.g. "Authority". */
  name: string;
  /** Expanded role name, e.g. "Common Information Service Provider". */
  role: string;
  /** One or two sentences for the card on the home and platform pages. */
  card: string;
  lead: string;
  does: string[];
  doesNot: string[];
  interfaces: string[];
  /** Which other systems it exchanges information with, and what. */
  worksWith: { system: SystemKey; text: string }[];
}

export interface ArchitectureLabels {
  label: string;
  boxes: Record<SystemKey | 'ridRx' | 'adsbRx' | 'operators', DiagramStep>;
  radio: { drones: string; manned: string };
  edges: {
    observations: string;
    tunnel: string;
    zones: string;
    restrictions: string;
    publications: string;
    netId: string;
    manned: string;
    operatorsUp: string;
    operatorsDown: string;
  };
  footnote: string;
  /** The same flows as a text list, for small screens and screen readers. */
  flowsTitle: string;
  flows: string[];
}

export interface Dict {
  locale: Locale;
  /** BCP 47 tag for <html lang>. */
  htmlLang: string;
  /** Open Graph locale, e.g. ka_GE / en_US. */
  ogLocale: string;
  /** Name of the other language, written in that language. */
  otherLanguageName: string;
  ui: {
    skipToContent: string;
    menu: string;
    primaryNav: string;
    systemsNav: string;
    languageSwitch: string;
    footerTagline: string;
    footerSystems: string;
    footerSite: string;
    footerContact: string;
    readMore: string;
    systemsHeading: string;
    whatItDoes: string;
    whatItDoesNot: string;
    interfacesAndStandards: string;
    worksWith: string;
    backToPlatform: string;
    ogImageAlt: string;
  };
  nav: Record<RouteKey, string>;
  meta: Record<RouteKey, PageMeta>;
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    systemsTitle: string;
    systemsLead: string;
    flowTitle: string;
    flowLead: string;
    flow: Pipeline;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    sensorsTitle: string;
    sensorsBody: string;
    sensorsCta: string;
  };
  platform: {
    title: string;
    lead: string;
    architectureTitle: string;
    architecture: ArchitectureLabels;
    doesTitle: string;
    does: string[];
    doesNotTitle: string;
    doesNotLead: string;
    doesNot: string[];
    sharedTitle: string;
    shared: Section[];
  };
  systems: Record<SystemKey, SystemContent>;
  sensors: {
    title: string;
    lead: string;
    receiveOnlyTitle: string;
    receiveOnly: string;
    rid: {
      title: string;
      body: string;
      receives: string[];
      path: Pipeline;
      connectTitle: string;
      connect: string[];
    };
    adsb: {
      title: string;
      body: string;
      receives: string[];
      path: Pipeline;
      connectTitle: string;
      connect: string[];
    };
    relay: {
      title: string;
      body: string;
      items: string[];
    };
    receivesTitle: string;
    silentTitle: string;
    silent: string;
  };
  security: {
    title: string;
    lead: string;
    principles: Section[];
    standardsTitle: string;
    standardsLead: string;
    standardsHead: { name: string; scope: string };
    standards: { name: string; scope: string }[];
    standardsNote: string;
  };
  openSource: {
    title: string;
    lead: string;
    repos: { name: string; url: string; kind: string; body: string; items: string[] }[];
    viewRepo: string;
    reportTitle: string;
    report: string;
    otherTitle: string;
    other: string;
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    topicsTitle: string;
    topics: string[];
    privacyTitle: string;
    privacy: string;
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
}
