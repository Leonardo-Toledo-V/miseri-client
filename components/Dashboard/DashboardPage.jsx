"use client";
import React from 'react'
import { WiHumidity, WiStrongWind, WiHorizonAlt, WiThermometer } from "react-icons/wi";
import { GiGasMask } from "react-icons/gi"
import LineChart from '../Graphics/LineChart';
import { BarChart } from '../Graphics/BarChart';
import { PieChart } from '../Graphics/PieChart';


export default function DashboardPage(props) {
  const stats = [
    {
      id: 1,
      name: "Calidad de aire",
      stat: props.co.toFixed(2) + " ppm",
      icon: WiStrongWind,
    },
    {
      id: 2,
      name: "Gas",
      stat: props.gas.toFixed(2) + " ppm",
      icon: GiGasMask,
    },
    {
      id: 3,
      name: "Intensidad de luz",
      stat: props.lightA + " %",
      icon: WiHorizonAlt,
    },
    {
      id: 4,
      name: "Niveles de humedad",
      stat: props.humidityA + " %",
      icon: WiHumidity,
    },
    {
      id: 5,
      name: "Temperatura A",
      stat: props.temperatureA.toFixed(2) + " °",
      icon: WiThermometer,
    },
    {
      id: 6,
      name: "Temperatura B",
      stat: props.temperatureB.toFixed(2) + " °",
      icon: WiThermometer,
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
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {stats.map((item) => (
                        <div
                          key={item.id}
                          className="relative overflow-hidden rounded-lg bg-[#18181A] px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                        >
                          <dt>
                            <div className="absolute rounded-md p-3">
                              <item.icon
                                className="h-10 w-10 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">
                              {item.name}
                            </p>
                          </dt>
                          <dd className="ml-16 flex items-baseline pb-6 sm:pb-3">
                            <p className="text-2xl font-semibold text-gray-300">
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
