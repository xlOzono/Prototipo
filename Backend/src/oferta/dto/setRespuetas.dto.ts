// src/ofertas/dto/set-respuesta.dto.ts
import { IsEmail, IsInt, IsString, Length } from 'class-validator';

export class SetRespuestaDto {
  @IsInt()
  idOferta: number;

  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsInt()
  RUT: number;

  @IsEmail()
  @Length(1, 100)
  correo: string;

  @IsInt()
  telefono: number;

  @IsString()
  @Length(1, 100)
  carrera: string;

  @IsString()
  curriculum: string;

  @IsString()
  perfil_egresado: string;
}
