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

export const Graphic = ({graphicAdd}) => {

    const data = {
        labels: ['1', '2', '3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '23'],
        datasets: [
          {
            data: [graphicAdd?.forecast?.forecastday[0].hour[0].temp_c, 
            graphicAdd?.forecast?.forecastday[0].hour[1].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[2].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[3].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[4].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[5].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[6].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[7].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[8].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[9].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[10].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[11].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[12].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[13].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[14].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[15].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[16].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[17].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[18].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[19].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[20].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[21].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[22].temp_c,
            graphicAdd?.forecast?.forecastday[0].hour[23].temp_c,],

            borderColor: '#FFF',
            // backgroundColor: 'transparent',
            // pointBorderColor: 'transparent',
            pointBorderWidth: 7,
            tension: .60,
          },
         
        ],
      }
    
    const options = {
        plugins: {
          legend: false,
        },
    
        scales: {
    
          x: {
            grid: {
              display: false,
            },
    
            border: {
              display: false,
            },
    
            ticks: {
              display: false,
            }
          },
          y: {
            grid: {
              display: false,
            },
    
            border: {
              display: false,
            },
    
            ticks: {
              display: false,
            }
          },
        },
    }

  return (
    <div>
        <Line data={data} options={options} height={100} width={950}/>
    </div>
  )
}
