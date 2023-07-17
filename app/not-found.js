import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen w-full'>
        <Image
          width={1180}
          height={1180}
          alt='image'
          className='max-w-xl h-screen'
          src="../giphy.webp"
        />
    </div>
  )
}
