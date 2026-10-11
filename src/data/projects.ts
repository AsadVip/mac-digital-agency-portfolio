import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'bktajir-ecommerce',
    title: 'BK Store — BK Tajir',
    headline: 'Luxury E-Commerce Platform for Watches, Earbuds & Footwear',
    category: 'E-Commerce Platform',
    year: '2025',
    description: 'A high-performance modern e-commerce storefront engineered for BK Tajir (bktajir.com), Pakistan\'s premier luxury retailer. Features responsive catalog browsing across authentic luxury timepieces (Rolex, Hublot, Tissot), wireless earbuds, and premium leather footwear, streamlined Cash on Delivery (COD) checkout, and full Google rich snippet SEO.',
    technologies: ['React', 'TypeScript', 'Vite', 'Responsive CSS', 'COD Checkout', 'Schema.org SEO', 'Meta Pixel'],
    image: '/images/projects/bktajir.svg',
    liveUrl: 'https://bktajir.com',
    sourceUrl: '',
    isFeatured: true,
    isClientProject: true,
    clientName: 'BK Tajir (Multan, Pakistan)',
    metrics: [
      { label: 'CHECKOUT MODEL', value: 'Cash on Delivery (COD)' },
      { label: 'CATALOG SCOPE', value: 'Watches, Earbuds, Shoes' },
      { label: 'SEARCH ENGINE RANKING', value: 'Google Rich Snippet SEO' },
    ],
    deliverables: [
      'Sub-second page loading speed engineered with React and Vite SPA bundling',
      'Multi-category catalog featuring luxury watches (Rolex, Hublot, Tissot), earbuds, and shoes',
      'Nationwide Cash on Delivery (COD) order management and order tracking flow',
      'Comprehensive JSON-LD structured data (OnlineStore, FAQPage, BreadcrumbList) for SERP prominence',
      'Meta Pixel tracking integration for marketing and conversion funnel optimization'
    ]
  },
  {
    id: 'mytrustearn-platform',
    title: 'My Trust Earn',
    headline: 'Daily Habit Rewards, Streak Multipliers & Centralized Wallet Platform',
    category: 'Full-Stack Web App',
    year: '2025',
    description: 'A scalable fintech rewards and online earning platform engineered for client operations at mytrustearn.online. Features a rolling 24-hour server-validated check-in engine, consecutive streak multipliers, an immutable centralized wallet balance ledger, and direct localized withdrawal channels via JazzCash and EasyPaisa.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Server-Side Verification', 'Centralized Ledger', 'JazzCash & EasyPaisa', 'REST APIs'],
    image: '/images/projects/mytrustearn.svg',
    liveUrl: 'https://mytrustearn.online',
    sourceUrl: '',
    isFeatured: true,
    isClientProject: true,
    clientName: 'My Trust Platform',
    metrics: [
      { label: 'CHECK-IN ENGINE', value: '24h Server-Validated' },
      { label: 'LOCAL PAYOUTS', value: 'JazzCash & EasyPaisa' },
      { label: 'ACTIVE MEMBERS', value: '12,500+ Registered' },
    ],
    deliverables: [
      '24-hour rolling check-in mechanism with anti-cheat server timestamp validation',
      'Progressive streak bonus multipliers rewarding consistent 7, 15, and 30-day user habits',
      'Centralized transparent wallet ledger for real-time balance calculations and auditability',
      'Local cashout gateway integration for instant JazzCash and EasyPaisa withdrawal requests',
      'Mobile-first responsive architecture with fast dual dark/light theme support'
    ]
  },
  {
    id: 'nexus-crm',
    title: 'Nexus Data & Inventory Engine',
    headline: 'Relational Database Management System',
    category: 'Database & Backend',
    year: '2024',
    description: 'A robust business management interface driven by PHP and relational MySQL architecture, featuring granular access control, prepared statement security, and responsive operational tables.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'REST Architecture', 'Normalized DB'],
    image: '/images/projects/project-3.svg',
    liveUrl: '',
    sourceUrl: 'https://github.com',
    isFeatured: false,
    isClientProject: false,
    deliverables: [
      'Normalized relational schema with query optimization and index tuning',
      'Server-side PHP authentication and session security with prepared PDO statements',
      'Dynamic data tables with fast client-side search filtering'
    ]
  },
  {
    id: 'apex-horizon',
    title: 'Apex Horizon Platform',
    headline: 'Client Portal & Dynamic Data Platform',
    category: 'Full-Stack Web App',
    year: '2024',
    description: 'A responsive single-page web platform engineered with React and TypeScript, integrated with Supabase PostgreSQL and Row-Level Security for real-time collaboration and client management.',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite', 'CSS Grid'],
    image: '/images/projects/project-1.svg',
    liveUrl: '',
    sourceUrl: 'https://github.com',
    isFeatured: false,
    isClientProject: false,
    deliverables: [
      'Type-safe React architecture with custom hooks',
      'Real-time Supabase database subscriptions and RLS policies',
      'Sub-second page load times with Vite bundling'
    ]
  }
];
