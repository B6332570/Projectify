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
import { ENUM_ROLE } from 'src/shared/enum/user.enum';
import { UsersEntity } from './users.entity';
import { TaskListsEntity } from './task-lists.entity';

@Entity()
export class ProjectsEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'projects_name',
  })
  projectsName: string;

  // Many-to-One relationship with UsersEntity
  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'owner_id' })
  owner: UsersEntity;

  @Column({name: 'owner_id'})
  ownerId: number;


  

    // One-to-Many relationship with TasklistsEntity
    @OneToMany(() => TaskListsEntity, taskLists => taskLists.projects)
    taskLists: ProjectsEntity[]


    




  // Many-to-One relationship with UsersEntity
  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'create_by_id' })
  createBy: UsersEntity;

  @Column({name: 'create_by_id'})
  createById: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'role',
  })
  role: ENUM_ROLE;
}
