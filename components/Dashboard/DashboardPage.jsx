"use client";
import React, { useEffect, useState } from 'react'
import { WiHumidity, WiStrongWind, WiHorizonAlt, WiThermometer } from "react-icons/wi";
import { GiGasMask } from "react-icons/gi"
import LineChart from '../Graphics/LineChart';
import { BarChart } from '../Graphics/BarChart';



export default function DashboardPage(props) {
  const sensors = props;
  console.log(sensors)

  const [sensores, setSensores] = useState({
    co: 0,
    gas: 0,
    humidityA: 0,
    humidityB: 0,
    temperatureA: 0,
    temperatureB: 0,
    lightA: 0,
    lightB: 0,
  });

    useEffect(() => {
      setSensores({
          co: sensors.co,
          gas: sensors.gas,
          humidityA: sensors.humidityA,
          humidityB: sensors.humidityB,
          temperatureA: sensors.temperatureA,
          temperatureB: sensors.temperatureB,
          lightA: sensors.lightA,
          lightB: sensors.lightB,
      });
  }, [props])

  const stats = [
    {
      id: 1,
      name: "Calidad de aire",
      stat: sensores.co.toFixed(2) + " ppm",
      icon: WiStrongWind,
    },
    {
      id: 2,
      name: "Gas",
      stat: sensores.gas.toFixed(2) + " ppm",
      icon: GiGasMask,
    },
    {
      id: 3,
      name: "Niveles de humedad A",
      stat: sensores.humidityA + " %",
      icon: WiHumidity,
    },
    {
      id: 4,
      name: "Niveles de humedad B",
      stat: sensores.humidityB + " %",
      icon: WiHumidity,
    },
    {
      id: 5,
      name: "Temperatura A",
      stat: sensores.temperatureA.toFixed(2) + " °",
      icon: WiThermometer,
    },
    {
      id: 6,
      name: "Temperatura B",
      stat: sensores.temperatureB.toFixed(2) + " °",
      icon: WiThermometer,
    },
    {
      id: 7,
      name: "Intensidad de luz A",
      stat: sensores.lightA.toFixed(2) + " °",
      icon: WiHorizonAlt,
    },
    {
      id: 8,
      name: "Intensidad de luz B",
      stat: sensores.lightB.toFixed(2) + " °",
      icon: WiHorizonAlt,
    },
  ];


  return (
    <>
      <div>
        <div className="flex flex-col">
          <main className="flex-1">
            <div className='px-4 pb-12 lg:pb-16'>
              <div>
                <h1 className="text-lg font-semibold leading-6 text-gray-300">
                  Datos en tiempo real
                </h1>
              </div>
              <div>
                <div>
                  {/* Starts here */}
                  <div>
                    <dl className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {stats.map((item) => (
                        <div
                          key={item.id}
                          className="relative overflow-hidden rounded-lg bg-[#18181A] px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                        >
                          <dt className='flex flex-col justify-center items-center'>
                            <div className="rounded-md p-3">
                              <item.icon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-sm font-medium text-gray-500">
                              {item.name}
                            </p>
                          </dt>
                          <dd className="pb-6 sm:pb-2">
                            <p className="text-xl text-center font-semibold text-gray-300">
                              {item.stat}
                            </p>
                            <div className="absolute inset-x-0 bottom-0 bg-[#141414] px-4 py-4 sm:px-6"></div>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  {/* Ends here */}
                </div>
                <div className="pt-12">
                  <LineChart
                    sensors={props}
                  />
                </div>
                <div className="pt-12">
                  <BarChart
                    sensors={props}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
