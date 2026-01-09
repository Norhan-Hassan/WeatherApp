import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './features/weather/components/search/search.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './features/weather/components/current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchComponent, CommonModule, CurrentWeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showErrorPage = false;

  currentWeather: any;
  protected readonly title = signal('WeatherApp');

  constructor(private router: Router) {
    this.showErrorPage = this.router.url.includes('error');

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showErrorPage = event.urlAfterRedirects.includes('error');
      });
  }
}
