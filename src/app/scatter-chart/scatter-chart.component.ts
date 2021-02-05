import { Component, OnInit } from '@angular/core';
import {ChartOptions,ChartDataSets,ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {
  public scatterChartOptions:ChartOptions ={
    responsive:true
  };
  public scatterChartData: ChartDataSets[] =[
    {
      data:[
        { x: 14.2, y: 215 },
        { x: 16.4, y: 325 },
        { x: 11.9, y: 185 },
        { x: 15.2, y: 332 },
        { x: 18.5, y: 406 },
        { x: 22.1, y: 522 },
        { x: 19.4, y: 412 },
        { x: 25.1, y: 614 },
        { x: 23.4, y: 544 },
        { x: 18.1, y: 421 },
      ],
      label:'IceCream sales vs Temperature',
      pointRadius:10,
    },
  ];
  public scatterChartType: ChartType ='scatter';
  public scatterChartLegend = true;

  constructor() { }

  ngOnInit(): void {
  }

}
