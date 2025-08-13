import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Postulacion } from './Postulacion';

@Entity('alumnoegresado', { schema: 'sistemas' })
export class Alumnoegresado {
  @PrimaryColumn('int', { name: 'rut' })
  rut: number;

  @Column('varchar', { name: 'nombre', length: 100 }) nombre: string;
  @Column('varchar', { name: 'correo', length: 100 }) correo: string;
  @Column('int', { name: 'telefono' }) telefono: number;
  @Column('varchar', { name: 'carrera', length: 100 }) carrera: string;
  @Column('date', { name: 'anioIngreso' }) anioIngreso: string;
  @Column('date', { name: 'anioEgreso' }) anioEgreso: string;
  @Column('varchar', { name: 'modalidiadTitulacion', length: 100 }) modalidiadTitulacion: string;
  @Column('varchar', { name: 'practicaProfesional', length: 100 }) practicaProfesional: string;
  @Column('varchar', { name: 'contrasena', length: 50 }) contrasena: string;

  // 0..N
  @OneToMany(() => Postulacion, (p) => p.alumno)
  postulaciones: Postulacion[];
}