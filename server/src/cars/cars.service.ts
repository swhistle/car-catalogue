import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car } from './cars.entity'

@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car) private carsRepository: Repository<Car>) {}
    
    findAll(): Promise<Car[]> {
        return this.carsRepository.find();
    }

    findOne(id: number): Promise<Car | null> {
        return this.carsRepository.findOneBy({id});
    }


    create(car: any): Promise<Car[]> {
        const carNew = this.carsRepository.create(car)

        return this.carsRepository.save(carNew);
    }

    async update(id: number, car: any) {
        const carUpdate = await this.carsRepository.preload({
            id: +id,
             ...car
            });

        if (!carUpdate) {
            return undefined;
        }

        return this.carsRepository.save(carUpdate);
    }

    async remove(id: number) {
        const carRemove = await this.carsRepository.findOneBy({id})
        return this.carsRepository.remove(carRemove)
    }
}
