import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-current-weather',
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css',
})
export class CurrentWeatherComponent {
  city: string = '';
  weatherData: any = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _searchService: SearchService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const cityParam = params['city'];
      if (cityParam) {
        this.city = cityParam;
        this.fetchWeather(cityParam);
      }
    });
  }

  fetchWeather(city: string) {
    this.loading = true;

    this._searchService.searchCity(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        if (err.type === 'NOT_FOUND') {
          this.router.navigate(['/not-found']);
        } else if (err.type === 'API_ERROR') {
          this.router.navigate(['/error']);
        }
      },
    });
  }
}
