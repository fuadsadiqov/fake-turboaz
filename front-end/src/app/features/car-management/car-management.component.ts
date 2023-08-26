import { Component } from '@angular/core';
import { CarInterface } from 'src/app/core/car.interface';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss']
})
export class CarManagementComponent {
  public cars: CarInterface[] = []

  constructor(private carService: CarService){
    this.getCars()
  }

  getCars(){
    this.carService.getCars()
    .subscribe((response: CarInterface[]) => {
      this.cars = response
    })
  }
  
  deleteCar(id: string){
    this.carService.deleteCar(id)
    .subscribe(_ => this.carService.getCars())
  }

  setBookmark(car: CarInterface){
    this.carService.setBookmark(car) 
  }
}