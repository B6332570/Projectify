import { ExtendedEntity } from '../common/extended-entity';
import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';

import { MediaObjectEntity } from './media-object.entity';

@Entity()
export class GalleryPostEntity extends ExtendedEntity {
  @ManyToOne(() => MediaObjectEntity, { nullable: false })
  @JoinColumn({ name: 'image_id' })
  image: MediaObjectEntity;

  @Column({ name: 'image_id', nullable: false })
  imageId: number;
}
