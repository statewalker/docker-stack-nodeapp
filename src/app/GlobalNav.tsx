'use client';

// import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className="space-y-5">
Global Navigation
    </div>
  );
}
