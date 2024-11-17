import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService, ICar } from './cars.service';


@Controller()
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    getCars(): string {
        return JSON.parse(JSON.stringify(this.carsService.findAll()));
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        let carById = this.carsService.findOne(id);

        if (carById) {
            return JSON.parse(JSON.stringify(carById));
        }

        return `Not found car #${id}`;
    }

    @Post()
    addCar(@Body() car: ICar) {
        return this.carsService.create(car);
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() car: ICar) {
        let carUpdated = this.carsService.update(id, car);

        if (carUpdated) {
            return JSON.parse(JSON.stringify(carUpdated));
        }

        return `Not found car #${id}`;
    }

    @Delete(':id')
    removeCar(@Param('id') id: string) {
        let carRemoved = this.carsService.remove(id);

        if (carRemoved) {
            return JSON.parse(JSON.stringify(carRemoved));
        }

        return `Not found car #${id}`;
    }
}
