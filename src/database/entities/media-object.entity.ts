import { ExtendedEntity } from '../common/extended-entity';
import { Entity, Column } from 'typeorm';
import {
  DB_TABLE_NAME,
  ENUMTypeColumnEntity,
} from '../common/enum/database.enum';
import { Expose } from 'class-transformer';
import { SERIALIZE_GROUP } from '../common/enum/serialization-group.enum';

@Entity(DB_TABLE_NAME.MEDIAL_OBJECT)
export class MediaObjectEntity extends ExtendedEntity {
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
  })
  filePath: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
  })
  fileName: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 100,
    nullable: true,
  })
  type: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
  })
  directoryName: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
  })
  provider: string;
  @Expose({
    groups: [SERIALIZE_GROUP.GROUP_MEDIA_OBJECT],
  })
  public url() {
    return this.filePath ? `${process.env.BASE_URL}/${this.filePath}` : null;
  }
}
