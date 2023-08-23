import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turbo-az';
  baseUrl: string = "http://localhost:5038/api/cars/"
  public cars: any[] = []
  public newCarForm: FormGroup = new FormGroup({
    attributes: new FormControl(''),
    year: new FormControl(''),
    category: new FormControl(''),
    maker: new FormControl(''),
    model: new FormControl(''),
    color: new FormControl(''),
    power: new FormControl(''),
    petroleum: new FormControl(''),
    mileage: new FormControl(''),
    gear: new FormControl(''),
    newCar: new FormControl(''),
    price: new FormControl(''),
    additional: new FormControl(''),
    seller: new FormControl(''),
    engineVolume: new FormControl(''),
    transmission: new FormControl(''),
  })
  constructor(private http: HttpClient, private fb: FormBuilder){
    this.getCars();
  }
  getCars(){
    this.http.get(this.baseUrl + 'getCars')
    .subscribe((res: any) => this.cars = res)
  }
  onSubmit(){
    let formData = new FormData();
    formData.append('newCar', this.newCarForm.value)
    this.http.post(this.baseUrl + 'addCar', formData)
    .subscribe(res => {
      alert(res);
      this.getCars()
    });
    console.log(this.newCarForm.value);

  }
}
