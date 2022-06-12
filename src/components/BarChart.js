import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Bar} from 'react-chartjs-2'

const BarChart = ({labels, listaMedia}) =>{
    const data = {
      labels,
      datasets: [
        {
          label: 'Histograma',
          data: listaMedia,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          
        }
      ],
    };
    return (
        <Bar data={data} />
        )
}

export default BarChart