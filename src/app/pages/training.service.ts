import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  fetchTraining(): Observable<any> {
    return this.http.get<any>(`${environment.fikasentaniApiUrl}/training/`)
  }
}
