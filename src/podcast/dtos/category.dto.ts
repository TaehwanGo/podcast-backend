import { CoreOutput } from './output.dto';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Podcast } from '../entities/podcast.entity';
import { Category } from '../entities/category.entity';

@InputType()
export class CategoryInput {
  @Field(type => String)
  slug: string;
}

@ObjectType()
export class CategoryOutput extends CoreOutput {
  @Field(type => Category, { nullable: true })
  category?: Category;
}
