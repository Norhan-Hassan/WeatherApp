import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchComponent } from "./components/search/search.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WeatherApp');
}
