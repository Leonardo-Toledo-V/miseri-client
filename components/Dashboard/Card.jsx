import React from 'react'

export default function Card(props) {

    const data = props.data;
    console.log(data)

    return (
        <div className='w-[160px] mt-12'>
            <div className="relative overflow-hidden bg-white px-4 pt-5 pb-8 shadow sm:px-6 sm:pt-6">
                <dt className='flex flex-col items-center'>
                    <p className="truncate text-medium font-lato  text-[#18181A]">
                        data
                    </p>
                    <p className="text-sm font-lato text-gray-500">
                        {data}
                    </p>
                </dt>
                <dd className="flex items-baseline pb-2">
                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-3 py-3 sm:px-6"></div>
                </dd>
            </div>
        </div>
    )
}
