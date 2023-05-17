import { Component } from '@angular/core';
import { VisualizationService } from '../services/visualization.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent {
  constructor( private service: VisualizationService){}

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

}
