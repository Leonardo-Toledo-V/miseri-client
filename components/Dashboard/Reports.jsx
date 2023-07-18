import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsDownload } from "react-icons/bs"

export default function Reports() {

    const URL = `${process.env.NEXT_PUBLIC_PDF_URL}/pdf/all`;

    const [data, setData] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        axios(URL).then(function (response) {
            setData(response.data)
        }).catch(function (err) {
            setError(err)
        });
    }, []);

    if (data.length === 0) {
        return (
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-[40px] text-gray-400'>
                    <AiOutlineLoading3Quarters className='animate-spin w-full h-full mt-32' />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <>
                <pre className=''>
                    {JSON.stringify({ error }, null, 2)}
                </pre>
            </>
        );
    }

    return (
        <div>
            <p className="text-base font-playfair text-black">
                Reporte de datos
            </p>
            <div className="mt-4 flex flex-col justify-start max-w-xl">
                <div>
                    <p className="block text-sm pb-4 font-lato text-gray-700 mt-4">
                        Puedes visualizar un reporte de tus estadísticas pasadas dando click al botón de descargar.
                    </p>
                </div>
                <div className='flex justify-between items-center mt-14 border-b-[0.5px] border-gray-200'>
                    <p className='font-lato text-sm text-gray-600'>
                        Reporte del sensor de humedad 2023
                    </p>
                    <div className='flex justify-between items-center  text-[#2d2d30] p-1.5 space-x-3 cursor-pointer hover:scale-110 duration-300'>
                        <BsDownload className='h-4 w-4' />
                        <a
                            className='font-lato text-xs'
                            href={data.humidity}
                            download
                        >
                            Descargar
                        </a>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-14 border-b-[0.5px] border-gray-200'>
                    <p className='font-lato text-sm text-gray-600'>
                        Reporte del sensor de luz 2023
                    </p>
                    <div className='flex justify-between items-center text-[#2d2d30] p-1.5 space-x-3 cursor-pointer hover:scale-110 duration-300'>
                        <BsDownload className='h-4 w-4' />
                        <a
                            className='font-lato text-xs'
                            href={data.light}
                            download
                        >
                            Descargar
                        </a>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-14 border-b-[0.5px] border-gray-200'>
                    <p className='font-lato text-sm text-gray-600'>
                        Reporte del sensor de calidad del aire 2023
                    </p>
                    <div className='flex justify-between items-center text-[#2d2d30] p-1.5 space-x-3 cursor-pointer hover:scale-110 duration-300'>
                        <BsDownload className='h-4 w-4' />
                        <a
                            className='font-lato text-xs'
                            href={data.quality}
                            download
                        >
                            Descargar
                        </a>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-14 border-b-[0.5px] border-gray-200'>
                    <p className='font-lato text-sm text-gray-600'>
                        Reporte del sensor de temperatura 2023
                    </p>
                    <div className='flex justify-between items-center text-[#2d2d30] p-1.5 space-x-3 cursor-pointer hover:scale-110 duration-300'>
                        <BsDownload className='h-4 w-4' />
                        <a
                            className='font-lato text-xs'
                            href={data.temperature}
                            download
                        >
                            Descargar
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}
