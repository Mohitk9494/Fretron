import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,AfterViewInit {
  // public ctx = document.getElementById('myChart').getContext('2d');
  constructor() { }
  @ViewChild('chart1') chart1:ElementRef;
  

  ngOnInit(): void {
    
    var myChart = new Chart('chart1', {
      type: 'line',
      
      data: {
          datasets: [{
              data: [20, 50, 100, 75, 25, 0],
              label: 'Left dataset',
              yAxisID: 'left-y-axis',
              backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
          }, {
              data: [0.1, 0.5, 0.5, 2.0, 1.5, 0],
              label: 'Right dataset',
              yAxisID: 'right-y-axis',
              backgroundColor:'white',
              borderColor:'red',
              borderWidth:1,
              
          }],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      options: {
        tooltips:{
          // mode:'nearest'
        },
        events:['click'],
        responsive:true,
        // responsiveAnimationDuration:3000,
        // aspectRatio:2,
        devicePixelRatio: window.devicePixelRatio,
        
          scales: {
              yAxes: [{
                id:'left-y-axis',
                  type: 'linear',
                  position: 'left'
              }, {
                  id: 'right-y-axis',
                  type: 'linear',
                  position: 'right'
              }]
          }
      }
  });
  
  
  }
ngAfterViewInit(): void {
  this.chart1.nativeElement.parentNode.style.height = '128px';
  
}


  
}
