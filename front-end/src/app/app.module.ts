import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { CarManagementComponent } from './features/car-management/car-management.component';
import { CarFormComponent } from './layout/sidebar/car-form/car-form.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CarFilterComponent } from './features/car-filter/car-filter.component';
import { HeaderComponent } from './layout/sidebar/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    CarManagementComponent,
    CarFormComponent,
    NotFoundComponent,
    CarFilterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
