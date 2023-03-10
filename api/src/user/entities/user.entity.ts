import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Comment } from '../../comment/entities/comment.entity';
import { Post } from '../../post/entities/post.entity';
import { Timestamp } from '../../utils/timestamp.util';

@Entity()
export class User extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
