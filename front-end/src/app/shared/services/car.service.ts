import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInterface } from 'src/app/core/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl: string = "http://localhost:5038/api/cars/"

  constructor(private http: HttpClient) { }

  getCars(): any{
    return this.http.get(this.baseUrl + 'getCars')
  }

  addCar(formData: FormData): Observable<CarInterface | any>{
    return this.http.post(this.baseUrl + 'addCar', formData)
  }

  deleteCar(id: any){
    return this.http.delete(this.baseUrl + 'deleteCar', id)
  }
}
