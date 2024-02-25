import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ProjectEntity } from './projects.entity';
import { TaskItemEntity } from './task-item.entity';

@Entity()
export class TaskGroupEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'task_group_name',
  })
  taskGroupName: string;

  @OneToMany(() => TaskItemEntity, (taskItem) => taskItem.taskGroup)
  taskItems: TaskItemEntity[];

  @ManyToOne(() => ProjectEntity, (project) => project.tasks)
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
  @Column({ name: 'project_id' })
  projectId: number;
}
