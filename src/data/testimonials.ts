import type { TestimonialItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    isMain: true,
    quote: 'Asad engineered our flagship e-commerce platform for BK Tajir (bktajir.com) with remarkable speed and attention to detail. The catalog presentation for our luxury watches, earbuds, and footwear is fast and elegant, and nationwide Cash on Delivery orders flow without friction.',
    clientName: 'Bilal Khan',
    clientRole: 'Managing Director, BK Tajir Store',
    projectScope: 'BK Tajir (bktajir.com) — Luxury E-Commerce Platform'
  },
  {
    id: 't-2',
    isMain: false,
    quote: 'The 24-hour rolling check-in engine, streak bonus logic, and local wallet payout pipelines (JazzCash & EasyPaisa) for mytrustearn.online were built with total stability. Fast, responsive, and reliable architecture.',
    clientName: 'M. Rizwan',
    clientRole: 'Product Lead, My Trust Platform',
    projectScope: 'My Trust Earn (mytrustearn.online) — Fintech Rewards System'
  },
  {
    id: 't-3',
    isMain: false,
    quote: 'Reliable backend modeling with PHP and clear database structure. Delivered on time with zero fuss. An engineer who takes genuine pride in the details.',
    clientName: 'Tariq Mehmood',
    clientRole: 'Operations Manager',
    projectScope: 'Database & Portal Architecture'
  }
];
