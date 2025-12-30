import { DailyForcastComponent } from './components/daily-forcast/daily-forcast.component';
import { ErrorComponent } from './components/error/error.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/current-weather/current-weather.component').then(
        (m) => m.CurrentWeatherComponent
      ),
  },

  {
    path: 'daily',
    loadChildren: () =>
      import('./components/daily-forcast/daily-forcast.component').then(
        (m) => m.DailyForcastComponent
      ),
  },
  {
    path: 'hourly',
    loadChildren: () =>
      import('./components/hourly-forcast/hourly-forcast.component').then(
        (m) => m.HourlyForcastComponent
      ),
  },
  {
    path: 'error',
    loadChildren: () => import('./components/error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
