"use client"

import Image from 'next/image';
import React from 'react'
import { SearchManufacturer } from './';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string, }) => {
    return <button type='submit' className={`-ml- z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
}

const SearchBar = ({ setManufacturer, setModel }: { setManufacturer: any, setModel: any }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchManufacturer === '' && searchModel === '') {
            return alert('Please fill in the search bar');
        }

        setManufacturer(searchManufacturer);
        setModel(searchModel);
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__items'>
                <Image
                    src='/model-icon.png'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4 mt-3'
                    alt='model icon'
                />
                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar