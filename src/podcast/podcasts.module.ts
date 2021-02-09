import { Module } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import {
  EpisodeResolver,
  PodcastsResolver,
  ReviewResolver,
} from './podcasts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Podcast } from './entities/podcast.entity';
import { Episode } from './entities/episode.entity';
import { Review } from './entities/review.entity';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Podcast, Episode, Review, CategoryRepository]),
  ],
  providers: [
    PodcastsService,
    PodcastsResolver,
    EpisodeResolver,
    ReviewResolver,
  ],
})
export class PodcastsModule {}
