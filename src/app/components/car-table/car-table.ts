import { Component } from '@angular/core';
import { CarModel } from '../../models/CarModel';

@Component({
  selector: 'app-car-table',
  standalone: false,
  templateUrl: './car-table.html',
  styleUrl: './car-table.css',
})
export class CarTable {
  car: CarModel = {} as CarModel;
  cars: CarModel[] = []

  countId: number = 1;
  isUpdate: boolean = false;

  save() {
    if (!this.isUpdate) {
      this.car.id = this.countId;
      this.countId++;
      this.cars.push(this.car);
    }

    this.car = {} as CarModel;
    this.isUpdate = false;
  }

  update(car: CarModel) {
    this.car = car;
    this.isUpdate = true;
  }
}
