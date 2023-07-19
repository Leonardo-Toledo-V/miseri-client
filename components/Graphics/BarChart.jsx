import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        }
    },
};




export function BarChart(props) {
    const { sensors } = props;

    const [sensores, setSensores] = useState({
        co: 0,
        gas: 0,
        humidity: 0,
        temperature: 0,
        light: 0,
    })

    useEffect(() => {
        setSensores({
            co: sensors.co,
            gas: sensors.gas,
            humidity: sensors.humidityA,
            temperature: sensors.temperatureA,
            light: sensors.lightA,
        });
    }, [props])

    const [co, setCo] = useState([]);
    const [gas, setGas] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [light, setLight] = useState([]);
    const [time, setHours] = useState([]);
    const [humidity, setHumidity] = useState([]);


    const data = {
        labels: time,
        datasets: [
            {
                label: 'Calidad del aire',
                data: co,
                borderColor: '#eb3b5a',
                backgroundColor: '#eb3b5a',
            },
            {
                label: 'Gas',
                data: gas,
                borderColor: '#fa8231',
                backgroundColor: '#fa8231',
            },
            {
                label: 'Temperatura',
                data: temperature,
                borderColor: '#f7b731',
                backgroundColor: '#f7b731',
            },
            {
                label: 'Luz',
                data: light,
                borderColor: '#20bf6b',
                backgroundColor: '#20bf6b',
            },
            {
                label: 'Humedad',
                data: humidity,
                borderColor: '#0fb9b1',
                backgroundColor: '#0fb9b1',
            }
        ]
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            const newHour = new Date().toLocaleTimeString();
            const newCo = [...co];
            const newGas = [...gas];
            const newTemperature = [...temperature];
            const newLight = [...light];
            const newHumidity = [...humidity];

            // Si el tamaño del sensor es mayor o igual a 7, eliminamos el primer dato (cola)
            if (newCo.length >= 7) {
                newCo.shift();
                newGas.shift();
                newTemperature.shift();
                newLight.shift();
                newHumidity.shift();
                time.shift();
            }
            // Agregamos el nuevo dato al final del arreglo
            newCo.push(sensores.co);
            setCo(newCo);

            newGas.push(sensores.gas);
            setGas(newGas);

            newTemperature.push(sensores.temperature);
            setTemperature(newTemperature);

            newLight.push(sensores.light);
            setLight(newLight);

            newHumidity.push(sensores.humidity);
            setHumidity(newHumidity);

            time.push(newHour);
            setHours(time);
        }, 1000);

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [co, gas, temperature, light]);


    return <Bar options={options} data={data} />;
}
