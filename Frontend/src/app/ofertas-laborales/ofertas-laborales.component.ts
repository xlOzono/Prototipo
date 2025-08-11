import { Component } from '@angular/core';
import { Oferta } from '../models/oferta';
import { OfertasLaboralesService } from '../services/ofertas-laborales.service';

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.css']
})
export class OfertasLaboralesComponent {
onFile($event: Event) {
throw new Error('Method not implemented.');
}
  ofertas: Oferta[] = [];
  form = { rut: null as number | null, correo: '', telefono: '', carrera: '' };
  selectedOferta: Oferta | null = null;



  constructor(ofertasService: OfertasLaboralesService) {
    this.ofertas = ofertasService.obtenerOfertas();
  }

  trackById(_: number, item: Oferta) {
    return item.id_oferta;
  }

  open(oferta: Oferta) {
    this.selectedOferta = oferta;
  }

  enviar() {
  }
}
