import React from 'react'
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
"use Client";

const CustomButton = ({title, containerStyles, handleClick} : CustomButtonProps) => {

  return (
    <button type='button' onClick={handleClick} className={containerStyles}>
                     <span>{title}</span>

    </button>
  )
}

export default CustomButton