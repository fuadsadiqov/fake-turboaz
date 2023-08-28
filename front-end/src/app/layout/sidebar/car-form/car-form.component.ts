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
  constructor(private fb: FormBuilder, private carService: CarService){}

  public selectedImage: File | null | any = null;
  public newCarForm: FormGroup = this.fb.group({
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

  onImageSelected(event: any){
    const file = (event.target).files[0];
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    this.newCarForm.patchValue({image: file});
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
          this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addCar() {
    const formData = new FormData();
    const formControls = this.newCarForm.controls;

    for (const controlName in formControls) {
      if (formControls[controlName] instanceof FormControl) {
        formData.append(controlName, formControls[controlName]?.value);
      }
    }
    formData.append('image', this.selectedImage)
    // console.log(this.selectedImage);
    
    // if(this.selectedImage){
    //   formData.append('image', this.selectedImage);d
    // }

    this.carService.addCar(formData).subscribe(
      (res) => {
        alert(res);
        this.selectedImage = null;
        this.carService.getCars(); // You might want to update your car list after adding
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
