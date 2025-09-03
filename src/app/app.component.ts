import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    barChartOptions = {
    title: { text: 'Monthly Sales' },
    tooltip: {},
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [120, 200, 150, 80] }]
  };

  pieChartOptions = {
    title: { text: 'Market Share', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      type: 'pie',
      radius: '50%',
      data: [
        { value: 40, name: 'Brand A' },
        { value: 30, name: 'Brand B' },
        { value: 20, name: 'Brand C' },
        { value: 10, name: 'Brand D' }
      ]
    }]
  };

  lineChartOptions = {
    title: { text: 'Website Traffic' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [820, 932, 901, 934, 1290] }]
  };

  gaugeChartOptions = {
    series: [{
      type: 'gauge',
      progress: { show: true },
      detail: { valueAnimation: true, formatter: '{value}%' },
      data: [{ value: 75, name: 'Completion' }]
    }]
  };

  heatmapOptions = {
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'category', data: ['Morning', 'Afternoon', 'Evening'] },
    series: [{
      type: 'heatmap',
      data: [
        [0, 0, 10], [0, 1, 20], [0, 2, 30],
        [1, 0, 40], [1, 1, 50], [1, 2, 60],
        [2, 0, 70], [2, 1, 80], [2, 2, 90]
      ]
    }]
  };
}
