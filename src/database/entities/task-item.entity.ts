import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_OS } from 'src/shared/enum/os.enum';
import { ENUM_STATUS } from 'src/shared/enum/status.enum';
import { TaskGroupEntity } from './task-group.entity';
import { ENUM_PRIORITY } from 'src/shared/enum/priority.enum';

@Entity()
export class TaskItemEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'title',
  })
  title: string;

  //tasks_name
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'tasks_name',
  })
  taskName: string;

  //description
  @Column({
    type: ENUMTypeColumnEntity.TEXT,
    nullable: true,
    name: 'description',
  })
  description: string;

  //os
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
    name: 'os',
  })
  os: ENUM_OS;

  // status
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 50,
    nullable: false,
    name: 'status',
  })
  status: ENUM_STATUS;

  //start date
  @Column({
    type: ENUMTypeColumnEntity.TYPE_DATE,
    nullable: true,
    name: 'start_date',
  })
  startDate: Date;

  //end date
  @Column({
    type: ENUMTypeColumnEntity.TYPE_DATE,
    nullable: true,
    name: 'end_date',
  })
  endDate: Date;

  //Priority
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: true,
    name: 'priority',
  })
  priority: ENUM_PRIORITY;

  @ManyToOne(() => TaskGroupEntity, (taskGroup) => taskGroup.taskItems)
  @JoinColumn({ name: 'task_group_id' })
  taskGroup: TaskGroupEntity;
  @Column({ name: 'task_group_id' })
  taskGroupId: number;
}
