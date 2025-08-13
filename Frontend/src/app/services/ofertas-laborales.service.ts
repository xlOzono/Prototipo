// src/app/services/ofertas-laborales.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Oferta } from '../models/oferta';
import { SetRespuesta } from '../models/setRespuesta';

@Injectable({ providedIn: 'root' })
export class OfertasLaboralesService {
  private readonly base = `${environment.apiUrl}/oferta`;

  constructor(private http: HttpClient) {}

  getListado(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(`${this.base}/Listado`).pipe(
      map((list) =>
        list.map((o) => ({
          ...o,
          duracion: new Date(o.duracion as unknown as string),
        }))
      )
    );
  }

  setRespuestas(payload: SetRespuesta): Observable<any> {
    return this.http.patch<any>(`${this.base}/setRespuestas`, payload);
  }

}
