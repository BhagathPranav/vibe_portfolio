/** Curated for recruiters — links open GitHub */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  live?: string;
  image?: string;
  mainTech?: string;
  impactMetric?: string;
};

export const projects: Project[] = [
  {
    title: 'Cross-Platform Coding Aggregator',
    description: 'Real-time developer workspace aggregating LeetCode, CodeChef, and HackerRank stats, active contest calendars, and submission tracking into a single real-time dashboard.',
    tags: ['TypeScript', 'React', 'Node.js', 'API Integration'],
    href: 'https://github.com/BhagathPranav/cross-platform-coding-aggregator',
    mainTech: 'TypeScript',
    impactMetric: '⚡ Real-Time Sync Across 3 Coding Platforms',
  },
  {
    title: 'Friday Stark Voice Agent',
    description: 'Autonomous AI voice assistant featuring real-time speech recognition, natural language reasoning, and desktop voice automation for hands-free productivity.',
    tags: ['Python', 'AI Voice', 'LLM', 'Automation'],
    href: 'https://github.com/BhagathPranav/friday-stark-voice-agent',
    mainTech: 'Python',
    impactMetric: '🤖 Sub-Second Voice AI & Desktop Automation',
  },
  {
    title: 'AI-chart',
    description: 'Personal AI chatbot clone leveraging FreeLLMAPI + Llama 3.3 for zero-latency conversational assistance and intelligent text generation.',
    tags: ['TypeScript', 'LLM', 'Llama 3.3'],
    href: 'https://github.com/BhagathPranav/AI-chart',
    image: '/images/ai_chart_preview.png',
    mainTech: 'TypeScript',
    impactMetric: '🧠 100% Free LLM Inference • Powered by Llama 3.3',
  },
  {
    title: 'Customer Shopping Behavior Analysis',
    description: 'End-to-end data analytics uncovering customer shopping trends, spending habits, and demographic clusters using Python, Pandas, and Seaborn.',
    tags: ['Python', 'Data Analytics', 'Pandas'],
    href: 'https://github.com/BhagathPranav/Customer_Shopping_Behavior_Analysis',
    image: '/images/customer_shopping_preview.png',
    mainTech: 'Python',
    impactMetric: '📊 Analyzed 3,900+ Customer Profiles • 4 Key Segments',
  },
  {
    title: 'Movie Data Analysis',
    description: 'Exploratory data analysis investigating box office trends, budget correlations, and genre profitability drivers using Python & Jupyter notebooks.',
    tags: ['Python', 'Jupyter Notebook'],
    href: 'https://github.com/BhagathPranav/movie-data-analysis',
    image: '/images/movie_data_preview.png',
    mainTech: 'Python',
    impactMetric: '🎬 Explored 10,000+ Film Records • Identified Top ROI Factors',
  },
  {
    title: 'Pinventory',
    description: 'Full-stack inventory management web app featuring live stock updates, category filtering, and item tracking deployed on Vercel.',
    tags: ['TypeScript', 'Vercel', 'Inventory UX'],
    href: 'https://github.com/BhagathPranav/Pinventory',
    live: 'https://pinventory-rho.vercel.app',
    image: '/images/pinventory_preview.png',
    mainTech: 'TypeScript',
    impactMetric: '📦 Live Cloud Deployment • Real-Time Stock Tracking',
  },
  {
    title: 'Zepto E-Commerce Data Analysis',
    description: 'Comprehensive SQL-driven analytics evaluating Zepto e-commerce order volume, customer retention, and delivery funnel efficiency.',
    tags: ['SQL', 'Data Analytics'],
    href: 'https://github.com/BhagathPranav/Zepto-E-Commerce-Data-Analysis-SQL-',
    image: '/images/zepto_preview.png',
    mainTech: 'SQL',
    impactMetric: '🛒 Queried 10,000+ Transactions • Optimized Funnels',
  },
  {
    title: 'Zomato Data Analysis',
    description: 'Data analytics project exploring Zomato dataset using Python, Pandas, and Tableau to visualize regional delivery demand and pricing patterns.',
    tags: ['Python', 'Tableau', 'Data Analytics'],
    href: 'https://github.com/BhagathPranav/Zomato-Data-Analysis',
    image: '/images/zomato_preview.png',
    mainTech: 'Python',
    impactMetric: '📍 Processed 50,000+ Restaurants • 15% Logistics Insight Boost',
  },
  {
    title: 'Travel Bucket',
    description: 'MERN stack workshop application enabling users to curate, manage, and share personalized travel itineraries with dynamic UI state.',
    tags: ['MERN', 'JavaScript'],
    href: 'https://github.com/BhagathPranav/travel_bucket',
    image: '/images/travel_bucket_preview.png',
    mainTech: 'JavaScript',
    impactMetric: '✈️ Full-Stack MERN Architecture • Dynamic Itineraries',
  },
  {
    title: 'SQL Learning Repo',
    description: 'Structured SQL repository containing analytical query challenges, complex JOINs, window functions, and database schema optimizations.',
    tags: ['SQL', 'Learning'],
    href: 'https://github.com/BhagathPranav/sql-learning-repo',
    image: '/images/sql_learning_preview.png',
    mainTech: 'SQL',
    impactMetric: '🗄️ 50+ Analytical Queries • Schema Normalization',
  },
  {
    title: 'Vibe Portfolio',
    description: 'High-performance editorial portfolio site built with Astro, Tailwind CSS, and zero client framework overhead deployed on Cloudflare Pages.',
    tags: ['Astro', 'Cloudflare Pages'],
    href: 'https://github.com/BhagathPranav/vibe_portfolio',
    live: 'https://bhagathpranav.vercel.app',
    image: '/images/vibe_portfolio_preview.png',
    mainTech: 'Astro',
    impactMetric: '🚀 100/100 Lighthouse Speed • 1.1s Static Prerender',
  },
];
