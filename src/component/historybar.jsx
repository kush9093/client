import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

function HistoryBar({ datas }) {
    const labels = ["식비", "주거/통신", "생활용품", "의복/미용", "건강/문화", "교통/차량", "용돈/기타", "미분류"]
    const cashArr = [0,0,0,0,0,0,0,0]
    const cardArr = [0,0,0,0,0,0,0,0]

    datas.forEach((elm) => {
        let idx = labels.indexOf(elm.category);
        if (idx !== -1) {
            cashArr[idx] += elm.cashAmt ?? 0;
            cardArr[idx] += elm.cardAmt ?? 0;
        }
    })

    const option = {
        Plugin: {
            title: {
                display: true,
                text: "카테고리별 사용금액",
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        },
        responsive: true,
    }

    const data = {
        labels,
        datasets: [{
            label: "카드",
            data: cardArr,
            backgroundColor: "rgb(190,200,210)"
        }, {
            label: "현금",
            data: cashArr,
            backgroundColor: "rgb(200,255,240)"
        }]
    }


    return (<Bar data={data} options={option} />);
}

export default HistoryBar;