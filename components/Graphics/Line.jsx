import React from 'react'
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
    },
};

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Temperatura',
            data: [23, 33, 22, 19, 11, 49, 30],
            borderColor: '#9A4079',
            backgroundColor: '#9A4079',
        },
        {
            label: 'Gas',
            data: [10, 43, 2, 1, 4, 9, 34],
            borderColor: '#B43661',
            backgroundColor: '#B43661',
        },
        {
            label: 'Humedad',
            data: [10, 43, 2, 10, 43, 19, 34],
            borderColor: '#6454AA',
            backgroundColor: '#6454AA',
        },
        {
            label: 'Luz',
            data: [10, 3, 21, 1, 44, 9, 34],
            borderColor: '#BB335B',
            backgroundColor: '#BB335B',
        },
        {
            label: 'Calidad de aire',
            data: [10, 43, 12, 21, 4, 9, 4],
            borderColor: '#714F9E',
            backgroundColor: '#714F9E',
        }
    ]
};

export default function LineChart() {
    return <Line options={options} data={data} />
}
