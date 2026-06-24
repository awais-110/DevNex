import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-website-pakistani-business-2025",
    title: "Why Your Pakistani Business Needs a Custom Website in 2025",
    category: "Business",
    excerpt:
      "Your website is often the first sales call. A custom build gives you speed, trust, and room to grow.",
    author: "Techways Editorial",
    date: "2025-06-10",
    readTime: "6 min read",
    icon: "Globe2",
    sections: [
      { id: "trust", heading: "Trust starts before the call", body: ["Buyers compare you before they message you. A fast, clear site gives them reasons to trust you.", "A custom website also lets you show proof, explain pricing, and route leads properly."] },
      { id: "speed", heading: "Speed changes conversion", body: ["Slow pages lose mobile visitors. Pakistan has many mobile-first buyers, so performance is not optional.", "A lean Next.js build helps your pages load quickly and stay easy to maintain."] },
      { id: "ownership", heading: "You own the system", body: ["A custom site can grow into dashboards, automations, payments, and SEO content without fighting a rigid theme."] },
    ],
  },
  {
    slug: "ai-automation-tools-client-projects",
    title: "5 AI Automation Tools We Use for Client Projects",
    category: "AI",
    excerpt:
      "The tools we reach for when a business wants useful automation instead of a demo that breaks.",
    author: "Hamza Ali",
    date: "2025-05-28",
    readTime: "7 min read",
    icon: "Bot",
    sections: [
      { id: "stack", heading: "The stack", body: ["We usually combine OpenAI or Claude with n8n, Supabase, and the tools the client already uses.", "The goal is simple: fewer manual steps and clearer handoffs."] },
      { id: "guardrails", heading: "Guardrails matter", body: ["Useful AI workflows need logs, approval points, fallback messages, and limits on what the model can do."] },
      { id: "example", heading: "A simple pattern", body: ["A support workflow can classify a message, search approved documents, draft a reply, and escalate risky cases."], code: "const reply = await supportAgent.run({\n  message,\n  customerId,\n  requireApproval: intent === 'billing',\n});" },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-2025",
    title: "Next.js vs WordPress: Which Should You Choose in 2025?",
    category: "Web Dev",
    excerpt:
      "A practical comparison for founders choosing between a flexible app stack and a classic CMS.",
    author: "Awais Khan",
    date: "2025-05-18",
    readTime: "8 min read",
    icon: "Code2",
    sections: [
      { id: "wordpress", heading: "When WordPress is enough", body: ["WordPress can work well for simple content sites with a trusted theme and careful plugin choices."] },
      { id: "nextjs", heading: "When Next.js wins", body: ["Choose Next.js when performance, custom flows, dashboards, auth, or product features matter."] },
      { id: "decision", heading: "The decision", body: ["Do not choose a stack because it is fashionable. Choose the system your team can maintain."] },
    ],
  },
  {
    slug: "seo-case-study-tripled-traffic",
    title: "How We Tripled a Client's Traffic in 4 Months (SEO Case Study)",
    category: "SEO",
    excerpt:
      "The fixes that moved rankings: structure, speed, local intent, and content that answered buyer questions.",
    author: "Zoya R.",
    date: "2025-04-30",
    readTime: "6 min read",
    icon: "TrendingUp",
    sections: [
      { id: "audit", heading: "The audit found the real problem", body: ["The site had services, but pages were thin and search engines could not understand local relevance."] },
      { id: "execution", heading: "Execution beat theory", body: ["We rewrote metadata, added schema, improved internal links, and published practical service pages."] },
      { id: "numbers", heading: "The numbers", body: ["Traffic tripled in four months, but the better result was a 2.4x increase in qualified leads."] },
    ],
  },
  {
    slug: "cheap-freelancers-vs-software-house",
    title: "The Real Cost of Cheap Freelancers vs a Software House",
    category: "Business",
    excerpt:
      "Cheap work gets expensive when you pay again for fixes, missed deadlines, and unclear ownership.",
    author: "Techways Editorial",
    date: "2025-04-12",
    readTime: "5 min read",
    icon: "Scale",
    sections: [
      { id: "cost", heading: "The hidden cost", body: ["The lowest quote often excludes planning, testing, handover, and support. Those gaps show up later."] },
      { id: "accountability", heading: "Accountability changes the work", body: ["A software house gives you process, coverage, and continuity when the project grows."] },
      { id: "choice", heading: "How to choose", body: ["Pick the team that asks better questions before asking for payment."] },
    ],
  },
  {
    slug: "getting-started-ai-chatbots-business",
    title: "Getting Started with AI Chatbots for Your Business",
    category: "AI",
    excerpt:
      "Start with one painful workflow, approved knowledge, and a clear handoff to your team.",
    author: "Hamza Ali",
    date: "2025-03-22",
    readTime: "6 min read",
    icon: "MessageCircle",
    sections: [
      { id: "scope", heading: "Start small", body: ["A chatbot should solve a real repeat problem. It does not need to run your whole business on day one."] },
      { id: "knowledge", heading: "Use approved knowledge", body: ["Connect FAQs, policies, and product documents. Keep sensitive actions behind human approval."] },
      { id: "measure", heading: "Measure the right things", body: ["Track resolved queries, handoffs, user satisfaction, and time saved."] },
    ],
  },
];
