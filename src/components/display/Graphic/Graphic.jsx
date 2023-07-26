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
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],

        datasets: [
          {
            data: [
            graphicAdd?.forecast?.forecastday[0].hour[0].temp_c,
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
            tension: .30,
          },
         
        ],

      }
    
    const options = {
       responsive: true,
        plugins: {
          legend: false,

          tooltip: {
            mode: 'index',
            intersect: false,
            displayColors: false,
          }
        },


        hover: {
          mode: 'nearest',
          intersect: true
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
        <Line data={data} options={options} height={200} width={950}/>
    </div>
  )
}
