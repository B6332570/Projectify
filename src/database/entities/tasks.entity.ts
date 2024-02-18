import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_ROLE } from 'src/shared/enum/user.enum';
import { ENUM_OS } from 'src/shared/enum/os.enum';
import { ENUM_STATUS } from 'src/shared/enum/status.enum';
import { TaskListsEntity } from './task-lists.entity';
import { UsersEntity } from './users.entity';

@Entity()
export class TasksEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'title',
  })
  title: string;

//description
  @Column({
    type: ENUMTypeColumnEntity.TEXT,
    nullable: true,
    name: 'description',
  })
  description: string;


  //tasks_name
  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'tasks_name',
  })
  tasksName: string;

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
  priority: string;

  // question: status, priority ต้องสร้างตารางแยกออกไปเพื่อ sort ไหม


  //Tasklists
  @ManyToOne(() => TaskListsEntity)
  @JoinColumn({name: 'task_lists_id'})
  taskList: TaskListsEntity;

  @Column({name: 'task_lists_id'})
  taskListId: number;


  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'users_id' })
  users: UsersEntity;

  @Column({name: 'users_id'})
  usersId: number;



  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'owner_id' })
  owner: UsersEntity;

  @Column({name: 'owner_id'})
  ownerId: number;




  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'developer_id' })
  developer: UsersEntity;

  @Column({name: 'developer_id'})
  developerId: number;




  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'task_name',
  })
  taskName: string;

 


  /*@Column({
    type: ENUMTypeColumnEntity.TYPE_TIMESTAMP_TZ,
    nullable: false,
    name: 'start_date',
  })
  startDate: string;*/

/*@Column({
    type: ENUMTypeColumnEntity.TYPE_TIMESTAMP_TZ,
    nullable: false,
    name: 'end_date',
  })
  endDate: string;*/



  





}
