import type { Dict } from "./en";

/* Italian copy (default locale). Same shape as en.ts, enforced by the Dict type. */

export const it: Dict = {
  meta: {
    title: "TooSocial — Contenuti che portano clienti",
    description:
      "Video brevi, gestione social e campagne ADV a risultato. Ogni progetto parte da un incontro dal vivo.",
  },
  header: {
    homeAria: "TooSocial, torna all'inizio",
    book: "Prenota una call",
    bookShort: "Prenota",
    switchLabel: "EN",
    switchAria: "Switch to English",
  },
  hero: {
    eyebrow: "Contenuti · ADV · Consulenza",
    line1: "Non ti servono più views.",
    line2: { pre: "Ti servono ", kw: "clienti", post: "." },
    lead: "In questo video ti mostriamo come trasformiamo video brevi, social e campagne ADV in richieste reali. Ogni progetto parte da un incontro dal vivo, non da un brief anonimo.",
    watch: "Guarda prima di prenotare",
    watchAria: (d: string) => `Guarda il video, durata ${d}`,
    videoPlaceholder: "Qui andrà il video di presentazione (VSL).",
    book: "Prenota una call",
    reply: "Rispondiamo entro 24 ore lavorative.",
  },
  proof: {
    eyebrow: "Risultati, non reach",
    title: { pre: "Numeri che si possono ", kw: "contare", post: "." },
    stats: [
      { label: "richieste in più in 90 giorni", source: "Studio dentistico, Milano" },
      { label: "ritorno sulla spesa pubblicitaria", source: "Gruppo di ristoranti, Q3 2026" },
      { label: "lead qualificati quest'anno", source: "Su 18 clienti attivi" },
    ],
    trustedBy: "Scelti da aziende che preferiscono un incontro a una email",
  },
  problem: {
    eyebrow: "Ti suona familiare?",
    title: { pre: "Pubblichi ogni giorno. Il telefono non ", kw: "squilla", post: "." },
    lead: "Non è un problema di impegno. È che nessuno ha costruito i tuoi contenuti per portarti clienti.",
    pains: [
      {
        title: "Le views salgono. Le richieste no.",
        body: "I tuoi reel arrivano a migliaia di persone che non avrebbero mai comprato.",
      },
      {
        title: "Le agenzie mandano report, non risultati.",
        body: "Pagine di like e impression, e nessuna idea di quanto ti abbiano fatto guadagnare.",
      },
      {
        title: "Non hai tempo per fare il creator.",
        body: "Girare, montare, pubblicare, rispondere, mentre mandi avanti un'azienda.",
      },
      {
        title: "Le ADV sembrano soldi buttati.",
        body: "Hai sponsorizzato qualche post. Non è tornato niente.",
      },
    ],
    phone: {
      title: "Notifiche",
      notifs: [
        { text: "Il tuo reel ha raggiunto", strong: "48.210 account", after: "", time: "2 min" },
        { text: "", strong: "1.203 persone", after: "hanno messo mi piace", time: "9 min" },
        { text: "", strong: "@giulia.m", after: "ha commentato “che bello! 🔥”", time: "14 min" },
        { text: "", strong: "86 nuovi follower", after: "questa settimana", time: "1 h" },
        { text: "Il tuo post è stato condiviso", strong: "214 volte", after: "", time: "3 h" },
      ],
      enquiries: "Nuove richieste di clienti",
      thisMonth: "questo mese",
    },
  },
  method: {
    eyebrow: "Come lavoriamo",
    title: { pre: "Prima ci ", kw: "conosciamo", post: ", poi creiamo." },
    lead: "Niente brief anonimi, niente ticket. Quattro passi, un solo team e un numero concordato prima di iniziare.",
    steps: [
      {
        tag: "Incontro",
        title: "Partiamo dal vivo.",
        body: "Un incontro vero, da te o da noi. Capiamo come vendi, chi compra e quanto vale per te un nuovo cliente.",
      },
      {
        tag: "Contenuti",
        title: "Video brevi con facce vere.",
        body: "Pianifichiamo, giriamo e montiamo contenuti attorno alle tue persone e alla tua offerta. Tu ci dai un paio d'ore al mese, al resto pensiamo noi.",
      },
      {
        tag: "Lancio",
        title: "ADV che trovano clienti, non fan.",
        body: "Campagne su Meta e TikTok che portano le persone giuste su una pagina costruita per trasformarle in richieste.",
      },
      {
        tag: "Misura",
        title: "Clienti, non like.",
        body: "Ogni mese rivediamo richieste, costo per lead e fatturato. Se un numero non si muove, cambiamo il piano.",
      },
    ],
    yourBusiness: "La tua azienda",
    together: "crescere insieme",
    book: "Prenota una call",
    footnote: "Il primo passo è un caffè, non un contratto.",
  },
  cases: {
    eyebrow: "Casi studio",
    title: { pre: "Persone vere, risultati ", kw: "misurabili", post: "." },
    side: "Ogni numero qui sotto ha un nome, un periodo e un'azienda dietro.",
    items: [
      {
        industry: "Studio dentistico",
        period: "90 giorni",
        unit: "richieste / mese",
        quote: "Abbiamo smesso di inseguire i like. Ora l'agenda si riempie da sola.",
        person: "Laura R., titolare",
      },
      {
        industry: "Showroom di arredamento",
        period: "60 giorni",
        unit: "costo per lead",
        quote: "Sono venuti in showroom, hanno ripreso il nostro team e il telefono ha iniziato a squillare.",
        person: "Marco F., direttore commerciale",
      },
      {
        industry: "Ristorante",
        period: "4 mesi",
        unit: "prenotazioni da Instagram / mese",
        quote: "Persone vere, piatti veri, tavoli prenotati. Basta pubblicare nel vuoto.",
        person: "Chiara L., co-fondatrice",
      },
    ],
    watchAria: (client: string, len: string) => `Guarda il caso studio ${client}, ${len}`,
  },
  services: {
    eyebrow: "Cosa ottieni",
    title: { pre: "Un solo team. Ogni pezzo che ", kw: "vende", post: "." },
    lead: "Contenuti, social, ADV e landing page, pianificati insieme perché spingano tutti lo stesso numero: nuovi clienti.",
    items: [
      {
        tag: "Contenuti",
        title: "Video brevi che vendono",
        body: "Reel e TikTok costruiti attorno alle tue persone, alla tua offerta e alle domande che i clienti fanno davvero.",
        points: ["Strategia e script", "Riprese sul posto", "Montaggio e sottotitoli"],
      },
      {
        tag: "Social",
        title: "Profili sempre vivi",
        body: "Un calendario costante, risposte gestite e un feed che fa venire voglia di chiamarti.",
        points: ["Calendario editoriale", "Pubblicazione", "Risposte alla community"],
      },
      {
        tag: "ADV",
        title: "Campagne pagate in clienti",
        body: "Campagne Meta e TikTok ottimizzate per richieste e prenotazioni, mai per la reach fine a sé stessa.",
        points: ["Target e test creativi", "Setup del tracciamento", "Ottimizzazione settimanale"],
      },
      {
        tag: "Lanci",
        title: "Landing page e lanci di offerte",
        body: "Quando hai qualcosa da vendere, costruiamo la pagina, il video e la campagna che la riempie.",
        points: ["Landing page", "Offerta e copy", "Campagna di lancio"],
      },
    ],
    chartBadge: "Richieste ↑",
    alwaysIncluded: "Sempre incluso",
    included: [
      "Primo incontro dal vivo",
      "Team dedicato",
      "Revisione mensile dei risultati",
      "Nessun vincolo lungo",
      "Linea WhatsApp con il team",
    ],
  },
  fit: {
    eyebrow: "Fa per te?",
    title: { pre: "Non lavoriamo con ", kw: "tutti", post: "." },
    lead: "Seguiamo pochi clienti alla volta, così ognuno ha un team vero. Ecco come capire se siamo fatti l'uno per l'altro.",
    forTitle: "Fa per te se…",
    of: "di",
    forItems: [
      "Hai un'azienda con un prodotto o un servizio che le persone pagano.",
      "Tu (o il tuo team) siete disposti a metterci la faccia.",
      "Potresti gestire più richieste già dal mese prossimo.",
      "Ti interessano clienti e fatturato, non solo post carini.",
      "Preferisci incontrarci dal vivo che scambiare venti email.",
    ],
    notTitle: { pre: "", kw: "Non", post: " fa per te se…" },
    notItems: [
      "Cerchi il servizio di pubblicazione più economico.",
      "Vuoi diventare virale, non trovare clienti.",
      "Non puoi dedicarci un'ora o due al mese.",
      "Ti aspetti risultati in una settimana senza budget ADV.",
      "Vuoi che qualcuno ti compri follower.",
    ],
    notNote:
      "Meglio onesti che pieni di clienti sbagliati. Se non siamo il partner giusto, te lo diciamo in call e ti indichiamo qualcuno di più adatto.",
    verdicts: [
      "Spunta quello che ti somiglia.",
      "Qualche spunta. Vediamo se siamo compatibili.",
      "Sembra che siamo fatti per lavorare insieme.",
      "Sei esattamente il cliente con cui lavoriamo meglio.",
    ],
    book: "Prenota una call",
    bookFit: "Prenota la tua call",
  },
  founders: {
    eyebrow: "Le persone dietro TooSocial",
    title: { pre: "Incontrerai ", kw: "noi", post: ", non un account manager." },
    p1: "Abbiamo fondato TooSocial perché eravamo stanchi delle agenzie che vendono visibilità e poi spariscono dietro una dashboard. Preferiamo sederci al tuo tavolo, capire come la tua azienda guadagna davvero e costruire i contenuti attorno a questo.",
    p2: "Le persone che incontri sono le stesse che girano, montano e gestiscono le tue campagne. Nessun passaggio di consegne, nessun junior mai visto.",
    facts: ["team, dall'inizio alla fine", "progetti avviati di persona", "account manager in mezzo"],
    roles: ["Strategia e ADV", "Contenuti e riprese"],
    cta: "Prendiamoci un caffè",
  },
  faq: {
    eyebrow: "Domande",
    title: { pre: "Risposte ", kw: "chiare", post: ", senza giri di parole." },
    lead: "Le cose che ci chiedono prima di prenotare. Risposte dirette, senza gergo da agenzia.",
    items: [
      {
        q: "Quanto costa?",
        a: "Ogni piano è costruito attorno al tuo obiettivo, quindi facciamo il preventivo dopo il primo incontro, non prima. La maggior parte dei clienti paga un canone mensile per il nostro team più un budget ADV separato, che va direttamente a Meta o TikTok. In call avrai un numero chiaro, senza sorprese dopo.",
      },
      {
        q: "Devo per forza andare in video?",
        a: "Funziona meglio se ci sei tu, perché le persone comprano dalle persone. Ma può essere chiunque del tuo team. Scriviamo noi gli script, ti guidiamo sul set e teniamo ogni sessione breve. Quasi tutti si sentono a proprio agio già dalla seconda ripresa.",
      },
      {
        q: "Quanto del mio tempo serve?",
        a: "Un incontro iniziale, poi una sessione di riprese di un paio d'ore al mese e una breve revisione mensile. Tutto il resto, dal montaggio alla pubblicazione alle ADV, è compito nostro.",
      },
      {
        q: "In quanto tempo vedo i risultati?",
        a: "Contenuti e ADV iniziano a lavorare già nelle prime settimane, ma valutiamo il successo su 90 giorni. Prima di iniziare concordiamo l'unico numero che conta per te, di solito richieste o prenotazioni.",
      },
      {
        q: "Funziona per il mio settore?",
        a: "Lavoriamo al meglio con aziende che vendono un prodotto o un servizio reale e possono gestire più clienti: studi medici, ristoranti, showroom, studi professionali, negozi e brand locali. Se pensiamo di non poterti aiutare, te lo diciamo in call.",
      },
      {
        q: "C'è un contratto lungo?",
        a: "No. Partiamo con un periodo di tre mesi, perché è il tempo che serve per leggere risultati veri. Dopo si va di mese in mese.",
      },
      {
        q: "Garantite i risultati?",
        a: "Nessuno che sia onesto può garantire lo stesso numero a ogni azienda. Garantiamo il lavoro e la trasparenza: vedi ogni dato, ogni mese. Se un obiettivo non si muove, cambiamo il piano senza costi aggiuntivi.",
      },
      {
        q: "Cosa succede durante la call?",
        a: "Trenta minuti. Guardiamo la tua azienda, i tuoi contenuti attuali e quanto vale per te un nuovo cliente. Esci con idee utili, che tu decida di lavorare con noi oppure no.",
      },
    ],
    stillTitle: "Hai ancora dubbi?",
    stillBody: "Scrivici direttamente. Risponde una persona vera, di solito entro un'ora.",
    book: "Prenota una call",
    whatsapp: "Scrivici su WhatsApp",
  },
  booking: {
    eyebrow: "Prenota una call",
    title: { pre: "Il tuo prossimo cliente è a una ", kw: "call", post: " di distanza." },
    promises: [
      "30 minuti, in video o di persona",
      "Gratuita e senza impegno",
      "Esci con idee utili in ogni caso",
    ],
    quote: "Ogni progetto parte da una conversazione. Questa è la nostra.",
    form: {
      name: "Nome",
      email: "Email",
      phone: "Telefono",
      optional: "Facoltativo",
      site: "Sito o Instagram",
      sitePlaceholder: "@latuaazienda",
      goalLegend: "Di cosa hai più bisogno?",
      goals: {
        enquiries: "Più richieste",
        launch: "Lanciare un'offerta",
        social: "Social che funzionano",
        unsure: "Non lo so ancora",
      },
      consentPre: "Acconsento a essere ricontattato per la mia richiesta, come descritto nella",
      privacy: "privacy policy",
      submit: "Richiedi la mia call",
      sending: "Invio in corso…",
      reply: "Rispondiamo entro 24 ore lavorative. Niente spam, mai.",
      serverError: "Qualcosa è andato storto. Riprova o scrivici su WhatsApp.",
      errors: {
        name: "Dicci come ti chiami.",
        email: "Questa email non sembra corretta.",
        phone: "Questo numero non sembra corretto.",
        goal: "Scegli l'opzione più adatta.",
        consent: "Ci serve il tuo consenso per ricontattarti.",
      },
    },
    success: {
      thanks: (name: string) => `Grazie, ${name}.`,
      kw: "A presto",
      body: "La tua richiesta è arrivata. Uno di noi ti risponderà entro 24 ore lavorative per fissare un orario comodo.",
    },
  },
  footer: {
    tagline:
      "Contenuti brevi, social e ADV a risultato, fatti da persone vere. Social nella vita reale, prima che sul telefono.",
    talk: "Parliamo",
    book: "Prenota una call",
    follow: "Seguici",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    vat: "P.IVA",
  },
};
