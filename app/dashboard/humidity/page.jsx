"use client"
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import axios from '@/libs/axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function HumidityPage() {

    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/miseri/api/statistic/humidity', {
            headers: { 'Authorization': Cookies.get('miseri-auth') }
        }).then(function (response) {
            setData(response.data.data)
        }).catch(function (err) {
            setError(err)
        });
    }, [])


    if (data.length === 0) {
        return (
        <>
            <DashboardPanel>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='w-[40px] text-gray-400'>
                        <AiOutlineLoading3Quarters className='animate-spin w-full h-full mt-32'/>
                    </div>
                </div>
            </DashboardPanel>
        </>
    )}

    if (error) {
        return (
            <>
                <DashboardPanel>
                    <pre className=''>
                        {JSON.stringify({ error }, null, 2)}
                    </pre>
                </DashboardPanel>
            </>
        );
    }

    return (
        <>
            <DashboardPanel>
                <pre className=''>
                    {JSON.stringify({
                        data
                    },
                        null,
                        2
                    )}
                </pre>
            </DashboardPanel>
        </>
    )
}
