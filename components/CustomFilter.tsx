'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { updateSearchParam } from '@/utils';

interface OptionProps {
  title: string;
  value: string;
}

const CustomFilter = ({ title, options, setFilter }: { title: string, options: OptionProps[], setFilter: any }) => {

  const [selected, setSelected] = useState(options[0]);


  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value)
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