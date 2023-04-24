import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaderModule } from './api/frontend/header/header.module';
import { BanerModule } from './api/frontend/baner/baner.module';
import { ItemsModule } from './api/catalog/items/items.module';
import { SubscribesModule } from './api/frontend/subscribes/subscribes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/frontend', {
      connectionName: 'frontend'
    }),
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/items', {
      connectionName: 'items'
    }),
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/users', {
      connectionName: 'users'
    }),
    HeaderModule,
    BanerModule,
    ItemsModule,
    SubscribesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
