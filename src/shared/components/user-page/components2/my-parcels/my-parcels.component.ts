import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-my-parcels',
  templateUrl: './my-parcels.component.html',
  styleUrls: ['./my-parcels.component.scss']
})
export class MyParcelsComponent {
  ngOnInit(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: { color: 'rgb(5, 140, 66)' },
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
