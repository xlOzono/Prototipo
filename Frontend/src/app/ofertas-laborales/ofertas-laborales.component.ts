import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta';
import { OfertasLaboralesService } from '../services/ofertas-laborales.service';
import { SetRespuesta } from '../models/setRespuesta';

@Component({
  selector: 'app-ofertas-laborales',
  templateUrl: './ofertas-laborales.component.html',
  styleUrls: ['./ofertas-laborales.component.css'],
})
export class OfertasLaboralesComponent implements OnInit {
  ListaOfertas: Oferta[] = [];
  form = { rut: null as number | null, correo: '', telefono: '', carrera: '' };
  selectedOferta: Oferta | null = null;
  archivoBase64: string = '';
  errorMessage: string | null = null;

  constructor(private ofertasService: OfertasLaboralesService) {}

  ngOnInit(): void {
    this.ofertasService.getListado().subscribe((data) => {
      this.ListaOfertas = data;
    });
  }

  trackById(_: number, item: Oferta) {
    return item.id_oferta;
  }

  open(oferta: Oferta) {
    this.selectedOferta = oferta;
  }

  onFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.archivoBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  setRespuesta() {
    if (!this.selectedOferta) return;

    const tooBig =
      this.archivoBase64 && this.archivoBase64.length > 8 * 1024 * 1024;
    const curriculum = tooBig ? '' : this.archivoBase64;

    const payload: SetRespuesta = {
      id_oferta:
        (this.selectedOferta as any).id_oferta ??
        (this.selectedOferta as any).idOferta,
      nombre: this.selectedOferta.empresa,
      rut: this.form.rut!,
      correo: this.form.correo,
      telefono: Number(this.form.telefono),
      carrera: this.form.carrera,
      curriculum,
      perfil_egresado: '',

    };

    this.ofertasService.setRespuestas(payload).subscribe({
      next: (res) => {
        this.errorMessage = null; 
        console.log('Respuesta enviada:', res);
        (document.getElementById('ofertaModal') as any)?.click();
      },
      error: (err) => {
        this.errorMessage = this.getBackendMessage(err);
        console.error('Error al enviar:', err, payload);
      },
    });
  }

  private getBackendMessage(err: any): string {
    const m =
      err?.error?.message ??
      err?.message ??
      err?.statusText ??
      'Error desconocido';
    return Array.isArray(m) ? m.join(' | ') : String(m);
  }
}
