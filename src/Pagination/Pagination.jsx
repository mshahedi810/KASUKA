import React from 'react'

export default function Pagination() {
  return (
    <div>
        <div className='flex items-center justify-evenly mb-6'>
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/1.png" alt="" />
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/2.png" alt="" />
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/3.png" alt="" />
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/4.png" alt="" />
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/5.png" alt="" />
            <img className='h-[41px] w-[116px] grayscale hover:grayscale-0 cursor-pointer' src="/images/icons/6.png" alt="" />
        </div>
        <div className='flex justify-center items-center'>
            <span className='bg-kasuka h-3 w-3 rounded-[50%] mx-1'></span>
            <span className='bg-gray-700 h-3 w-3 rounded-[50%] mx-1'></span>
            <span className='bg-gray-700 h-3 w-3 rounded-[50%] mx-1'></span>
            <span className='bg-gray-700 h-3 w-3 rounded-[50%] mx-1'></span>
            <span className='bg-gray-700 h-3 w-3 rounded-[50%] mx-1'></span>
        </div>
    </div>
  )
}
