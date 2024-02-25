import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { UserEntity } from './users.entity';
import { TaskGroupEntity } from './task-group.entity';

@Entity()
export class ProjectEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'projects_name',
  })
  projectsName: string;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  @Column({ name: 'user_id' })
  userId: number;

  @OneToMany(() => TaskGroupEntity, (task) => task.project)
  tasks: TaskGroupEntity[];
}
