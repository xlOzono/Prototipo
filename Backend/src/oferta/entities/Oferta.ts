import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Postulacion } from '../../database/entities/Postulacion';

@Entity('oferta', { schema: 'sistemas' })
export class Oferta {
  @PrimaryColumn('int', { name: 'idOferta' })
  idOferta: number;

  @Column('varchar', { name: 'empresa', length: 100 }) 
  empresa: string;

  @Column('varchar', { name: 'direccion', length: 100 }) 
  direccion: string;

  @Column('varchar', { name: 'cargo', length: 100 }) 
  cargo: string;

  @Column('varchar', { name: 'requisitos', length: 100 }) 
  requisitos: string;

  @Column('int', { name: 'duracion' }) 
  duracion: number;

  @Column('int', { name: 'contacto' }) 
  contacto: number;

  @Column('varchar', { name: 'modalidadTrabajo', length: 100 })
  modalidadTrabajo: string;

  @OneToMany(() => Postulacion, (p) => p.oferta)
  postulaciones: Postulacion[];
}
