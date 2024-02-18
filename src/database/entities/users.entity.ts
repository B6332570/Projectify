import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExtendedEntity } from '../common/extended-entity';
import { ENUMTypeColumnEntity } from '../common/enum/database.enum';
import { ENUM_ROLE } from 'src/shared/enum/user.enum';
import { ProjectsEntity } from './projects.entity';
import { TasksEntity } from './tasks.entity';


@Entity()
export class UsersEntity extends ExtendedEntity {
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
  @OneToMany(() => ProjectsEntity, projects => projects.owner)
  @OneToMany(() => ProjectsEntity, projects => projects.createBy)

// One-to-Many relationship with TasksEntity
  @OneToMany(() => TasksEntity, tasks => tasks.users)
  @OneToMany(() => TasksEntity, tasks => tasks.owner)
  @OneToMany(() => TasksEntity, tasks => tasks.developer)
 
  projects: ProjectsEntity[];

  



}
