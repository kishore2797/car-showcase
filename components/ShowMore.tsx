'use client'

import { useRouter } from 'next/navigation';
import { } from 'react'
import CustomButton from './CustomButton';
import { updateSearchParam } from '@/utils';

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: any;
}

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Show More"
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />)}
        </div>
    )
}

export default ShowMore
