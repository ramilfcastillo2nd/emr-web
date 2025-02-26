import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpRequestService } from './http.request';
import { HttpParams } from '@angular/common/http';
import { ResponseObjectDto } from '../models/base-model';
import { MenuPerRoleDto } from '../models/menu-per-role.dto';
import { Observable } from 'rxjs';
const apiBaseUrl = `${environment.apiUrl}/api`;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpRequestService: HttpRequestService) { }

  getMenuListByRoleId(roleId: number) : Observable<MenuPerRoleDto> {
    const params = new HttpParams()
      .set('roleId', roleId.toString());
    return this.httpRequestService.get<MenuPerRoleDto>(
      `${apiBaseUrl}/menu/getmenusbyroleid`,
      params
    );
  }
}
