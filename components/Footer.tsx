import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
                     <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                                  <div className='flex flex-col justify-start items-start gap-6'>
                                                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
                                                <p className='text-gray-700'>Carhub 2025 <br/> All rights resevered &copy; </p>
                                  </div>
                                  <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                                                {footerLinks.map((link) => 
                                                            
                                                            <div className='flex flex-col gap-6 text-base min-w-[170px]' key={link.title}>
                                                                          <h3 className='font-bold text-gray-600'>{link.title}</h3>
                                                                           {link.links.map((item) => {
                                                                            return <h5 key={item.title} className='text-gray-500'>{item.title}</h5>
                                                                            })}
                                                              
                                                                  
                                                
                                                            </div>
                                                            
                                                 )}
                                                
                                  </div>
                     </div>
    </footer>
  )
}

export default Footer