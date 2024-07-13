'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';

interface OptionProps {
  title: string;
  value: string;
}

const CustomFilter = ({ title, options }: { title: string, options: OptionProps[] }) => {
  const router = useRouter();

  const [selected, setSelected] = useState(options[0]);

  const handleuUpdateParams = (e : {title: string, value: string}) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(e.title, e.value.toLowerCase());

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname);
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleuUpdateParams(e)
        }}

      >
        <div className='relative w-fit z-10'>
          <ListboxButton className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              className="ml-4 object-contain"
              alt="chevron up down"
              width={20}
              height={20}
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className="custom-filter__options"
            >
              {
                options.map((option) => (
                  <ListboxOption
                    key={option.title}
                    value={option}
                    className="relative cursor-default select-non py-2 px-4 data-[focus]:bg-primary-blue data-[focus]:text-white"
                  >
                    <span>{option.title}</span>
                  </ListboxOption>
                ))
              }
            </ListboxOptions>

          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter