import { Component, OnInit } from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartType,ChartOptions,ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-combine-chart',
  templateUrl: './combine-chart.component.html',
  styleUrls: ['./combine-chart.component.css']
})
export class CombineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 9], label: 'Approved', type: 'line' },
    { data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    { data: [1, 2, 3], label: 'Open', stack: 'a' },
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' },
  ];
  public barChartLabels: string[] = ['P', 'R', 'B'];

}
