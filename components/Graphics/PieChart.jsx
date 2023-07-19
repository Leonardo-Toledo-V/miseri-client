import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        }
    },
};


export function PieChart() {
    const [sensor, setSensor] = useState([]);
    const [time, setHours] = useState([]);

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Temperatura',
                data: sensor,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            }
        ]
    };

    function generarNumeroAleatorio() {
        const min = 1;
        const max = 10;
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        return numeroAleatorio;
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            const numero = generarNumeroAleatorio();
            const nuevoSensor = [...sensor];
            const newHour = new Date().toLocaleTimeString();

            // Si el tamaño del sensor es mayor o igual a 7, eliminamos el primer dato (cola)
            if (nuevoSensor.length >= 7) {
                nuevoSensor.shift();
                time.shift();
            }

            // Agregamos el nuevo dato al final del arreglo
            nuevoSensor.push(numero);
            time.push(newHour);

            setSensor(nuevoSensor);
            setHours(time);
        }, 5000);

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [sensor]);

    return <Pie options={options} data={data} />;
}