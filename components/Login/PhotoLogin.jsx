import Image from 'next/image'
import React from 'react'

export default function PhotoLogin() {
  return (
    <div>
      <Image
            width={3303}
            height={3456}
            className="w-full h-screen object-cover"
            src="/login.webp"
            alt='login'
            priority={true}
        /> 
    </div>
  )
}
