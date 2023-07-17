"use client"
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import DashboardPage from '@/components/Dashboard/DashboardPage'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'


export default function Dashboard() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <DashboardPanel>
          <DashboardPage />
        </DashboardPanel>
      }
    </>
  )
}
