import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {

  // Esta es la URL de tu backend en Spring Boot
  private apiUrl = 'http://localhost:8080/api/protocolos';

  constructor(private http: HttpClient) { }

  // 1. Obtener todos
  getProtocolos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // 2. Buscador Avanzado (Filtros)
  buscarProtocolos(rut: string, nombre: string, tipo: string): Observable<any> {
    let params = new HttpParams();
    if (rut) params = params.set('rut', rut);
    if (nombre) params = params.set('nombre', nombre);
    if (tipo) params = params.set('tipo', tipo);

    return this.http.get(`${this.apiUrl}/buscar`, { params });
  }

  // 3. Crear
  crearProtocolo(protocolo: any): Observable<any> {
    return this.http.post(this.apiUrl, protocolo);
  }

  // 4. Actualizar
  actualizarProtocolo(id: number, protocolo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, protocolo);
  }

  // 5. Eliminar
  eliminarProtocolo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}