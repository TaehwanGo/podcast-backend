import { Episode } from './episode.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsString, Min, Max, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, OneToMany, ManyToOne, RelationId } from 'typeorm';
import { CoreEntity } from './core.entity';
import { Review } from './review.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Podcast extends CoreEntity {
  @Column()
  @Field(type => String)
  @IsString()
  title: string;

  @Column({
    default:
      'https://www.iclr.co.uk/wp-content/uploads/media//2019/08/Podcast-825x420.jpg',
  })
  @Field(type => String, {
    defaultValue:
      'https://www.iclr.co.uk/wp-content/uploads/media//2019/08/Podcast-825x420.jpg',
  })
  @IsString()
  @IsOptional()
  thumbnailImg?: string;

  @Column()
  @Field(type => String)
  @IsString()
  description: string;

  @Column()
  @Field(type => String)
  @IsString()
  category: string;

  @Column({ default: 0 })
  @Field(type => Number)
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @Field(() => User)
  @ManyToOne(() => User, user => user.podcasts, {
    onDelete: 'CASCADE',
  })
  creator: User;

  @RelationId((podcast: Podcast) => podcast.creator)
  creatorId: number;

  @OneToMany(() => Episode, episode => episode.podcast, {
    nullable: true,
    eager: true,
  })
  @Field(type => [Episode], { nullable: true })
  episodes?: Episode[];

  @OneToMany(() => Review, review => review.podcast)
  @Field(type => [Review])
  reviews: Review[];
}
