import React from 'react'
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
"use Client";

const CustomButton = ({title, containerStyles, handleClick, btnType} : CustomButtonProps) => {

  return (
    <button type={btnType} onClick={handleClick} className={containerStyles}>
                     <span>{title}</span>

    </button>
  )
}

export default CustomButton