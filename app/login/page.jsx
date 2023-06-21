"use client"
import FormLogin from '@/components/FormLogin'
import PhotoLogin from '@/components/PhotoLogin'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="w-full h-screen flex items-center">
        <div className="lg:relative w-full lg:w-1/2 h-full flex flex-col">
          <FormLogin/>
        </div>
        <div className="relative w-1/2 h-full lg:flex flex-col hidden">
          <PhotoLogin/>
        </div>
      </div>
    </>
  )
}
