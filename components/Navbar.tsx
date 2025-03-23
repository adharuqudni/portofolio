'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import GooeyNav from './ui/gooey-nav';
// update with your own items
const items = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];
export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          Ans.
        </Link>

        {/* Navigation Tabs */}
        <GooeyNav
          items={items}
          animationTime={600}
          particleCount={15}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />

        {/* Email Button */}
        <Button className="hidden md:inline-flex rounded-full px-6">
          Email Me
        </Button>
      </div>
    </div>
  );
}
