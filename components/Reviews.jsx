import Image from 'next/image'
import React from 'react'

export default function Reviews() {
    return (
        <>
            <div className='w-full h-screen mt-32' id='review'>
                <div className='flex flex-col'>
                    <div className='flex items-center space-x-6 justify-center mt-16'>
                        <hr className="w-56" />
                        <h2 className='text-4xl font-playfair'> Lo que dicen de nosotros</h2>
                        <hr className="w-56" />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center mt-6'>
                        <div className='flex flex-col max-w-sm p-4 hover:scale-105 duration-500 cursor-pointer'>
                            <div className='flex justify-center w-[347px] h-[463px]'>
                                <Image
                                    className="bg-cover"
                                    src="/rasp.png"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'> Juan C.</h3>
                                <img className='w-3 h-3' src="arrow.png" alt="" srcset="" />
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri es mi compañero de confianza para mantener mi hogar seguro. Me gusta cómo recopila datos sobre la calidad del aire y me alerta sobre cualquier problema potencial. ¡Un gran dispositivo!</p>
                        </div>
                        <div className='flex flex-col max-w-sm p-4 hover:scale-105 duration-500 cursor-pointer'>
                            <div className='flex justify-center w-[347px] h-[463px]'>
                                <Image
                                    src="/rasp.png"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'>Carolina P.</h3>
                                <img className='w-3 h-3' src="arrow.png" alt="" srcset="" />
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri es sencillo de configurar y proporciona información precisa sobre la calidad del aire. Lo uso en la habitación de mi bebé y me da tranquilidad saber que está respirando aire limpio.</p>
                        </div>
                        <div className='flex flex-col max-w-sm p-4 hover:scale-105 duration-500 cursor-pointer'>
                            <div className='flex justify-center w-[347px] h-[463px]'>
                                <Image
                                    src="/rasp.png"
                                    width={347}
                                    height={463}
                                    alt="review image"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <h3 className='font-playfair text-base'>Luis R.</h3>
                                <img className='w-3 h-3' src="arrow.png" alt="" srcset="" />
                            </div>
                            <p className='font-lato text-sm mt-2'>Miseri funciona bien en general, pero la conexión a la aplicación a veces es intermitente. Espero que se solucione en futuras actualizaciones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
