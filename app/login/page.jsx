"use client"
import { useEffect, useState } from 'react';
import FormLogin from '@/components/Login/FormLogin';
import PhotoLogin from '@/components/Login/PhotoLogin';
import { BeatLoader } from 'react-spinners';

export default function Login() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);


  return (
    <>
    {loading ?
      <div className='w-full h-screen'>
        <div className='flex items-center justify-center h-full'>
          <div className='max-w-[400px]'>
          <BeatLoader
            size={20}
            color={"#18181A"}
            loading={loading}
          />
          </div>
        </div>
      </div>
      :
      <div className="w-full h-screen flex items-center">
        <div className="lg:relative w-full lg:w-1/2 h-full flex flex-col">
          <FormLogin />
        </div>
        <div className="relative w-1/2 h-full lg:flex flex-col hidden">
          <PhotoLogin />
        </div>
      </div>
  }
    </>
  );
}

