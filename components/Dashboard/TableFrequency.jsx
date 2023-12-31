import React from 'react'
import Card from './Card';

export default function TableFrequency(props) {

    const data = props.data;   
    
    return (
        <div className='bg-[#101010]'>
            <div className='overflow-auto block'>
                <table className='font-extralight w-full'>
                    <thead className='text-white bg-[#141414]'>
                        <tr className='text-center'>
                            <th className='tableTitle'>Límite inferior</th>
                            <th className='tableTitle'>Límite superior</th>
                            <th className='tableTitle'>Frecuencia</th>
                            <th className='tableTitle'>Frecuencia acumulativa</th>
                            <th className='tableTitle'>Marca de clase</th>
                            <th className='tableTitle'>Límite inferior exacto</th>
                            <th className='tableTitle'>Límite superior exacto</th>
                        </tr>
                    </thead>
                    <tbody className='text-center divide-y border-[#141414] divide-[#242424] bg-[#101010]'>
                        {data.frequency.map((data) => {
                            return (
                                <tr key={data}>
                                    <td className='tableCard'>
                                        {data.limInf}
                                    </td>
                                    <td className='tableCard'>
                                        {data.limSup}
                                    </td>
                                    <td className='tableCard'>
                                        {data.frequency}
                                    </td>
                                    <td className='tableCard'>
                                        {data.cumulativeFrequency}
                                    </td>
                                    <td className='tableCard'>
                                        {data.classMark}
                                    </td>
                                    <td className='tableCard'>
                                        {data.limInfEx}
                                    </td>
                                    <td className='tableCard'>
                                        {data.limSupEx}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-3 justify-items-center mb-16">
                <Card data={data.range} />
                <Card data={data.klasses} />
                <Card data={data.amplitude} />
                <Card data={data.unit} />
                <Card data={data.media} />
                <Card data={data.mediaArit} />
                <Card data={data.moda} />
                <Card data={data.meanDeviation} />
                <Card data={data.variance} />
                <Card data={data.standardDeviation} />
            </div>
        </div>
    )
}
