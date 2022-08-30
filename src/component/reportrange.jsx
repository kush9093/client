import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Reportrange({ datas }) {
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: '결제유형별 통계',
            },
        },
    };
    const labels = [' '];
    let cardTotal = 0;
    let cashTotal = 0;

    datas.forEach((elm) => {
        cardTotal += elm.cardAmt ?? 0;
        cashTotal += elm.cashAmt ?? 0;
    })

    const data = {
        labels,
        datasets: [
            {
                label: '카드',
                data: [cardTotal],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '현금',
                data: [cashTotal],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (<div>
        <Bar options={options} data={data} height="25px"  />;
    </div>);
}

export default Reportrange;