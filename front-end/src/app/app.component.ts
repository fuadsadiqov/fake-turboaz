import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turbo-az';
  baseUrl: string = "http://localhost:5038/"
  public cars: any[] = []

  constructor(private http: HttpClient){
    this.getCars();
  }
  getCars(){
    this.http.get(this.baseUrl + 'api/cars/getCars')
    .subscribe((res: any) => this.cars = res)
  }
}
