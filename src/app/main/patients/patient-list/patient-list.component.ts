import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PatientDetailDto } from 'src/app/core/models/patient-detail-dto';
import { PatientService } from 'src/app/core/services/patient.service';
import { Customer } from 'src/app/shared/demo/api/customer';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: PatientDetailDto[] = [];
  loading: boolean = false;
  constructor(private _patientService: PatientService) { }

  ngOnInit(): void {
    this._patientService.getPatientList().subscribe((data) => {
      this.patients = data;
      console.log('patients', this.patients);
    });
  }
  @ViewChild('filter') filter!: ElementRef;
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
