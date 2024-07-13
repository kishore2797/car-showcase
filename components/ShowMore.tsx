'use client'

import { useRouter } from 'next/navigation';
import { } from 'react'
import CustomButton from './CustomButton';
import { updateSearchParam } from '@/utils';

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParam("limit", `${newLimit}`)
        router.push(newPathName);
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
