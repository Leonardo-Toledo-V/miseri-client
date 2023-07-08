"use client"
import Image from 'next/image'
import React from 'react'

export default function TextIndex() {
    return (
        <>
            <div className='w-full' id='home'>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between lg:pt-12 lg:pl-9'>
                            <div className='lg:max-w-[650px] p-2 mb-12'>
                                <h2 className='text-3xl lg:text-6xl font-playfair m-6 lg:pt-24 text-center lg:text-left'>
                                Un vistazo a tu ambiente, un paso hacia la tranquilidad.
                                </h2>
                                <hr />
                                <div className='flex justify-around m-4 items-center'>
                                    <div>
                                            <p className='font-lato text-xs lg:text-sm uppercase lg:w-64'>cada espacio se convierte en un oasis de bienestar.</p>
                                    </div>
                                    <div>
                                            <p className='font-lato text-xs lg:text-sm text-center lg:text-left lg:w-64'>La herramienta definitiva para mejorar las ventas al ofrecer un entorno óptimo que cautiva a tus clientes.</p>
                                    </div>
                                </div>
                            </div>
                        <div className='relative w-full h-[400px] lg:max-w-[650px] lg:h-[600px]'>
                            <Image 
                            fill
                            priority
                            sizes='(max-width: 650px) 1000vw, 700px'
                            style={{
                                objectFit: 'cover',
                                loading: 'lazy',
                                position: 'absolute',
                            }}  
                            src="/rasp.png" 
                            alt="raspberry"
                            className='transition-opacity opacity-0 duration-[2s]'
                            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                            />
                        </div>
                </div>
            </div>
        </>
    )
}
