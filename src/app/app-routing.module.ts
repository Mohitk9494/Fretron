import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueTrackingComponent } from './issue-tracking/issue-tracking.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { DemoComponent } from './demo/demo.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartComponent } from './chart/chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { CombineChartComponent } from './combine-chart/combine-chart.component';


const routes: Routes = [
  {
    path:'issue-tracking',component:IssueTrackingComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'auth',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'demo',component:DemoComponent, canActivate:[AuthGuardGuard]
  },
  {path:'lineChart',component:LineChartComponent},
  {path:'barChart',component:BarChartComponent},
  {path:'doughnutChart',component:DoughnutChartComponent},
  {path:'radarChart',component:RadarChartComponent},
  {path:'pieChart',component:PieChartComponent},
  {path:'bubbleChart',component:BubbleChartComponent},
  {path:'chart',component:ChartComponent},
  {path:'scatterChart',component:ScatterChartComponent},
  {path:'combineChart',component:CombineChartComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
