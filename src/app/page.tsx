// import Link from 'next/link';
import { loadData } from "@/lib/api"

import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

function FeaturesList() {
  return (
    <>
      <div className="lg:text-center">
        <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2>
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>

      <div className="mt-10">
        <dl className="mx-auto grid gap-16 w-full max-w-screen-xl grid-cols-1 md:grid-cols-2 lg:py-32">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

function Steps() {
  return (
    <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-3 lg:py-32">
      <div className="max-w-xl space-y-4 md:mx-auto lg:mx-0">
        <div className="w-12 rounded-full border border-violet-200 bg-violet-100 p-2.5 text-violet-600 dark:border-violet-900 dark:bg-violet-900/50 dark:text-violet-500">
          <svg viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2388 2.93714C14.5736 3.02086 14.7772 3.3602 14.6935 3.69507L10.5196 20.3907C10.4359 20.7256 10.0965 20.9292 9.76167 20.8455C9.4268 20.7618 9.2232 20.4224 9.30692 20.0876L13.4808 3.3919C13.5645 3.05703 13.9039 2.85343 14.2388 2.93714ZM6.18128 7.27545C6.42536 7.51953 6.42536 7.91526 6.18128 8.15934L2.44931 11.8913L6.18128 15.6233C6.42536 15.8674 6.42536 16.2631 6.18128 16.5072C5.93721 16.7512 5.54148 16.7512 5.2974 16.5072L1.12349 12.3333C0.87941 12.0892 0.87941 11.6934 1.12349 11.4494L5.2974 7.27545C5.54148 7.03138 5.93721 7.03138 6.18128 7.27545ZM17.8191 7.27545C18.0632 7.03138 18.4589 7.03138 18.703 7.27545L22.8769 11.4494C23.121 11.6934 23.121 12.0892 22.8769 12.3333L18.703 16.5072C18.4589 16.7512 18.0632 16.7512 17.8191 16.5072C17.5751 16.2631 17.5751 15.8674 17.8191 15.6233L21.5511 11.8913L17.8191 8.15934C17.5751 7.91526 17.5751 7.51953 17.8191 7.27545Z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Just use JS/TS
        </h3>
        <p className="leading-relaxed">
          No need to learn a new query language or complicated API docs to read. Import and manipulate your content as data directly with the JavaScript methods you know and love.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Simply  <code>import</code> your content as data
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              No new query language to learn
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Works great with your site framework
            </span>
          </li>
        </ul>
      </div>
      <div className="max-w-xl space-y-4 md:mx-auto lg:mx-0">
        <div className="w-12 rounded-full border border-violet-200 bg-violet-100 p-2.5 text-violet-600 dark:border-violet-900 dark:bg-violet-900/50 dark:text-violet-500">
          <svg viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9286 1.69641C9.19589 1.69641 6.57514 2.78196 4.64285 4.71426C2.71055 6.64655 1.625 9.26731 1.625 12C1.625 13.3531 1.89151 14.6929 2.40931 15.943C2.92712 17.1931 3.68607 18.3289 4.64285 19.2857C5.59962 20.2425 6.73548 21.0014 7.98557 21.5192C9.23565 22.037 10.5755 22.3036 11.9286 22.3036C13.2817 22.3036 14.6215 22.037 15.8716 21.5192C17.1217 21.0014 18.2575 20.2425 19.2143 19.2857C20.1711 18.3289 20.93 17.1931 21.4478 15.943C21.9656 14.6929 22.2321 13.3531 22.2321 12C22.2321 9.26731 21.1466 6.64655 19.2143 4.71426C17.282 2.78196 14.6612 1.69641 11.9286 1.69641ZM3.75896 3.83037C5.92568 1.66366 8.86437 0.446411 11.9286 0.446411C14.9928 0.446411 17.9315 1.66366 20.0982 3.83037C22.2649 5.99709 23.4821 8.93578 23.4821 12C23.4821 13.5172 23.1833 15.0196 22.6027 16.4213C22.0221 17.8231 21.171 19.0967 20.0982 20.1696C19.0253 21.2424 17.7517 22.0935 16.3499 22.6741C14.9482 23.2547 13.4458 23.5536 11.9286 23.5536C10.4113 23.5536 8.90896 23.2547 7.50721 22.6741C6.10547 22.0935 4.83181 21.2424 3.75896 20.1696C2.68611 19.0967 1.83508 17.8231 1.25446 16.4213C0.673842 15.0196 0.375 13.5172 0.375 12C0.375 8.93578 1.59225 5.99709 3.75896 3.83037ZM16.0134 9.12947C16.2574 9.37355 16.2574 9.76927 16.0134 10.0134L11.1562 14.8705C10.9121 15.1146 10.5164 15.1146 10.2723 14.8705L7.84377 12.4419C7.5997 12.1978 7.59969 11.8021 7.84377 11.558C8.08785 11.314 8.48358 11.314 8.72766 11.558L10.7143 13.5447L15.1295 9.12947C15.3736 8.88539 15.7693 8.88539 16.0134 9.12947Z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Built-in code confidence
        </h3>
        <p className="leading-relaxed">
          Automatically-generated type definitions and configurable data validations ensure that your data is properly structured across your application.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Validates your content &amp; frontmatter
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Generates TypeScript types
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Great error messages
            </span>
          </li>
        </ul>
      </div>
      <div className="max-w-xl space-y-4 md:mx-auto lg:mx-0">
        <div className="w-12 rounded-full border border-violet-200 bg-violet-100 p-2.5 text-violet-600 dark:border-violet-900 dark:bg-violet-900/50 dark:text-violet-500">
          <svg viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0586 0.614089C13.3036 0.705028 13.4661 0.938734 13.4661 1.20001V8.97501H21.6832C21.9275 8.97501 22.1495 9.11741 22.2513 9.33952C22.3532 9.56163 22.3162 9.82273 22.1568 10.0079L10.7883 23.2079C10.6178 23.4058 10.3422 23.4769 10.0972 23.3859C9.8523 23.295 9.68977 23.0613 9.68977 22.8V15.025H1.47267C1.22832 15.025 1.00638 14.8826 0.904537 14.6605C0.802697 14.4384 0.839634 14.1773 0.999091 13.9921L12.3675 0.792148C12.538 0.594173 12.8137 0.523151 13.0586 0.614089ZM2.83579 13.775H10.3148C10.6599 13.775 10.9398 14.0548 10.9398 14.4V21.1166L20.3201 10.225H12.8411C12.4959 10.225 12.2161 9.94519 12.2161 9.60001V2.88344L2.83579 13.775Z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Build. Faster.
        </h3>
        <p className="leading-relaxed">
          Contentlayer + Next.js brings faster build times than Next.js alone or up against other frameworks, like Gatsby.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Incremental &amp; parallel builds
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Instant content live-reload
            </span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>
              Scales to 100k of documents
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}


function HeroBlock() {
  return (
    <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 md:grid-cols-2 relative pt-16">
      <div className="space-y-8 sm:max-w-md">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-200 lg:text-5xl">Content made easy for developers</h1>
        <p className="leading-relaxed text-lg">
          Contentlayer is a <button data-state="closed" className="inline-block cursor-text border-b border-dashed border-gray-300 dark:border-gray-500"><span>content SDK</span></button> that validates and transforms your content into <button data-state="closed" className="inline-block cursor-text border-b border-dashed border-gray-300 dark:border-gray-500"><span>type-safe</span></button> JSON data you can easily import into your application.
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-lg">
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>Lightweight &amp; easy to use</span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>Great developer experience</span>
          </li>
          <li className="flex space-x-3">
            <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600 dark:text-violet-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span>Blazing fast build &amp; page performance</span>
          </li>
        </ul>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:flex-col md:space-y-4 md:space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4"><a className="px-6 py-2 flex justify-center items-center space-x-3 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-900 bg-violet-600 text-violet-50 border-violet-800 hover:bg-violet-500 dark:bg-violet-600 dark:border-violet-700 dark:hover:bg-violet-500 dark:hover:border-violet-600" aria-label="Get started" href="/docs/getting-started"><span>Get started</span></a><a className="px-6 py-2 flex justify-center items-center space-x-3 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-900 bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-50 dark:text-violet-300 dark:border-violet-500/30 dark:hover:bg-violet-500/30 dark:bg-violet-500/20" aria-label="Why Contentlayer?" href="/blog/working-with-content-is-hard-for-developers"><span>Why Contentlayer?</span></a></div>
      </div>
      <div className="relative flex w-full items-center">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 shadow-lg shadow-gray-100 dark:shadow-gray-900 w-full">
          <div className="relative -mb-3">
            xxx
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center">
              <div className="relative w-16 text-violet-600 hover:text-violet-500 dark:text-violet-500 dark:hover:text-violet-400">
                <svg viewBox="0 0 116 115" fill="current" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9993 114.857C73.1545 114.857 87.689 108.837 98.4054 98.1204C109.122 87.404 115.142 72.8695 115.142 57.7143C115.142 42.5591 109.122 28.0246 98.4054 17.3082C87.689 6.59183 73.1545 0.571434 57.9993 0.571434C42.8441 0.571434 28.3096 6.59183 17.5932 17.3082C6.87684 28.0246 0.856445 42.5591 0.856445 57.7143C0.856445 72.8695 6.87684 87.404 17.5932 98.1204C28.3096 108.837 42.8441 114.857 57.9993 114.857ZM54.8207 37.4857C53.745 36.768 52.4946 36.3558 51.203 36.2931C49.9114 36.2303 48.6269 36.5194 47.4867 37.1295C46.3465 37.7395 45.3933 38.6477 44.7288 39.7571C44.0643 40.8665 43.7134 42.1354 43.7136 43.4286V72C43.7134 73.2932 44.0643 74.5621 44.7288 75.6715C45.3933 76.7809 46.3465 77.689 47.4867 78.2991C48.6269 78.9092 49.9114 79.1983 51.203 79.1355C52.4946 79.0728 53.745 78.6606 54.8207 77.9429L76.2493 63.6571C77.2276 63.0048 78.0297 62.1211 78.5844 61.0844C79.1392 60.0477 79.4295 58.8901 79.4295 57.7143C79.4295 56.5385 79.1392 55.3809 78.5844 54.3442C78.0297 53.3075 77.2276 52.4237 76.2493 51.7714L54.8207 37.4857Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function Section({ children = [], className = '' }) {
  return (
    <div className={`mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-24 ${className}`}>
      {children}
    </div>
  )
}

export default async function Page() {
  const data = await loadData();
  return (
    <div className="bg-white py-12">
      <Section><HeroBlock /></Section>
      <Section className="bg-gray-50 dark:bg-gray-900/50"><FeaturesList /></Section>
      <Section><Steps /></Section>
    </div>
  );
}
