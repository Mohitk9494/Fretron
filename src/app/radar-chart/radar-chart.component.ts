import { Component, OnInit } from '@angular/core';
import {ChartDataSets,ChartType,RadialChartOptions} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {
  public radarChartOptions:RadialChartOptions={
    responsive:true,
  };
  public radarChartLabels: Label[] =['Punctuality','Communication','Problem-Solving','Team-player','Coding','Technical Knowledge','Meeting deadlines'];
  public radarChartData:ChartDataSets[] =[
    {data:[0,1,2,3,4,5,6,7,8,9,10,11,12],label:'Employee Skill Analysis'}
  ];
  public radarChartType:ChartType = 'radar';
  constructor() { }

  ngOnInit(): void {
  }

}
