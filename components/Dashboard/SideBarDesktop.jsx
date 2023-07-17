'use client'
import React from 'react'
import Image from 'next/image';
import { TbReportAnalytics, TbLayoutDashboard } from "react-icons/tb"
import { WiHumidity, WiStrongWind, WiHorizonAlt, WiThermometer } from "react-icons/wi";



const navigation = [
  { name: 'Panel', href: '/dashboard', icon: TbLayoutDashboard, current: false },
  { name: 'Aire', href: '/dashboard/air', icon: WiStrongWind, current: false },
  { name: 'Intensidad de Luz', href: '/dashboard/light', icon: WiHorizonAlt, current: false },
  { name: 'Humedad', href: '/dashboard/humidity', icon: WiHumidity, current: false },
  { name: 'Temperatura', href: '/dashboard/temperature', icon: WiThermometer, current: false },
  { name: 'Reporte', href: '/dashboard/reports', icon: TbReportAnalytics, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SideBarDesktop() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col bg-[#18181A]">
        <div className="flex h-16 justify-center items-center bg-[#333333] px-4">
          <Image
            width={256}
            height={256}
            className="h-10 w-auto"
            src="/logo.webp"
            alt="Your Company"
          />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
