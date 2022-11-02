'use client';

import { Listbox, Transition } from '@headlessui/react'
import { useState, useEffect, ReactElement, Fragment } from 'react'
import { useColorScheme, useUpdateColorScheme } from './ColorSchemeContext'

import { SunIcon, MoonIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'

function useIterator<T>(read: Function): T | undefined {
  const [value, setValue] = useState<T | undefined>();
  useEffect(() => {
    const iterator: AsyncGenerator<T> = read();
    let stop = false;
    (async () => {
      for await (let val of iterator) {
        if (stop) break;
        setValue(val);
        if (stop) break;
      }
    })();
    return () => {
      stop = true;
      const ret: Function = iterator.return;
      ret?.call(iterator);
    }
  }, [read]);
  return value;
}

function DropDownMenu<T>({
  value,
  values = [],
  setValue,
  format,
  formatButton = format,
  toKey = (item: T, items: T[]) => 'key-' + items.indexOf(item)
}: {
  value: T,
  values: Iterable<T>,
  setValue: Function,
  format: Function,
  formatButton: Function,
  toKey: Function
}): ReactElement {
  const list = [...values];
  value = value !== undefined ? value : list[0];
  const selectedKey = toKey(value, list);
  return (
    <Listbox value={value} onChange={setValue}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{formatButton(value, list)}</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="w-36 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
          rounded-md border border-gray-100 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-900">
            {
              list.map(value => {
                const key = toKey(value, list);
                const isSelected = key === selectedKey;
                return (
                  <Listbox.Option
                    key={key} value={value}
                    className={`group flex h-8 cursor-pointer items-center space-x-4 rounded-md px-3 text-sm font-medium leading-none hover:outline-none  ${isSelected
                      ? 'bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50'
                      : 'text-slate-500 hover:bg-gray-50 hover:text-slate-600 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300'
                      }`}
                  >
                    {format(value, list)}
                  </Listbox.Option>
                )
              })
            }
          </Listbox.Options>
        </Transition>
      </div>

    </Listbox>
  )
}

function getColorScheme(scheme) {
  if (scheme === 'system') {
    scheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return scheme === 'dark' ? scheme : 'light';
}

const formatIcon = v => (
  <span className="group flex h-8 cursor-pointer items-center space-x-4 rounded-md px-3 text-sm font-medium leading-none hover:outline-none text-violet-900  dark:text-violet-50">
      <span className="w-4"><v.icon /></span>
      {v.label ? <span>{v.label}</span> : <span>&nbsp;</span>}
    </span>
)
const colorSchemas = [
  {
    key: 'light',
    scheme: "light",
    iconFormat: () => formatIcon({
      icon : SunIcon
    }),
    format: () => formatIcon({
      label : 'Light',
      icon : SunIcon
    })
  },
  {
    key: 'dark',
    scheme: "dark",
    iconFormat: () => formatIcon({
      icon : MoonIcon
    }),
    format: () => formatIcon({
      label : 'Dark',
      icon : MoonIcon
    })
  },
  {
    key: 'system',
    scheme: getColorScheme("system"),
    iconFormat: () => formatIcon({
      icon : getColorScheme("system") === "light" ? SunIcon : MoonIcon
    }),
    format: () => formatIcon({
      label : 'System',
      icon : Cog6ToothIcon
    })
  }
]

export const ColorSchemeSwitcher = () => {
  const updateColorScheme = useUpdateColorScheme()
  const [colorScheme, setColorScheme] = useState(() => colorSchemas.find(s => s.key === 'system'))
  return (
    <DropDownMenu
      value={colorScheme}
      values={colorSchemas}
      setValue={(v) => {
        setColorScheme(v);
        updateColorScheme(v.scheme);
      }}
      toKey={v => v.key}
      formatButton={v => v.iconFormat()}
      format={v => v.format()}
    ></DropDownMenu>
  )
}
