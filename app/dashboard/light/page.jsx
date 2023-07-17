"use client"
import { useEffect, useState } from 'react'
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import axios from '@/libs/axios';
import Cookies from 'js-cookie';

export default function LightPage() {

    const [data, setData] = useState([]);

    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get('/miseri/api/statistic/light', {
            headers: { 'Authorization': Cookies.get('miseri-auth') }
        }).then(function (response) {
            setData(response.data.data)
        }).catch(function (err) {
            setError(err)
        });
    }, [])


    if (data.length === 0) {
        return (<>
            <DashboardPanel>
                Loading data
            </DashboardPanel>
        </>)
    }

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
