import { Component, input, output } from '@angular/core';
import { CarModel } from '../../models/CarModel';

@Component({
  selector: 'app-car-forms',
  standalone: false,
  templateUrl: './car-forms.html',
  styleUrl: './car-forms.css',
})
export class CarForms {
  carForm: CarModel = {} as CarModel;
  car = input<CarModel>({} as CarModel);
  saveEmitter = output<CarModel>();

  save() {
    this.saveEmitter.emit(this.carForm);
    this.carForm = {} as CarModel;
  }
}
