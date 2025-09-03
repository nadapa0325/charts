// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   bootstrap: [AppComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: []
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';

// Import only the chart types and components you need
import {
  LineChart,
  BarChart,
  PieChart
} from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
import { AppComponent } from './app.component';

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  CanvasRenderer
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

