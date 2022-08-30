
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function Doughnutbar({ datas }) {
    const obj = {};
    datas.forEach((elm) => {
        if (!obj[elm.categoty]) {
            obj[elm.category] = 0;
        }
        obj[elm.category] += elm.cardAmt
        obj[elm.category] += elm.cashAmt
    })
    let arr = [];
    for(let i in obj){
        arr.push([i,obj[i]])
    }
     arr.sort((a,b)=>{
        return b[1]-a[1]
    })
    const labels = []
    const datad = [];
    for(let val of arr){
        labels.push(val[0]);
        datad.push(val[1])
   }

    const data = {
        labels,
        datasets: [
            {
                label: '# of Votes',
                data : datad,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(25, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(25, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (<div>
        <Doughnut data={data} />
    </div>);
}

export default Doughnutbar;