import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Oferta } from '../../oferta/entities/Oferta';
import { Alumnoegresado } from './Alumnoegresado';

@Index('rut', ['rut'], {})
@Index('idOferta', ['idOferta'], {})
@Entity('postulacion', { schema: 'sistemas' })

export class Postulacion {
  @PrimaryColumn('int', { name: 'idPostulacion' })
  idPostulacion: number;

  @Column('varchar', { name: 'estado', length: 100 }) 
  estado: string;

  @Column('int', { name: 'respuesta' }) 
  respuesta: number;

  @Column('int', { name: 'rut' })
  rut: number;

  @Column('int', { name: 'idOferta' })
  idOferta: number;

  @ManyToOne(() => Alumnoegresado, (a) => a.postulaciones, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'rut', referencedColumnName: 'rut' }])
  alumno: Alumnoegresado;

  @ManyToOne(() => Oferta, (o) => o.postulaciones, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  
  @JoinColumn([{ name: 'idOferta', referencedColumnName: 'idOferta' }])
  oferta: Oferta;
}
