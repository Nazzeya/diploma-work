import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WaterConsumption {
  Date: string;
  Holiday: number;
  dayOfWeek: number;
  Consumption_Cold: number;
  Prediction_Cold: number;
  Consumption_Hot: number;
  Prediction_Hot: number;
}

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'assets/prediction.json';

  getData() : Observable<WaterConsumption[]>{
    return this.http.get<WaterConsumption[]>(this.apiUrl);
  }

}
