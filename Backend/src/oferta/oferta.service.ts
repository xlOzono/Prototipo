import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { Oferta } from './entities/Oferta';

@Injectable()
export class OfertaService {
  constructor(
    @InjectRepository(Oferta)
    private readonly repo: Repository<Oferta>,
  ) {}
  create(createOfertaDto: CreateOfertaDto) {
    return 'This action adds a new oferta';
  }

  getListado() {
    return this.repo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} oferta`;
  }

  update(id: number, updateOfertaDto: UpdateOfertaDto) {
    return `This action updates a #${id} oferta`;
  }

  remove(id: number) {
    return `This action removes a #${id} oferta`;
  }
}
