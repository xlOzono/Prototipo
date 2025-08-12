import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Oferta } from '../../oferta/entities/Oferta';
import { Alumnoegresado } from './Alumnoegresado';

@Index('rut', ['rut'], {})
@Entity('postulacion', { schema: 'sistemas' })
export class Postulacion {
  @Column('int', { primary: true, name: 'idPostulacion' })
  idPostulacion: number;

  @Column('varchar', { name: 'estado', length: 100 })
  estado: string;

  @Column('int', { name: 'respuesta' })
  respuesta: number;

  @Column('int', { name: 'rut' })
  rut: number;

  @OneToMany(() => Oferta, (oferta) => oferta.idPostulacion2)
  ofertas: Oferta[];

  @ManyToOne(
    () => Alumnoegresado,
    (alumnoegresado) => alumnoegresado.postulacions,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([{ name: 'rut', referencedColumnName: 'rut' }])
  rut2: Alumnoegresado;
}
