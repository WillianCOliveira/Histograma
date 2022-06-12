import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line} from 'react-chartjs-2'

const LineChart = ({labels, baixas, altas}) =>{
    const data = {
      labels,
      datasets: [
        {
          label: 'Baixas',
          data: baixas,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          
        },
        {
          label: 'Altas',
          data: altas,
          borderColor: 'rgb(10, 100, 255)',
          backgroundColor: 'rgba(10, 100, 255, 0.5)',
          
        }
      ],
    };
    return (
        <Line data={data} />
        )
}

export default LineChart