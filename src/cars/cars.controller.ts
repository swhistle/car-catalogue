import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

interface ICar {
    id: string,
    name: string
}

const cars: ICar[] = [];


@Controller('cars')
export class CarsController {
    @Get()
    getCars(): string {
        return JSON.parse(JSON.stringify(cars));
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        let carById = `Not found car #${id}`;

        cars.forEach((item) => {
            if (item.id == id) {
                carById = JSON.parse(JSON.stringify(item));
            }
        })

        return carById;
    }

    @Post()
    addCar(@Body() car: ICar) {
        cars.push(car)
        return car;
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() car: ICar) {
        let carUpdated = `Not found car #${id}`;

        cars.forEach((item, index) => {
            if (item.id == id) {
                const updatedCar = {
                    ...item,
                    ...car
                };

                cars.splice(index, 1, updatedCar);

                carUpdated = JSON.parse(JSON.stringify(updatedCar));
            }
        })

        return carUpdated;
    }

    @Delete(':id')
    removeCar(@Param('id') id: string) {
        let carRemoved = `Not found car #${id}`;

        cars.forEach((item, index) => {
            if (item.id == id) {
                cars.splice(index, 1);
                carRemoved = JSON.parse(JSON.stringify(item));
            }
        })

        return carRemoved;
    }
}
