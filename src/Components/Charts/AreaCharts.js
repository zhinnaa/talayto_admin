import React from 'react'
import {CCharts}from '../../StyleComponent/Dashboard'
export default function AreaCharts() {
  return(
    <CCharts
    type='line'
    backgroundcolor='#A57C01'
    
    data={{
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'اذر', 'دی', 'بهمن', 'اسفند'],
      datasets: [
        {
          
          label: 'This Month',
          backgroundcolor: 'rgba(179,181,198,0.2)',
          borderColor: '#a79eff',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#a79eff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#A57C01',
          tooltipLabelColor: '#e2c134',
          data: [65, 59, 90, 81, 56, 55, 40],
          
          
        
        },
       
      ],
    }}  
    options={{
      aspectRatio: 1.5,
      backgroundColor:'#A57C01',
      tooltips: {
        enabled: true,
        // backgroundColor:'#fff',
        height:50,
        width:50,
   
       
      }
    }}
   
  />
  )
 
}