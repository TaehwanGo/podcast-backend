import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CoreEntity } from './core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Podcast } from './podcast.entity';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Category extends CoreEntity {
  @Field(type => String)
  @Column({ unique: true })
  @IsString()
  name: string;

  @Field(type => String)
  @Column({ unique: true })
  @IsString()
  slug: string;

  @OneToMany(type => Podcast, podcast => podcast.category, {
    eager: true,
    nullable: true,
  })
  @Field(type => [Podcast], { nullable: true })
  podcasts?: Podcast[];
}
