// src/oferta/oferta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oferta } from './entities/Oferta';
import { Postulacion } from '../database/entities/Postulacion';
import { OfertaService } from './oferta.service';
import { OfertaController } from './API-oferta';

@Module({
  imports: [TypeOrmModule.forFeature([Oferta, Postulacion])],
  controllers: [OfertaController],
  providers: [OfertaService],
})
export class OfertaModule {}
