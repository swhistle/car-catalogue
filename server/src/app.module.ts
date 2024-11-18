import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsModule } from './cars/cars.module';
import { Car} from './cars/cars.entity' 

@Module({
  imports: [CarsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'cars',
    entities: [Car],
    autoLoadEntities: true,
    synchronize: true,
  }),]
})
export class AppModule {}
