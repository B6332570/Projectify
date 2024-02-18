import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_ROLE } from 'src/shared/enum/user.enum';
import { ProjectsEntity } from './projects.entity';

@Entity()
export class TaskListsEntity extends ExtendedEntity {
  @PrimaryGeneratedColumn()
  id: number;

// Many-to-One relationship with UsersEntity
  @ManyToOne(() => ProjectsEntity)
  @JoinColumn({ name: 'projects_id' })
  projects: ProjectsEntity;

  @Column({name: 'projects_id'})
  projectsId: number;






  @Column({
    type: ENUMTypeColumnEntity.TYPE_VARCHAR,
    length: 255,
    nullable: false,
    name: 'task_list_name',
  })
  taskListName: string;



  


}
