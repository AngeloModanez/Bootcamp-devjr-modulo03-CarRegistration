import { Component, input, output } from '@angular/core';
import { CarModel } from '../../models/CarModel';

@Component({
  selector: 'app-car-forms',
  standalone: false,
  templateUrl: './car-forms.html',
  styleUrl: './car-forms.css',
})
export class CarForms {
  car = input<CarModel>({} as CarModel);
  saveEmitter = output();

  save() {
    this.saveEmitter.emit();
  }
}
