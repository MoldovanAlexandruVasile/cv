import type { CvContent } from "../../../types/content.ts";

export const content: CvContent = {
  profile: {
    role: "Senior Frontend Developer",
    location: "Târgu Mureș, România",
    summary:
      "Inginer frontend cu peste 7 ani de experiență în platforme web reglementate, cu trafic ridicat, pentru clienți din Marea Britanie și SUA, acum colaborator independent. Scriu React și TypeScript, modelez arhitectura prin ADR-uri și am condus și dezvoltat echipe frontend ca People Lead.",
    languages: ["Română (nativ)", "Engleză"],
    hiring: {
      employee: { label: "Angajat", detail: "CIM (Contract Individual de Muncă)" },
      contractor: { label: "Colaborator", detail: "B2B / freelance" },
    },
  },
  jobs: {
    "gaming-factory": {
      title: "Senior Frontend Developer",
      headline: "Dezvoltare frontend pentru un produs online de pariuri sportive și cazino",
      points: [
        "Dezvolt funcționalități pentru jucători și integrez servicii terțe precum video live, statistici în timp real și conținut promoțional.",
        "Lucrez la instrumentele operatorilor din spatele produsului: gestionarea evenimentelor, a jocurilor și a competițiilor personalizate, plus plăți și pariuri.",
        "Creez instrumente interne care oferă dezvoltatorilor și stakeholderilor vizibilitate asupra lansării funcționalităților și a testelor automate.",
        "Livrez pagini de prezentare dedicate campaniilor de marketing.",
        "Mențin codul sănătos prin code review, teste unitare și end-to-end și optimizări de performanță, și stabilesc prioritățile direct cu stakeholderii.",
      ],
    },
    healthcare: {
      title: "Senior Web Developer",
      headline: "Portal pentru membri, conform HIPAA, pentru un client important din sistemul de sănătate american",
      points: [
        "Am coordonat sub-echipa noastră sub îndrumarea tech lead-ului, am construit funcționalități de bază și le-am conectat la endpoint-urile din backend.",
        "Am redactat ADR-uri cheie: o arhitectură bazată pe portaluri, cu Jotai families și randare pe bază de chei, care păstrează starea iframe-urilor, și o strategie de layout pentru mai multe headere sticky.",
        "Am impus un sistem de module feature-sliced cu eslint-plugin-boundaries și am contribuit la un toolkit comun care aliniază aplicațiile web și native.",
        "M-am familiarizat rapid cu WCAG pentru a asigura accesibilitatea completă a unui portal public.",
        "Am construit o componentă reutilizabilă de feature flags pe Sentry; autentificare cu Okta; teste cu Vitest și React Testing Library.",
      ],
    },
    "people-lead": {
      title: "People Lead",
      headline: "Dezvoltarea și starea de bine a dezvoltatorilor frontend",
      points: [
        "Am sprijinit dezvoltarea profesională a dezvoltatorilor frontend și alinierea lor cu obiectivele companiei.",
        "Am condus evaluări de performanță, am gestionat nemulțumiri și am comunicat transparent deciziile companiei pentru a construi încredere.",
      ],
    },
    "consumer-platform": {
      title: "Web Developer",
      headline: "Platformă web de consum cu trafic ridicat, pe o piață reglementată din Marea Britanie",
      points: [
        "Am întreținut și extins aplicația principală pentru clienți: am migrat componentele de tip clasă la hooks și am integrat streaming live, widgeturi cu date în timp real, bannere dinamice și reCAPTCHA.",
        "Am construit un instrument intern pentru urmărirea stadiului funcționalităților și a deeplink-urilor, rularea testelor E2E Cypress și activarea funcționalităților prin Jenkins.",
        "Am contribuit la back office: gestionarea conținutului, competiții personalizate pentru anumiți clienți, plăți și tranzacții.",
        "Am construit o aplicație single-page pentru campanii de marketing.",
        "Am îndrumat și sprijinit dezvoltatori prin code ownership, am stabilit prioritățile împreună cu stakeholderii și am susținut interviuri tehnice pentru roluri React.",
      ],
    },
    qa: {
      title: "QA manual și automat · part-time",
      headline: "Aplicații mobile și servicii backend",
      points: [
        "Testare manuală a aplicațiilor Android și iOS pentru utilizabilitate și stabilitate.",
        "Testare automată a serviciilor backend și a API-urilor în Java.",
      ],
    },
    "android-intern": {
      title: "Android Developer · stagiar",
      headline: "Bazele dezvoltării Android",
      points: ["Stagiu care a pus bazele aplicației din lucrarea mea de licență."],
    },
    "qa-intern": {
      title: "QA manual · stagiar",
      headline: "Procese de testare și raportarea defectelor",
      points: ["Prima experiență practică cu procese de QA pe proiecte software reale."],
    },
  },
  projects: {
    shiftify: {
      name: "Shiftify",
      tagline: "Pontaje pentru freelanceri, fără foi de calcul.",
      description:
        "O aplicație offline de pontaj pentru freelanceri: înregistrezi zilele lucrate pentru fiecare client, îți iei zile libere și exporți pontajul lunar în Excel sau PDF. Sărbătorile legale se aplică automat, iar totul rămâne pe dispozitiv: fără cont, fără backend. Construită cu Expo / React Native pentru mobil și Electron pentru Mac și Windows, cu un site de prezentare în React + Vite care distribuie versiuni semnate, cu actualizare automată.",
      links: {
        website: "Vezi site-ul",
        source: "Codul site-ului",
      },
      images: ["Pontajul zilnic în Shiftify", "Luna dintr-o privire", "Export în Excel sau PDF", "Mod întunecat"],
    },
    "healthcare-portal": {
      name: "Portal pentru membri – sănătate SUA",
      tagline: "Portal pentru membri, conform HIPAA și WCAG.",
      description:
        "Arhitectură bazată pe portaluri care păstrează starea iframe-urilor, layouturi cu mai multe headere sticky, un toolkit comun web/nativ și feature flags pe Sentry.",
      links: {},
      images: [],
    },
    "dev-tool": {
      name: "Dashboard de lansări și funcționalități",
      tagline: "Instrument intern pentru dezvoltatori.",
      description:
        "Un singur loc în care dezvoltatorii și stakeholderii urmăresc progresul fiecărei funcționalități, accesează deeplink-urile și task-urile asociate, pornesc teste end-to-end și activează sau dezactivează funcționalități prin joburi Jenkins.",
      links: {},
      images: [],
    },
    backoffice: {
      name: "Back office operațional",
      tagline: "Platformă de administrare pentru un produs de consum cu trafic ridicat.",
      description:
        "Folosit zilnic de operatori pentru a configura și edita conținut, a crea competiții personalizate pentru anumiți clienți și a supraveghea plăți și tranzacții.",
      links: {},
      images: [],
    },
    accu: {
      name: "ACCU: Accountability of Utilities",
      tagline: "Lucrare de licență, aplicație Android.",
      description:
        "Urmărește și gestionează consumul lunar de utilități. Construită pentru lucrarea mea de licență la Universitatea Babeș-Bolyai.",
      links: {
        source: "Codul pe GitHub",
      },
      images: [],
    },
  },
  skillGroups: {
    frontend: "Frontend",
    styling: "Stilizare și UI",
    data: "Date și API-uri",
    state: "Gestionarea stării",
    testing: "Testare",
    leadership: "Leadership",
  },
  education: {
    degree: "Diplomă de licență în programare",
    school: "Facultatea de Matematică și Informatică, Universitatea Babeș-Bolyai",
    note: "Java, Android, Python, Angular, C/C++ și Assembly. Lucrare de licență: ACCU, o aplicație Android pentru urmărirea consumului de utilități.",
  },
  certifications: {
    "react-native": "React Native – The Practical Guide",
    vue: "Vue – The Complete Guide (incl. Router & Composition API)",
  },
};
