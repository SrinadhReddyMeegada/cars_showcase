"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/Types';

const CustomButton = ({title , containerStyles, handleClick, btntype} :CustomButtonProps) => {
  return (
    <button disabled={false} 
    type={btntype || "button"} 
    className={`custom-btn ${containerStyles}`} 
    onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
