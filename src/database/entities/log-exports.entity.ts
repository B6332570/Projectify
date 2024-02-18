import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_ROLE } from 'src/shared/enum/user.enum';

@Entity()
export class Log_exportsEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /*@Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'userId',
  })
  userId: string;*/

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'email',
  })
  email: string;

  ยากสัด



}
