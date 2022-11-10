'use client';

import Link from 'next/link'
import { FC, useState } from 'react'
import { Label } from './Label'
import { Logo } from './Logo'
import { useRouter } from 'next/router'
import { isExternalUrl } from '@/lib/helpers'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks: Array<{ label: string; url: string }> = [
  { label: 'Documentation', url: '/docs' },
  { label: 'Blog', url: '/blog' },
  // NOTE until we have a proper example overview page and multiple examples, link directly to Next.js example
  { label: 'Examples', url: '/examples/nextjs' },
]

const NavLink: FC<{ label?: string; hideLabel?: boolean; icon?: any; url: string }> = ({
  label,
  hideLabel = false,
  icon,
  url,
}) => {
  const router = useRouter()
  const active = true; // FIXME: router.pathname.split('/')[1] == url.replace('/', '')

  return (
    <a href={url} className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
          active
            ? 'bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50'
            : 'text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200'
        }`}
      >
        {icon && (
          <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
            <icon />
          </span>
        )}
        {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
    </a>
  )
}

export const MainNavigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href="/" className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <Logo />
              <span className="-mt-0.5 text-violet-600 dark:text-violet-500">StateWalker</span>
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-end text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              {open ? <XMarkIcon /> : <Bars3Icon />}
            </span>
          </button>
          {open && (
            <div className="fixed inset-0 top-[65px] z-50 h-screen bg-gray-950/10 pb-20 backdrop-blur-lg backdrop-filter dark:bg-gray-950/50">
              <nav className="absolute right-0 h-full divide-y divide-gray-200 border-l border-gray-200 bg-white p-8 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex flex-col items-end space-y-2 pb-8">
                  {navLinks.map(({ label, url }, index) => (
                    <NavLink
                      key={index}
                      label={label}
                      url={url}
                      icon={isExternalUrl(url) ? 'external-link' : undefined}
                    />
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <NavLink key={index} label={label} url={url} icon={isExternalUrl(url) ? 'external-link' : undefined} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
