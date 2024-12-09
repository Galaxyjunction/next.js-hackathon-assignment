import { CardProps } from '@/types/index';
import Image from 'next/image';
import React from 'react'

const ItemCard: React.FC<CardProps> = ({image, heading, para}) => {
  return (
    <div className='md:w-[309px] md:h-[134px] w-[334px] h-[166px] flex gap-[22px]'>
        <Image
        src={`/images/${image}.png`}
        alt={`${heading} Image`}
        width={200}
        height={200}
        className=' w-[133px] h-[166px]'/>
        <div className='md:w-[300px] md:h-[134px] w-[179px] h-[166px] md:flex md:justify-between md:mt-3'>
          <div className='md:py-2'>
          <h5 className='font-clash font-normal leading-[22.4px] text-darkPrimary text-xl'>{heading}</h5>
            <p className='py-1 font-satoshi font-normal leading-[21px] text-darkPrimary'>{para}</p>
            <p className='py-1 font-satoshi font-normal leading-6 text-darkPrimary text-lg'> &#163; 85</p>
          </div>
            <p className='md:relative md:left-[30rem] w-[122px] h-[46px] px-[16px] py-[12] bg-lightGray font-satoshi font-normal leading-[21.6px] text-darkPrimary text-lg mt-2'> 1 </p>

            <p className='hidden md:w-[100px] md:block relative md:left-[45rem] md:py-0 py-1 font-satoshi font-normal leading-6 text-darkPrimary text-lg'>&#163; 85</p>
        </div>
    </div>
    
  );
};

export default ItemCard;