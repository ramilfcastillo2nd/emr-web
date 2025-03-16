import { Injectable } from '@angular/core';
import { HttpRequestService } from './http.request';
import { PatientDetailDto } from '../models/patient-detail-dto';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
const apiBaseUrl = `${environment.apiUrl}/api`;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

    constructor(private httpRequestService: HttpRequestService) { }
  
    getPatientList() : Observable<PatientDetailDto[]> {
      return this.httpRequestService.get<PatientDetailDto[]>(
        `${apiBaseUrl}/patient`
      );
    }
}
