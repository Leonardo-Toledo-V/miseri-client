"use client"
import React from 'react';
import FormLogin from '@/components/FormLogin';
import PhotoLogin from '@/components/PhotoLogin';
import TransitionEffect from '@/components/Transitions/TransitionEffect';

export default function Page() {
  return (
      <>
      <TransitionEffect/>
      <div className="w-full h-screen flex items-center">
        <div className="lg:relative w-full lg:w-1/2 h-full flex flex-col">
          <FormLogin />
        </div>
        <div className="relative w-1/2 h-full lg:flex flex-col hidden">
          <PhotoLogin />
        </div>
      </div>
      </>
  );
}

