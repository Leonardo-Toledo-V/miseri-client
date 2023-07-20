import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BsCircleFill } from 'react-icons/bs';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};




export function DoughnutChartA(props) {
    const sensors = props.sensors;

    const [temperature, setTemperature] = useState({
        temperatureA: 0,
        temperatureB: 0,
    });

    const [temperatureA, setTemperatureA] = useState([]);
    const [temperatureB, setTemperatureB] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        setTemperature({
            temperatureA: sensors.temperatureA,
            temperatureB: sensors.temperatureB,
        });
    }, [props]);



    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTemperatureA = [...temperatureA];
            const newTemperatureB = [...temperatureB];
            if (newTemperatureA.length >= 1) {
                newTemperatureA.shift();
                newTemperatureB.shift();
            }
            newTemperatureA.push(temperature.temperatureA);
            newTemperatureB.push(temperature.temperatureB);
            setTemperatureA(newTemperatureA);
            setTemperatureB(newTemperatureB);

            setAverage(((temperatureA[0] + temperatureB[0])/2).toFixed(1))

        }, 1000);

        return () => clearInterval(intervalId);
    }, [temperature]);

    const data = {
        datasets: [
            {
                label: '%',
                data: [temperatureA, temperatureB],
                backgroundColor: [
                    '#8854d0',
                    '#2d98da',
                ],
                borderColor: [
                    '#8854d0',
                    '#2d98da',
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
                        <div className="flex justify-start items-center mb-4 space-x-2">
                            <h2 className=" font-medium text-md">
                                Temperatura
                            </h2>
                        </div>
                        <div className="relative">
                        <Doughnut options={options} data={data} className='cursor-pointer' />
                            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-4xl">
                                {average}
                                %
                            </h2>
                        </div>
                        <div className="flex flex-col mt-10">
                            <div className="flex items-center space-x-2 flex-1 text-sm text-gray-200 font-medium">
                                <div className="bg-[#8854d0] w-3 h-3 rounded-full"></div>
                                <h3>Sensor A: {Math.round(temperatureA)}%</h3>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-200 font-medium">
                                <div className="bg-[#2d98da] w-3 h-3 rounded-full"></div>
                                <h3>Sensor B: {Math.round(temperatureB)}%</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
