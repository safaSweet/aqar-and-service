import { CChart } from '@coreui/react-chartjs'
import React from 'react'

function Pie_chart() {
  return (
    <><CChart
    // className=' border'
    type="doughnut"
    data={{
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10],
        },
      ],
    }}
    options={{
      plugins: {
        legend: {
          labels: {
            // color: getStyle('--cui-body-color'),
            color:'yellow'
          }
        }
      },
    }}
  /></>
  )
}

export default Pie_chart