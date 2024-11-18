import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller()
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    getCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id') id: number) {
        let car = this.carsService.findOne(id);

        if (car) {
            return car;
        }

        return `Not found car #${id}`;
    }

    @Post()
    addCar(@Body() car: any) {
        return this.carsService.create(car);
    }

    @Patch(':id')
    updateCar(@Param('id') id: number, @Body() car: any) {
        let carUpdate = this.carsService.update(id, car);

        if (carUpdate) {
            return carUpdate;
        }

        return `Not found car #${id}`;
    }

    @Delete(':id')
    removeCar(@Param('id') id: number) {
        let carRemove = this.carsService.remove(id);

        if (carRemove) {
            return carRemove;
        }

        return `Not found car #${id}`;
    }
}
