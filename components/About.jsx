"use client"
import React from 'react'

export default function About() {
  return (
    <>
      <div className='w-full h-full mt-12' id='about'>
        <div className='flex flex-col justify-center items-center'>
            <div className='my-12 max-w-[1000px] mt-12'>
                <h3 className='font-lato text-2xl text-center'>
                Nuestra misión es proporcionar soluciones innovadoras de monitoreo ambiental que promuevan la seguridad de las personas.
                </h3>
            </div>
            <div className='flex flex-col  lg:flex-row justify-center mt-12 space-y-8 lg:space-y-0 lg:mx-32'>
                <div className='cursor-pointer hover:scale-105 duration-300 flex flex-col max-w-sm mx-4'>
                   <div className='flex justify-between'>
                   <h3 className='font-playfair text-base'>Seguridad</h3>
                    <img className='w-4 h-4' src="notification.png" alt="" />
                   </div>
                    <p className='text-base font-lato'>Está diseñado para enviarte alertas y notificaciones en tiempo real cuando se detectan cambios significativos en los factores ambientales monitoreados.</p>
                </div>
                
                <div className='cursor-pointer  hover:scale-105 duration-300 flex flex-col max-w-sm mx-4'>
                <div className='flex justify-between'>
                   <h3 className='font-playfair text-base'>Información</h3>
                    <img className='w-4 h-4' src="history.png" alt="" />
                   </div>
                    <p className='text-base font-lato'>Puedes acceder a un historial de datos para analizar las tendencias y cambios a lo largo del tiempo.</p>
                </div>
                <div className='cursor-pointer  hover:scale-105 duration-300 flex flex-col max-w-sm mx-4'>
                <div className='flex justify-between'>
                   <h3 className='font-playfair text-base'>Tecnología</h3>
                    <img className='w-4 h-4' src="sensor.png" alt="" />
                   </div>
                    <p className='text-base font-lato'>Integra múltiples sensores en un solo dispositivo, lo que simplifica el proceso de monitoreo y te proporciona una visión completa de tu entorno en una interfaz fácil de usar.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
