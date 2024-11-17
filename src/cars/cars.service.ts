import { Injectable } from '@nestjs/common';

export interface ICar {
    id: string,
    name: string
}

@Injectable()
export class CarsService {
    private cars: ICar[] = [];
    
    findAll(): ICar[] {
        return this.cars;
    }

    findOne(id: string) {
        return this.cars.find((item) => item.id === id);
    }


    create(car: ICar) {
        this.cars.push(car)

        return car;
    }

    update(id: string, car: ICar) {
        const carUpdatedIndex = this.cars.findIndex((item) => item.id === id);

        if (carUpdatedIndex >= 0) {
            const updatedCar = {
                ...this.cars[carUpdatedIndex],
                ...car
            };

            this.cars.splice(carUpdatedIndex, 1, updatedCar);

            return updatedCar;
        }
    }

    remove(id: string) {
        const carRemovedIndex = this.cars.findIndex((item) => item.id === id);

        if (carRemovedIndex >= 0) {
            this.cars.splice(carRemovedIndex, 1);

            return id;
        }
    }

}
