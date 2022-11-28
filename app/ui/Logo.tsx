'use client';

import { FC } from 'react'

import { ChartPieIcon } from '@heroicons/react/24/outline'
export const Logo: FC = () => {
  return (
    <span className="w-6 text-violet-600 dark:text-violet-500">
      <ChartPieIcon />
    </span>
  )
}
