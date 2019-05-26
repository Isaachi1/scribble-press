import { Module, DynamicModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({})
export class PgModule {
  static forRoot({
    host = '127.0.0.1',
    port = 5432,
    username = 'postgres',
    password = '',
    database = '',
    synchronize = false,
  }): DynamicModule {
    return {
      module: PgModule,
      imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [
            // __dirname + '**/*.entity{.ts,.js}',
            __dirname + '/user/user.entity.ts',
        ],
        synchronize,
      }), UserModule],
    };
  }
}
