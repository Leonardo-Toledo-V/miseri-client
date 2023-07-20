import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

export function DoughnutChartC(props) {
    const sensors = props.sensors;

    const [light, setLight] = useState({
        lightA: 0,
        lightB: 0,
    });

    const [lightA, setLightA] = useState([]);
    const [lightB, setLightB] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        setLight({
            lightA: sensors.lightA,
            lightB: sensors.lightB,
        });
    }, [props]);



    useEffect(() => {
        const intervalId = setInterval(() => {
            const newLightA = [...lightA];
            const newLightB = [...lightB];
            if (newLightA.length >= 1) {
                newLightA.shift();
                newLightB.shift();
            }
            newLightA.push(light.lightA);
            newLightB.push(light.lightB);
            setLightA(newLightA);
            setLightB(newLightB);
            setAverage(((lightA[0] + lightB[0])/2).toFixed(1))

        }, 1000);

        return () => clearInterval(intervalId);
    }, [light]);

    const data = {
        datasets: [
            {
                label: '%',
                data: [[lightA],[lightB]],
                backgroundColor: [
                    '#fc5c65',
                    '#fed330',
                ],
                borderColor: [
                    '#fc5c65',
                    '#fed330',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
        <section >
            <div className="overflow-hidden ">
                <div className="text-gray-400">
                    <div className="flex justify-start items-center mb-4 space-x-4">
                        <h2 className=" font-medium text-md mt-8">
                            Luz
                        </h2>
                    </div>
                    <div className="relative">
                    <Doughnut  data={data} className='cursor-pointer' />
                        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-4xl">
                            {average}
                            %
                        </h2>
                    </div>
                    <div className="flex flex-col mt-10">
                        <div className="flex items-center space-x-2 flex-1 text-sm text-gray-200 font-medium">
                            <div className="bg-[#fc5c65] w-3 h-3 rounded-full"></div>
                            <h3>Sensor A: {Math.round(lightA)}%</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-200 font-medium">
                            <div className="bg-[#fed330] w-3 h-3 rounded-full"></div>
                            <h3>Sensor B: {Math.round(lightB)}%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
