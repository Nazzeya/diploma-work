import { Component, OnInit } from '@angular/core';
import { VisualizationService, WaterConsumption } from '../services/visualization.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

  constructor( private service: VisualizationService){}

  waterType: string = '';
  selectedDate: string = '';
  predictions: WaterConsumption[] = []

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.predictions = data;
    })
  }

  getPrediction(): number {
  const predictionObj = this.predictions.find(p => p.Date === this.selectedDate);
  if (predictionObj) {
    if (this.waterType === 'cold') {
      return predictionObj.Prediction_Cold || 0;
    } else if (this.waterType === 'hot') {
      return predictionObj.Prediction_Hot || 0;
    }
  }
  return 0;
}
}
