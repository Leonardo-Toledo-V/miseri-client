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



export function DoughnutChartB(props) {
    const sensors = props.sensors;

    const [humidity, setHumidity] = useState({
        humidityA: 0,
        humidityB: 0,
    });

    const [humidityA, setHumidityA] = useState([]);
    const [humidityB, setHumidityB] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        setHumidity({
            humidityA: sensors.humidityA,
            humidityB: sensors.humidityB,
        });
    }, [props]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHumidityA = [...humidityA];
            const newHumidityB = [...humidityB];
            if (newHumidityA.length >= 1) {
                newHumidityA.shift();
                newHumidityB.shift();
            }
            newHumidityA.push(humidity.humidityA);
            newHumidityB.push(humidity.humidityB);
            setHumidityA(newHumidityA);
            setHumidityB(newHumidityB);
            setAverage(((humidityA[0] + humidityB[0])/2).toFixed(1))
        }, 1000);

        return () => clearInterval(intervalId);
    }, [humidity]);

    const data = {
        datasets: [
            {
                label: '%',
                data: [[humidityA],[humidityB]],
                backgroundColor: [
                    '#20bf6b',
                    '#0fb9b1',
                ],
                borderColor: [
                    '#20bf6b',
                    '#0fb9b1',
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
                            Humedad
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
                            <div className="bg-[#20bf6b] w-3 h-3 rounded-full"></div>
                            <h3>Sensor A: {Math.round(humidityA)}%</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-200 font-medium">
                            <div className="bg-[#0fb9b1] w-3 h-3 rounded-full"></div>
                            <h3>Sensor B: {Math.round(humidityA)}%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
