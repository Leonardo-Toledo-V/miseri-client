import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
    },
};



export default function LineChart(props) {
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
                borderColor: '#fc5c65',
                backgroundColor: '#fc5c65',
            },
            {
                label: 'Gas',
                data: gas,
                borderColor: '#fd9644',
                backgroundColor: '#fd9644',
            },
            {
                label: 'Temperatura',
                data: temperature,
                borderColor: '#fed330',
                backgroundColor: '#fed330',
            },
            {
                label: 'Luz',
                data: light,
                borderColor: '#26de81',
                backgroundColor: '#26de81',
            },
            {
                label: 'Humedad',
                data: humidity,
                borderColor: '#2bcbba',
                backgroundColor: '#2bcbba',
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


    return <Line options={options} data={data} />
}
