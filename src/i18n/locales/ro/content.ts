import type { CvContent } from "../../../types/content.ts";

// Written to read naturally in Romanian, not translated word for word. Common IT
// terms (code review, feature flags, stakeholderi…) stay in English, as Romanian
// developers use them.
export const content: CvContent = {
  profile: {
    role: "Senior Frontend Developer",
    location: "Târgu Mureș, România",
    summary:
      "Dezvoltator frontend cu peste {{years}} de experiență în construirea de platforme web reglementate, cu trafic ridicat, pentru clienți din Marea Britanie și SUA. În prezent lucrez ca colaborator independent. Folosesc zilnic React și TypeScript, documentez deciziile de arhitectură prin ADR-uri, iar ca People Lead am îndrumat și sprijinit creșterea echipelor de frontend.",
    languages: ["Română (limbă maternă)", "Engleză"],
    hiring: {
      employee: {
        label: "Angajare",
        detail: "CIM (Contract Individual de Muncă)",
      },
      contractor: { label: "Colaborare", detail: "B2B / freelance" },
    },
  },
  jobs: {
    "gaming-factory": {
      title: "Senior Frontend Developer",
      headline:
        "Aplicație web de pariuri sportive și cazinou pentru jucători, cu pariere în timp real",
      points: [
        "Construiesc și dezvolt partea dedicată jucătorilor a aplicației web de pariuri sportive și cazinou, în React și TypeScript, ducând funcționalitățile de la preluarea designului până în producție.",
        "Lucrez la componentele în timp real ale produsului, precum cotele live, piețele in-play și actualizarea biletului de pariere, astfel încât interfața să rămână fluidă chiar dacă prețurile se schimbă de la o secundă la alta.",
        "Implementez funcționalitățile de joc responsabil și de conformitate, precum limitele de depunere, notificările de tip reality check și fluxurile de verificare a contului, ca produsul să respecte cerințele autorității de reglementare.",
        "Optimizez timpii de încărcare și indicatorii Core Web Vitals pe paginile cele mai accesate, prin code splitting, memoizare și o preluare mai eficientă a datelor, ca jucătorii să parieze mai repede de pe orice dispozitiv.",
        "Transform designul în componente reutilizabile și accesibile, folosite în tot produsul, și lucrez îndeaproape cu designerii la detaliile de interacțiune, la cazurile limită și la comportamentul pe mobil.",
        "Colaborez cu product ownerii și cu echipa de backend pentru a clarifica cerințele, a stabili contractele API, a estima efortul și a planifica lansările.",
        "Ridic standardul de calitate prin code review riguros, teste unitare cu Jest și teste end-to-end cu Cypress înainte de fiecare lansare.",
        "Urmăresc cum se comportă fiecare lansare în producție și rezolv rapid problemele semnalate de jucători, de echipa de suport sau de instrumentele de monitorizare.",
      ],
    },
    healthcare: {
      title: "Senior Frontend Developer",
      headline:
        "Portal pentru asigurați, conform HIPAA, pentru un client important din sistemul de sănătate din SUA",
      points: [
        "Am îndrumat subechipa din care făceam parte, sub coordonarea tech lead-ului, am implementat funcționalitățile de bază și le-am conectat la endpoint-urile din backend.",
        "Am scris ADR-uri esențiale: unul pentru o arhitectură bazată pe portaluri, cu Jotai families și randare pe bază de key, care păstrează starea iframe-urilor, și altul pentru un layout cu mai multe headere sticky.",
        "Am impus o arhitectură modulară de tip feature-sliced, verificată cu eslint-plugin-boundaries, și am contribuit la un toolkit comun, cu helperi și tipuri de date folosite atât în aplicația web, cât și în cea nativă.",
        "M-am familiarizat rapid cu WCAG, ca portalul, fiind unul public, să respecte pe deplin standardele de accesibilitate.",
        "Am construit o componentă reutilizabilă de feature flags, integrată cu Sentry, am lucrat cu autentificarea prin Okta și am scris teste cu Vitest și React Testing Library.",
      ],
    },
    "people-lead": {
      title: "People Lead",
      headline:
        "Creșterea profesională și starea de bine a echipei de frontend",
      points: [
        "Am sprijinit creșterea profesională a colegilor din frontend și i-am ajutat să își alinieze obiectivele cu cele ale companiei.",
        "Am susținut evaluări de performanță, am rezolvat problemele semnalate de colegi și am comunicat transparent deciziile companiei, ca să construim o relație de încredere.",
      ],
    },
    "consumer-platform": {
      title: "Frontend Developer",
      headline:
        "Platformă web B2C cu trafic ridicat, pe o piață reglementată din Marea Britanie",
      points: [
        "Am întreținut și extins aplicația principală pentru clienți: am rescris componentele de tip clasă ca componente funcționale cu hooks și am integrat streaming live, widgeturi cu date în timp real, bannere dinamice și reCAPTCHA.",
        "Am construit un instrument intern în care dezvoltatorii urmăreau stadiul funcționalităților și deeplink-urile lor, porneau teste E2E cu Cypress și activau sau dezactivau funcționalități prin Jenkins.",
        "Am contribuit la aplicația de back office, folosită pentru gestionarea conținutului, crearea de competiții personalizate pentru anumiți clienți și administrarea plăților și tranzacțiilor.",
        "Am dezvoltat o aplicație single-page pentru campaniile de marketing.",
        "Am îndrumat și sprijinit alți dezvoltatori prin code ownership, am stabilit prioritățile împreună cu stakeholderii și am susținut interviuri tehnice pentru poziții de React developer.",
      ],
    },
    qa: {
      title: "QA manual și automatizat · part-time",
      headline: "Aplicații mobile și servicii backend",
      points: [
        "Am testat manual aplicațiile Android și iOS, urmărind ușurința în utilizare, funcționalitatea și stabilitatea.",
        "Am scris teste automatizate în Java pentru serviciile backend și API-uri.",
      ],
    },
    "android-intern": {
      title: "Android Developer · stagiar",
      headline: "Primii pași în dezvoltarea Android",
      points: [
        "Stagiul mi-a oferit bazele de care am avut nevoie pentru aplicația din lucrarea de licență.",
      ],
    },
    "qa-intern": {
      title: "QA manual · stagiar",
      headline: "Procese de testare și raportare a defectelor",
      points: [
        "Primul contact practic cu procesele de QA, pe proiecte software reale.",
      ],
    },
  },
  projects: {
    tivren: {
      name: "Tivren Timesheet",
      tagline: "Pontaje pentru freelanceri, fără bătăi de cap.",
      description:
        "O aplicație offline de pontaj pentru freelanceri: înregistrezi zilele lucrate la fiecare client, îți notezi zilele libere și exporți pontajul lunar în Excel sau PDF. Sărbătorile legale sunt luate în calcul automat, iar datele rămân pe dispozitiv: fără cont, fără server. Am construit-o cu Expo / React Native pentru mobil și cu Electron pentru Mac și Windows, iar site-ul de prezentare, făcut în React + Vite, distribuie versiuni semnate, care se actualizează automat.",
      links: {
        website: "Vezi site-ul",
        source: "Codul site-ului",
      },
      images: [
        "Pontajul zilnic din Tivren Timesheet",
        "Luna dintr-o privire",
        "Export în Excel sau PDF",
        "Modul întunecat",
      ],
    },
    casita: {
      name: "Tivren Budget",
      tagline: "Bugetul casei, în sfârșit liniștit.",
      description:
        "O aplicație de buget pentru casă, pe iPhone și Android, care va fi lansată în curând: îți planifici luna în câteva minute, dai fiecărei categorii un plafon, economisești pentru obiective în seifuri separate și îți compari cheltuielile zilnice cu un ritm sigur. Poți începe ca invitat, cu totul salvat pe telefon, sau te poți conecta ca datele să fie sincronizate, iar aplicația se poate bloca cu Face ID sau amprenta. Am construit-o cu Expo / React Native, Expo Router, SQLite, TanStack Query și Jotai, iar site-ul de prezentare, făcut în React + Vite + Tailwind, este în română și engleză.",
      links: {
        website: "Vezi site-ul",
        source: "Codul site-ului",
      },
      images: [
        "Planificarea lunii în Tivren Budget",
        "Cât mai ai de cheltuit",
        "Seifuri de economii",
        "Modul întunecat",
      ],
    },
    "healthcare-portal": {
      name: "Portal pentru asigurați (SUA)",
      tagline: "Conform HIPAA și cu accesibilitate WCAG.",
      description:
        "Arhitectură bazată pe portaluri care păstrează starea iframe-urilor, layouturi cu mai multe headere sticky, un toolkit comun pentru web și mobil și feature flags integrate cu Sentry.",
      links: {},
      images: [],
    },
    "dev-tool": {
      name: "Dashboard pentru lansări și funcționalități",
      tagline: "Instrument intern pentru dezvoltatori.",
      description:
        "Un singur loc din care dezvoltatorii și stakeholderii urmăresc progresul fiecărei funcționalități, ajung la deeplink-urile și task-urile asociate, pornesc teste end-to-end și activează sau dezactivează funcționalități prin joburi Jenkins.",
      links: {},
      images: [],
    },
    backoffice: {
      name: "Back office operațional",
      tagline:
        "Platformă de administrare pentru un produs B2C cu trafic ridicat.",
      description:
        "Folosit zilnic de operatori pentru a configura și edita conținutul, a crea competiții personalizate pentru anumiți clienți și a urmări plățile și tranzacțiile.",
      links: {},
      images: [],
    },
    accu: {
      name: "ACCU: Accountability of Utilities",
      tagline: "Lucrare de licență, aplicație Android.",
      description:
        "Aplicație pentru urmărirea și gestionarea consumului lunar de utilități, realizată pentru lucrarea mea de licență la Universitatea Babeș-Bolyai.",
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
    degree: "Licență în Informatică",
    school:
      "Facultatea de Matematică și Informatică, Universitatea Babeș-Bolyai",
    note: "Java, Android, Python, Angular, C/C++ și Assembly. Lucrare de licență: ACCU, o aplicație Android pentru urmărirea consumului de utilități.",
  },
  // Course titles are the official (English) names in every language.
  certifications: {
    "react-native": "React Native – The Practical Guide",
    vue: "Vue – The Complete Guide (incl. Router & Composition API)",
  },
};
