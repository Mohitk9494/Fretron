import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { IssueTrackingComponent } from './issue-tracking/issue-tracking.component';
import { IssueTrakingDetailsComponent } from './issue-traking-details/issue-traking-details.component';
import {AuthserviceService} from '../app/authservice.service'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { NgModel,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { ActivityLogsComponent } from './activity-logs/activity-logs.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { IssueAvtarComponent } from './issue-avtar/issue-avtar.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { IssueDetailMetaBodyContainerPart1Component } from './issue-detail-meta-body-container-part1/issue-detail-meta-body-container-part1.component';
import { IssueDetailMetaBodyContainerPart2Component } from './issue-detail-meta-body-container-part2/issue-detail-meta-body-container-part2.component';
import { InformationComponent } from './information/information.component';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartComponent } from './chart/chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { PartnerDetailDirective } from './partner-detail.directive';
import { CombineChartComponent } from './combine-chart/combine-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IssueTrackingComponent,
    IssueTrakingDetailsComponent,
    PostCommentComponent,
    ActivityLogsComponent,
    AttachmentComponent,
    IssueAvtarComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    IssueDetailMetaBodyContainerPart1Component,
    IssueDetailMetaBodyContainerPart2Component,
    InformationComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    ChartComponent,
    ScatterChartComponent,
    PartnerDetailDirective,
    CombineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule, 
    ChartsModule,
    HttpClientModule
    
    // MatDialogModule

  ],
  providers: [AuthserviceService,HttpClient,NgModel
  ],
  bootstrap: [AppComponent],
  entryComponents:[IssueTrackingComponent]
})
export class AppModule { }
