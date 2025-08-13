import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { Oferta } from './entities/Oferta';
import { Postulacion } from '../database/entities/Postulacion';
import { SetRespuestaDto } from './dto/setRespuetas.dto';

@Injectable()
export class OfertaService {
  constructor(
    @InjectRepository(Oferta) private readonly ofertas: Repository<Oferta>,
    @InjectRepository(Postulacion)
    private readonly postulaciones: Repository<Postulacion>,
  ) {}
  create(createOfertaDto: CreateOfertaDto) {
    return 'This action adds a new oferta';
  }

  getListado() {
    return this.ofertas.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} oferta`;
  }

  remove(id: number) {
    return `This action removes a #${id} oferta`;
  }

  async setRespuestas(dto: SetRespuestaDto) {
    const postulacion = this.postulaciones.create(dto);
    return this.postulaciones.save(postulacion);
  }
}
