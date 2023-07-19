"use client"
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import DashboardPage from '@/components/Dashboard/DashboardPage'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { io } from "socket.io-client";

export default function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [sensors, setSensor] = useState({
    co: 0,
    gas: 0,
    humidity_a: 0,
    humidity_b: 0,
    temperature_a: 0,
    temperature_b: 0,
    light_a: 0,
    light_b: 0,
  });
  
  
  useEffect(() => {
    const URI = process.env.NEXT_PUBLIC_SOCKET_URL;
    const socket = io(URI);

    socket.on('data', (data) => {
      setSensor({
        co: data.air.co_ppm,
        gas: data.air.gas_ppm,
        humidity_a: data.hum_temp_a.humidity,
        humidity_b: data.hum_temp_b.humidity,
        temperature_a: data.hum_temp_a.temperature,
        temperature_b: data.hum_temp_b.temperature,
        light_a: data.light_sensor_a.percent,
        light_b: data.light_sensor_b.percent
      })
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[]);

  return (
    <>
      {loading ?
        <div className='w-full h-screen bg-[#101010]'>
          <div className='flex items-center justify-center h-full'>
            <div className='max-w-[400px]'>
              <BeatLoader
                size={20}
                color={"#FFFFFF"}
                loading={loading}
              />
            </div>
          </div>
        </div>
        :
        <DashboardPanel>
          <DashboardPage 
          gas={sensors.gas}
          co={sensors.co}
          lightA={sensors.light_a}
          lightB={sensors.light_b}
          humidityA={sensors.humidity_a}
          humidityB={sensors.humidity_b}
          temperatureA={sensors.temperature_a}
          temperatureB={sensors.temperature_b}
          />
        </DashboardPanel>
      }
    </>
  )
}
