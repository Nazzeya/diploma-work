import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class WaterConsumption{
    constructor(
      public Date:string, 
      public Holiday:boolean, 
      public dayOfWeek: number, 
      public Consumption_Cold: number, 
      public Prediction_Cold: number,
      public Consumption_Hot: number,
      public Prediction_Hot: number
      ){}
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
