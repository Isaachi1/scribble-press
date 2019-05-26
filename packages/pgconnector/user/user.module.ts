import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

const entities = [
  TypeOrmModule.forFeature([UserEntity]),
]

@Module({
  providers: [UserService],
  imports: entities,
  exports: entities
})
export class UserModule {}
