import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import {ChartOptions,ChartType,ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
 


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
   barChartOptions:ChartOptions ={
      responsive:true,
   };
   barChartLabels:Label[] = ['Apple','Banana','KiwiFruit','Blueberry','Orange','Grapes'];
   barChartType:ChartType = 'bar';
   barChartLegend = true;
   barChartPlugins =[];
   barChartData:ChartDataSets[] =[
     {data:[45,37,60,70,46,33,80],label:'BestFruits'}
   ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
