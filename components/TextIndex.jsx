import React from 'react'

export default function TextIndex() {
    return (
        <>
            <div className='w-full' id='home'>
                <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:pt-12 lg:pl-9'>
                            <div className='max-w-[650px] p-2 mb-12'>
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
                        <div className='grayscale-[30%]'>
                            <img className='flex h-[400px] lg:max-w-[650px] lg:h-[600px] bg-cover' src="rasp.png" alt="raspberry" />
                        </div>
                </div>
            </div>
        </>
    )
}
