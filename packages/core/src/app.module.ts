import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PgModule } from '@scribble/pg-connector';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // PgModule.forRoot({
    //   host: '127.0.0.1',
    //   username: 'postgres',
    //   password: '123456',
    //   port: 5432,
    //   database: 'cms',
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      host: '127.0.0.1',
      username: 'postgres',
      password: '123456',
      port: 5432,
      database: 'cms',
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
