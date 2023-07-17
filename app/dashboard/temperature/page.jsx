"use client"
import { useEffect, useState } from 'react'
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import Cookies from 'js-cookie';
import axios from '@/libs/axios';

export default function TemperaturePage() {

    const [data, setData] = useState([]);

    const [error, setError] = useState(null);


    useEffect(() => {
        axios.get('/miseri/api/statistic/temperature', {
            headers: { 'Authorization': Cookies.get('miseri-auth') }
        }).then(function (response) {
            setData(response.data.data)
        }).catch(function (err) {
            setError(err);
        });
    }, [])


    if (data.length === 0) {
        return (
            <>
                <DashboardPanel>
                    Loading data
                </DashboardPanel>
            </>
        );
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
                    {JSON.stringify({ data }, null, 2)}
                </pre>
            </DashboardPanel>
        </>
    );
}
