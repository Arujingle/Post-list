import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { CityPrefixPipe } from './city-prefix.pipe';

@NgModule({
  declarations: [CitiesComponent, CityPrefixPipe],
  imports: [
    CommonModule,
  ],
  exports: [CitiesComponent]
})
export class CitiesModule { }
