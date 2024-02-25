import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_ROLE } from 'src/shared/enum/user.enum';
import { ProjectEntity } from './projects.entity';
import * as bcrypt from 'bcrypt';
import { MediaObjectEntity } from './media-object.entity';

@Entity()
export class UserEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'username',
  })
  username: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'email',
    unique: true,
  })
  email: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'role',
  })
  role: ENUM_ROLE;

  // One-to-Many relationship with ProjectEntity
  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: ProjectEntity[];

  @ManyToOne(() => MediaObjectEntity, { nullable: true })
  @JoinColumn({ name: 'company_image_id' })
  companyImage: MediaObjectEntity;

  @Column({ name: 'company_image_id', nullable: true })
  companyImageId: number;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    const salt = await bcrypt.genSalt(10);
    if (!this?.password?.startsWith('$2a$')) {
      const encryptPassword = await bcrypt.hash(this.password, salt);
      this.password = encryptPassword;
    }
  }
}
