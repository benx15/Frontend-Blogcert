import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private apiUrl = 'http://localhost:3000/api/noticias/mostrarTodas';

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
