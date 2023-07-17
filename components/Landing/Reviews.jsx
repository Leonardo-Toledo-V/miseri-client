import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Reviews() {
    return (
        <>
            <div className='w-full h-full my-32 ' id='review'>
                <div className='flex flex-col'>
                    <div className='flex items-center space-x-6 justify-center mt-16'>
                        <hr className="w-32 md:w-56" />
                        <h2 className='text-xl md:text-4xl font-playfair text-center'> Lo que dicen de nosotros</h2>
                        <hr className="w-32 md:w-56"/>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center mt-6 lg:mx-36 grayscale '>
                        <div className='col-span-1 max-w-sm p-4 cursor-pointer'>
                            <div className='flex justify-center md:w-[347px] md:h-[463px]'>
                                <Image
                                    className="bg-cover"
                                    src="/img-1.webp"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'> Juan C.</h3>
                                <ArrowUpRightIcon className='w-3 h-3' alt=""/>
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri es mi compañero de confianza para mantener mi hogar seguro. Me gusta cómo recopila datos sobre la calidad del aire y me alerta sobre cualquier problema potencial. ¡Un gran dispositivo!</p>
                        </div>
                        <div className='col-span-1 max-w-sm p-4 cursor-pointer'>
                            <div className='flex justify-center md:w-[347px] md:h-[463px]'>
                                <Image
                                    src="/img-2.webp"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'>Carolina P.</h3>
                                <ArrowUpRightIcon className='w-3 h-3' alt=""/>
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri es sencillo de configurar y proporciona información precisa sobre la calidad del aire. Lo uso en la habitación de mi bebé y me da tranquilidad saber que está respirando aire limpio.</p>
                        </div>
                        <div className='sm:col-span-2 xl:col-span-1 max-w-sm p-4 cursor-pointer'>
                            <div className='flex justify-center md:w-[347px] md:h-[463px]'>
                                <Image
                                    src="/img-3.webp"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'>Luis R.</h3>
                                <ArrowUpRightIcon className='w-3 h-3' alt=""/>
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri funciona bien en general, pero la conexión a la aplicación a veces es intermitente. Espero que se solucionen en futuras actualizaciones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
