import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  crearContacto(datosContacto: any): Observable<any> {
    const body = JSON.stringify(datosContacto);
    console.log(body);
    
    return this.http.post(`${environment.APIS.URL_BACK}/contacto`, body, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }

  registro(datosContacto:any) {
    const body = JSON.stringify(datosContacto);
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<{message:string}>(`${environment.APIS.URL_BACK}/contacto`, body, {headers})
  }
}
