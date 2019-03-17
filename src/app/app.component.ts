import { Component } from '@angular/core';
import { CitiesModule } from './cities/cities.module';
import { CitiesComponent} from './cities/cities.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';
}
