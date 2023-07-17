"use client"
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import DashboardPage from '@/components/Dashboard/DashboardPage'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import Cookies from 'js-cookie'
import { io } from "socket.io-client";

export default function Dashboard() {

  const [loading, setLoading] = useState(true);

  const URI = process.env.NEXT_PUBLIC_SOCKET_URL;
  const token = Cookies.get('miseri-auth');

  const socket = io(URI, {
    auth: {
      token: token
    }
  });

  useEffect(() => {
    socket.on('data', (data) => {
      console.log(`Data recibida del servidor: ${data}`)
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
