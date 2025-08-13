// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumnoegresado } from './database/entities/Alumnoegresado';
import { Postulacion } from './database/entities/Postulacion';
import { Oferta } from './oferta/entities/Oferta';
import { OfertaModule } from './oferta/oferta.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Admin',
      password: '1234',
      database: 'sistemas',
      entities: [ Alumnoegresado, Postulacion, Oferta], // ← importante
      synchronize: true,
      logging: true,
     
    }),
    OfertaModule,
  ],
})
export class AppModule {}