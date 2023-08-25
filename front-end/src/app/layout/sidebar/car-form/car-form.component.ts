import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent {
  public newCarForm: FormGroup = this.fb.group({
    image: [''],
    attributes: [''],
    year: [''],
    category: [''],
    maker: [''],
    model: [''],
    color: [''],
    power: [''],
    petroleum: [''],
    mileage: [''],
    gear: [''],
    newCar: [''],
    price: [''],
    additional: [''],
    seller: [''],
    engineVolume: [''],
    transmission: [''],
  })
  constructor(private fb: FormBuilder, private carService: CarService){}
  addCar() {
    const formData = new FormData();
    const formControls = this.newCarForm.controls;

    for (const controlName in formControls) {
      if (formControls[controlName] instanceof FormControl) {
        formData.append(controlName, formControls[controlName]?.value);
      }
    }
    const imageControl = this.newCarForm.get('image');
    if (imageControl && imageControl.value) {
      formData.append('image', imageControl.value);
    }

    this.carService.addCar(formData).subscribe(
      (res) => {
        alert(res);
        this.carService.getCars(); // You might want to update your car list after adding
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
