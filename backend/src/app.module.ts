import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaderModule } from './api/frontend/header/header.module';
import { BanerModule } from './api/frontend/baner/baner.module';
import { SubscribesModule } from './api/frontend/subscribes/subscribes.module';
import { CatalogModule } from './api/catalog/catalog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/frontend', {
      connectionName: 'frontend'
    }),
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/catalog', {
      connectionName: 'catalog'
    }),
    MongooseModule.forRoot('mongodb://bp-mongo-db:27017/users', {
      connectionName: 'users'
    }),
    HeaderModule,
    BanerModule,
    SubscribesModule,
    CatalogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
