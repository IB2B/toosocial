/* English copy. The Italian file (it.ts) must match this shape exactly. */

export const en = {
  meta: {
    title: "TooSocial — Content that brings clients",
    description:
      "Short-form video, social media management and performance ad campaigns. Every project starts with a real meeting.",
  },
  header: {
    homeAria: "TooSocial, back to top",
    book: "Book a call",
    bookShort: "Book",
    switchLabel: "IT",
    switchAria: "Passa all'italiano",
  },
  hero: {
    eyebrow: "Content · Ads · Consulting",
    line1: "You don't need more views.",
    line2: { pre: "You need ", kw: "clients", post: "." },
    lead: "In this video we show you how we turn short-form video, social media and ad campaigns into real enquiries. Every project starts with a real meeting, not an anonymous brief.",
    watch: "Watch before you book",
    watchAria: (d: string) => `Watch the video, ${d}`,
    videoPlaceholder: "Your sales video (VSL) goes here.",
    book: "Book a call",
    reply: "We reply within 24 business hours.",
  },
  proof: {
    eyebrow: "Results, not reach",
    title: { pre: "Numbers you can ", kw: "count", post: "." },
    stats: [
      { label: "more enquiries in 90 days", source: "Dental clinic, Milan" },
      { label: "return on ad spend", source: "Restaurant group, Q3 2026" },
      { label: "qualified leads this year", source: "Across 18 active clients" },
    ],
    trustedBy: "Trusted by local businesses that would rather meet than email",
  },
  problem: {
    eyebrow: "Sound familiar?",
    title: { pre: "You post every day. The phone ", kw: "still", post: " doesn't ring." },
    lead: "That's not an effort problem. It's that nobody built your content to bring in clients.",
    pains: [
      {
        title: "Views go up. Enquiries don't.",
        body: "Your reels reach thousands of people who were never going to buy.",
      },
      {
        title: "Agencies send reports, not results.",
        body: "Pages of likes and impressions, and no idea what any of it earned you.",
      },
      {
        title: "You don't have time to be a creator.",
        body: "Filming, editing, posting, replying, on top of running a business.",
      },
      {
        title: "Ads feel like burning money.",
        body: "You boosted a few posts. Nothing came back.",
      },
    ],
    phone: {
      title: "Notifications",
      notifs: [
        { text: "Your reel reached", strong: "48,210 accounts", after: "", time: "2m" },
        { text: "", strong: "1,203 people", after: "liked your post", time: "9m" },
        { text: "", strong: "@giulia.m", after: "commented “so nice! 🔥”", time: "14m" },
        { text: "", strong: "86 new followers", after: "this week", time: "1h" },
        { text: "Your post was shared", strong: "214 times", after: "", time: "3h" },
      ],
      enquiries: "New client enquiries",
      thisMonth: "this month",
    },
  },
  method: {
    eyebrow: "How we work",
    title: { pre: "First we ", kw: "meet", post: ", then we create." },
    lead: "No anonymous briefs, no ticket systems. Four steps, one team, and a number we agree on before we start.",
    steps: [
      {
        tag: "Meet",
        title: "We start in person.",
        body: "A real meeting, at your place or ours. We learn how you sell, who buys, and what one new client is worth to you.",
      },
      {
        tag: "Create",
        title: "Short videos with real faces.",
        body: "We plan, film and edit content around your people and your offer. You give us a couple of hours a month, we do the rest.",
      },
      {
        tag: "Launch",
        title: "Ads that find buyers, not fans.",
        body: "Campaigns on Meta and TikTok that send the right people to a page built to turn them into enquiries.",
      },
      {
        tag: "Measure",
        title: "Clients, not likes.",
        body: "Every month we review enquiries, cost per lead and revenue. If a number isn't moving, we change the plan.",
      },
    ],
    yourBusiness: "Your business",
    together: "growing together",
    book: "Book a call",
    footnote: "Step one is a coffee, not a contract.",
  },
  cases: {
    eyebrow: "Case studies",
    title: { pre: "Real faces. Real ", kw: "results", post: "." },
    side: "Every number below has a name, a timeframe and a business behind it.",
    items: [
      {
        industry: "Dental clinic",
        period: "90 days",
        unit: "enquiries / month",
        quote: "We stopped chasing likes. Now the calendar fills itself.",
        person: "Laura R., owner",
      },
      {
        industry: "Furniture showroom",
        period: "60 days",
        unit: "cost per lead",
        quote: "They came to the showroom, filmed our team, and the phone started ringing.",
        person: "Marco F., sales director",
      },
      {
        industry: "Restaurant",
        period: "4 months",
        unit: "bookings from Instagram / month",
        quote: "Real people, real food, real tables booked. No more posting into the void.",
        person: "Chiara L., co-founder",
      },
    ],
    watchAria: (client: string, len: string) => `Watch the ${client} case study, ${len}`,
  },
  services: {
    eyebrow: "What you get",
    title: { pre: "One team. Every piece that ", kw: "sells", post: "." },
    lead: "Content, social, ads and launch pages, planned together so each one pushes the same number: new clients.",
    items: [
      {
        tag: "Content",
        title: "Short-form video that sells",
        body: "Reels and TikToks built around your people, your offer and the questions your buyers actually ask.",
        points: ["Strategy & scripts", "On-site filming", "Editing & subtitles"],
      },
      {
        tag: "Social",
        title: "Profiles that stay alive",
        body: "A steady calendar, replies handled, and a feed that looks like a business worth calling.",
        points: ["Content calendar", "Publishing", "Community replies"],
      },
      {
        tag: "Ads",
        title: "Campaigns paid in clients",
        body: "Meta and TikTok ads optimised for enquiries and bookings, never for vanity reach.",
        points: ["Targeting & creative tests", "Tracking set-up", "Weekly optimisation"],
      },
      {
        tag: "Launches",
        title: "Landing pages & offer launches",
        body: "When you have something to sell, we build the page, the video and the campaign that fills it.",
        points: ["Landing page", "Offer & copy", "Launch campaign"],
      },
    ],
    chartBadge: "Enquiries ↑",
    alwaysIncluded: "Always included",
    included: [
      "Kick-off meeting in person",
      "Dedicated team",
      "Monthly results review",
      "No long lock-in",
      "WhatsApp line to the team",
    ],
  },
  fit: {
    eyebrow: "Is this for you?",
    title: { pre: "We don't work with ", kw: "everyone", post: "." },
    lead: "We take on a handful of clients at a time so each one gets a real team. Here's how to tell if we're a match.",
    forTitle: "This is for you if…",
    of: "of",
    forItems: [
      "You run a business with a real product or service people pay for.",
      "You (or your team) are happy to show your face on camera.",
      "You could handle more enquiries next month.",
      "You care about clients and revenue, not just pretty posts.",
      "You'd rather meet us in person than trade twenty emails.",
    ],
    notTitle: { pre: "It's ", kw: "not", post: " for you if…" },
    notItems: [
      "You're looking for the cheapest posting service.",
      "You want to go viral, not to get clients.",
      "You can't give us an hour or two a month.",
      "You expect results in a week with no ad budget.",
      "You want someone to buy you followers.",
    ],
    notNote:
      "Honest beats busy. If we're not the right partner, we'll tell you on the call and point you somewhere better.",
    verdicts: [
      "Tick what sounds like you.",
      "A few boxes ticked. Let's see if it fits.",
      "Sounds like a good fit.",
      "You're exactly who we work best with.",
    ],
    book: "Book a call",
    bookFit: "Book your call",
  },
  founders: {
    eyebrow: "The people behind TooSocial",
    title: { pre: "You'll meet ", kw: "us", post: ", not an account manager." },
    p1: "We started TooSocial because we were tired of agencies that sell reach and disappear behind dashboards. We'd rather sit at your table, understand how your business really makes money, and then build content around that.",
    p2: "The people who meet you are the people who film, edit and run your campaigns. No hand-offs, no juniors you've never seen.",
    facts: ["team, start to finish", "projects kicked off in person", "account managers in between"],
    roles: ["Strategy & ads", "Content & filming"],
    cta: "Meet us for a coffee",
  },
  faq: {
    eyebrow: "Questions",
    title: { pre: "Let's clear things ", kw: "up", post: "." },
    lead: "The things people ask us before they book. Straight answers, no agency talk.",
    items: [
      {
        q: "How much does it cost?",
        a: "Every plan is built around your goal, so we quote after the first meeting, not before. Most clients pay a monthly fee for our team plus a separate ad budget that goes straight to Meta or TikTok. You'll get a clear number on the call, with no surprises later.",
      },
      {
        q: "Do I really have to be on camera?",
        a: "It works best when you are, because people buy from people. But it can be anyone on your team. We write the scripts, coach you on set and keep each session short. Most people are comfortable by the second shoot.",
      },
      {
        q: "How much of my time will it take?",
        a: "One kick-off meeting, then a filming session of a couple of hours each month and a short monthly review. Everything else, from editing to publishing to ads, is on us.",
      },
      {
        q: "How fast will I see results?",
        a: "Content and ads start working in the first weeks, but we judge success over 90 days. Before we start, we agree on the one number that matters to you, usually enquiries or bookings.",
      },
      {
        q: "Will this work for my industry?",
        a: "We work best with businesses that sell a real product or service and can handle more clients: clinics, restaurants, showrooms, studios, shops and local brands. If we don't think we can help, we'll tell you on the call.",
      },
      {
        q: "Is there a long contract?",
        a: "No. We start with a three-month period, because that's how long it takes to read real results. After that it's month to month.",
      },
      {
        q: "Do you guarantee results?",
        a: "Nobody honest can guarantee a number for every business. What we guarantee is the work and the transparency: you see every figure, every month. If a target isn't moving, we change the plan at no extra cost.",
      },
      {
        q: "What happens on the call?",
        a: "Thirty minutes. We look at your business, your current content and what one new client is worth to you. You'll leave with ideas you can use whether you work with us or not.",
      },
    ],
    stillTitle: "Still not sure?",
    stillBody: "Ask us directly. A real person replies, usually within the hour.",
    book: "Book a call",
    whatsapp: "WhatsApp us",
  },
  booking: {
    eyebrow: "Book a call",
    title: { pre: "Your next client is one ", kw: "call", post: " away." },
    promises: [
      "30 minutes, by video or in person",
      "Free, with no obligation",
      "You leave with ideas you can use either way",
    ],
    quote: "Every project starts with a conversation. This is ours.",
    form: {
      name: "Your name",
      email: "Email",
      phone: "Phone",
      optional: "Optional",
      site: "Website or Instagram",
      sitePlaceholder: "@yourbusiness",
      goalLegend: "What do you need most?",
      goals: {
        enquiries: "More enquiries",
        launch: "Launch an offer",
        social: "Social that works",
        unsure: "Not sure yet",
      },
      consentPre: "I agree to be contacted about my request, as described in the",
      privacy: "privacy policy",
      submit: "Request my call",
      sending: "Sending…",
      reply: "We reply within 24 business hours. No spam, ever.",
      serverError: "Something went wrong. Try again, or message us on WhatsApp.",
      errors: {
        name: "Tell us your name.",
        email: "That email doesn't look right.",
        phone: "That number doesn't look right.",
        goal: "Pick the one that fits best.",
        consent: "We need your OK to contact you.",
      },
    },
    success: {
      thanks: (name: string) => `Thanks, ${name}.`,
      kw: "Talk soon",
      body: "Your request is in. One of us will get back to you within 24 business hours to set a time that works.",
    },
  },
  footer: {
    tagline:
      "Short-form content, social and performance ads, made by real people. Social in real life before it's social on your phone.",
    talk: "Talk to us",
    book: "Book a call",
    follow: "Follow",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    vat: "VAT no.",
  },
};

export type Dict = typeof en;
