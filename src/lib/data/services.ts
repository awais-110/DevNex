import type { Service } from "@/types";

const sharedFaq = [
  {
    question: "How fast can we start?",
    answer:
      "Most projects begin within two business days after scope, deposit, and access are confirmed.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. We work with teams in Pakistan, the UAE, Europe, and North America using async updates and scheduled calls.",
  },
];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Fast, scalable web apps built with Next.js.",
    fullDesc:
      "Custom websites, dashboards, SaaS platforms, and storefronts built for speed, conversion, and clean maintenance.",
    icon: "Code2",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["Next.js 14 / React", "TypeScript", "Supabase / PostgreSQL", "API integrations", "Performance tuning"],
    deliverables: ["Responsive interface", "CMS or admin panel", "SEO foundations", "Analytics events", "Deployment on Vercel", "30-day launch support"],
    process: [
      { title: "Scope", text: "We turn your goals into a clear build plan, page map, and launch checklist." },
      { title: "Prototype", text: "You review wireframes and high-fidelity screens before development starts." },
      { title: "Develop", text: "We build in sprints with clean TypeScript, reusable components, and visible demos." },
      { title: "Launch", text: "We deploy, test, monitor, and stay close for post-launch fixes." },
    ],
    audiences: [
      { title: "Growing businesses", text: "You need a site that feels credible and loads fast." },
      { title: "SaaS founders", text: "You need a product interface, auth, dashboards, and payments." },
      { title: "Retail teams", text: "You need a storefront that converts mobile traffic into sales." },
    ],
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Vercel"],
    faq: [
      ...sharedFaq,
      { question: "Can you replace WordPress?", answer: "Yes. We often migrate slow WordPress sites to Next.js with a cleaner CMS." },
      { question: "Will I own the code?", answer: "Yes. Final source code and deployment access belong to you after payment is complete." },
      { question: "Do you handle hosting?", answer: "We set up hosting on Vercel or your preferred provider and document the handover." },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortDesc: "Brand systems and visuals people remember.",
    fullDesc:
      "Logos, brand identities, pitch decks, social kits, and UI visuals created to make your business look serious from day one.",
    icon: "Palette",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["Logo systems", "Brand guidelines", "Social media kits", "Pitch decks", "UI design"],
    deliverables: ["Logo package", "Color and type system", "Brand usage guide", "Social templates", "Presentation assets", "Editable source files"],
    process: [
      { title: "Direction", text: "We define your market, tone, references, and what your brand should avoid." },
      { title: "Concepts", text: "You review focused routes, not a pile of random options." },
      { title: "System", text: "We extend the chosen direction into practical assets." },
      { title: "Handover", text: "You receive export-ready files and editable source documents." },
    ],
    audiences: [
      { title: "New brands", text: "You need a sharp identity before launch." },
      { title: "Tired businesses", text: "Your current visuals feel dated or inconsistent." },
      { title: "Marketing teams", text: "You need templates that keep campaigns on-brand." },
    ],
    tools: ["Figma", "Illustrator", "Photoshop", "Canva", "After Effects"],
    faq: [
      ...sharedFaq,
      { question: "How many concepts do you provide?", answer: "We usually present two strong directions with clear reasoning." },
      { question: "Can you design social posts monthly?", answer: "Yes. We offer retainer packages for ongoing social media creative." },
      { question: "Do you provide editable files?", answer: "Yes. Final packages include editable files where licensing allows it." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortDesc: "AI agents, chatbots, and workflows that save hours.",
    fullDesc:
      "Practical AI systems connected to your data, support inbox, CRM, and daily workflows so your team gets time back.",
    icon: "Bot",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["Custom chatbots", "AI agents", "Document workflows", "CRM automations", "Human handoff"],
    deliverables: ["Workflow map", "Prompt and tool design", "API integration", "Admin controls", "Testing dashboard", "Team training"],
    process: [
      { title: "Audit", text: "We find repeated work that costs time or delays customers." },
      { title: "Design", text: "We define safe AI behavior, data access, and human review points." },
      { title: "Automate", text: "We build the workflow and connect the tools your team already uses." },
      { title: "Improve", text: "We review logs and tune answers after real usage." },
    ],
    audiences: [
      { title: "Support teams", text: "You answer the same questions every day." },
      { title: "Operations teams", text: "Your work is stuck in spreadsheets and copy-paste." },
      { title: "Founders", text: "You need more output without hiring too early." },
    ],
    tools: ["OpenAI", "Claude", "n8n", "Zapier", "Make", "Supabase"],
    faq: [
      ...sharedFaq,
      { question: "Can the AI use our documents?", answer: "Yes. We can connect approved documents with retrieval and access controls." },
      { question: "Is human approval possible?", answer: "Yes. We can require approval before sensitive messages or actions are sent." },
      { question: "Do you support WhatsApp?", answer: "Yes, through approved WhatsApp Business API providers." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    shortDesc: "Technical SEO and content that earns qualified traffic.",
    fullDesc:
      "A practical SEO program covering speed, structure, keywords, local search, content, and reporting that shows actual numbers.",
    icon: "TrendingUp",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["Technical audit", "Keyword research", "On-page SEO", "Content briefs", "Analytics reporting"],
    deliverables: ["SEO audit", "Keyword plan", "Metadata rewrite", "Schema markup", "Content calendar", "Monthly report"],
    process: [
      { title: "Audit", text: "We find crawl, speed, structure, and content gaps." },
      { title: "Plan", text: "We choose keywords your buyers actually search." },
      { title: "Fix", text: "We improve pages, schema, content, links, and internal structure." },
      { title: "Report", text: "You see rankings, traffic, leads, and next actions." },
    ],
    audiences: [
      { title: "Local businesses", text: "You need visibility in your city and service area." },
      { title: "E-commerce stores", text: "You need product and category pages that rank." },
      { title: "B2B teams", text: "You need qualified visitors, not random traffic." },
    ],
    tools: ["Search Console", "GA4", "Ahrefs", "Screaming Frog", "PageSpeed"],
    faq: [
      ...sharedFaq,
      { question: "How long does SEO take?", answer: "Most clients see clear movement in 8 to 12 weeks, depending on competition." },
      { question: "Do you guarantee first page?", answer: "No serious team should. We guarantee transparent work and measurable reporting." },
      { question: "Can you write content?", answer: "Yes. We create briefs, drafts, and publish-ready articles." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Campaigns that connect spend to revenue.",
    fullDesc:
      "Meta ads, Google ads, email campaigns, and social strategy built around offers, landing pages, and measurable ROI.",
    icon: "Megaphone",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["Meta Ads", "Google Ads", "Email campaigns", "Landing pages", "Creative testing"],
    deliverables: ["Campaign strategy", "Ad copy", "Creative direction", "Landing page review", "Tracking setup", "Weekly optimization"],
    process: [
      { title: "Offer", text: "We sharpen the promise before spending money on traffic." },
      { title: "Tracking", text: "We set up events so leads and sales are visible." },
      { title: "Launch", text: "We test creative, copy, audiences, and landing pages." },
      { title: "Scale", text: "We move budget toward what works and cut what does not." },
    ],
    audiences: [
      { title: "Service businesses", text: "You need steady leads at a controlled cost." },
      { title: "Stores", text: "You need campaigns tied to product margin." },
      { title: "Creators", text: "You need a clean funnel for offers and launches." },
    ],
    tools: ["Meta Ads", "Google Ads", "Klaviyo", "Mailchimp", "GA4", "Looker Studio"],
    faq: [
      ...sharedFaq,
      { question: "Do you manage ad spend?", answer: "You pay platforms directly. We manage strategy, setup, testing, and reporting." },
      { question: "What budget should I start with?", answer: "Many clients start with PKR 50k to 150k monthly ad spend." },
      { question: "Can you create ad visuals?", answer: "Yes. Our design team can produce static and motion creatives." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    shortDesc: "React Native apps for iOS and Android.",
    fullDesc:
      "Cross-platform apps with native-feeling interfaces, API integration, analytics, and store-ready builds.",
    icon: "Smartphone",
    color: "#0066FF",
    accentClass: "text-primary",
    features: ["React Native", "Expo", "Push notifications", "Auth flows", "Store builds"],
    deliverables: ["App UI", "API integration", "Push setup", "Crash reporting", "App Store assets", "Release checklist"],
    process: [
      { title: "Define", text: "We map core app flows and avoid bloated version-one scope." },
      { title: "Design", text: "We design mobile-first screens and test the flows early." },
      { title: "Build", text: "We develop shared iOS and Android code with native quality." },
      { title: "Release", text: "We prepare builds, assets, and launch support." },
    ],
    audiences: [
      { title: "Startups", text: "You need a lean app users can test quickly." },
      { title: "Internal teams", text: "You need a field or operations app." },
      { title: "Platforms", text: "You need mobile access for an existing product." },
    ],
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase"],
    faq: [
      ...sharedFaq,
      { question: "Do you publish to stores?", answer: "Yes. We help prepare and submit store builds." },
      { question: "Can one app work on both platforms?", answer: "Yes. React Native lets us share most code across iOS and Android." },
      { question: "Do you build native modules?", answer: "Yes, when the product requires platform-specific behavior." },
    ],
  },
];

export const serviceSlugs = services.map((service) => service.slug);
