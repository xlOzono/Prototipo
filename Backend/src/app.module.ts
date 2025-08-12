// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [__dirname + '/database/entities/*.{ts,js}'],
      synchronize: false,
      logging: true,
    }),
    OfertaModule,
  ],
})
export class AppModule {}
