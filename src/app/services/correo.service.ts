import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private baseUrl = 'http://localhost:5000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  enviarCorreo(datosFormulario: any): Observable<any> {
    const url = `${this.baseUrl}/contacto`; // Reemplaza '/contacto' con la ruta correcta en tu backend
    return this.http.post<any>(url, datosFormulario);
  }
}
