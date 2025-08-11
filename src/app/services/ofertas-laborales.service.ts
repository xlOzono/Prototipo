import { Injectable } from '@angular/core';
import { Oferta } from '../models/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {

  private ofertas: Oferta[] = [
    {
      id_oferta: 1,
      empresa: 'Tech Solutions',
      direccion: 'Av. Siempre Viva 123',
      cargo: 'Desarrollador Frontend',
      requisitos: 'Angular, TypeScript, CSS',
      duracion: new Date('2025-12-31'),
      contacto: 123456789,
      modalidad_trabajo: 'Presencial'
    },
    {
      id_oferta: 2,
      empresa: 'Innovatech',
      direccion: 'Calle Falsa 456',
      cargo: 'Analista de Datos',
      requisitos: 'Python, SQL, Power BI',
      duracion: new Date('2025-11-30'),
      contacto: 987654321,
      modalidad_trabajo: 'Remoto'
    }
  ];

  constructor() {}

  obtenerOfertas(): Oferta[] {
    return this.ofertas;
  }

  obtenerOfertaPorId(id: number): Oferta | undefined {
    return this.ofertas.find(oferta => oferta.id_oferta === id);
  }

}
