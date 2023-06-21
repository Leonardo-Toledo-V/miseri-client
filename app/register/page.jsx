"use client"
import FormRegister from '@/components/FormRegister'
import PhotoRegister from '@/components/PhotoRegister'
import React from 'react'

export default function page() {
  return (
    <>
        <div className="w-full h-screen flex items-center">
        <div className="relative w-1/2 h-full sm:flex flex-col hidden">
            <PhotoRegister/>
        </div>
        <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
          <FormRegister/>
        </div>
      </div>
    </>
  )
}


