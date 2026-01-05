import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./features/weather/components/current-weather/current-weather.component').then(
        (m) => m.CurrentWeatherComponent
      ),
  },

  {
    path: 'daily',
    loadChildren: () =>
      import('./features/weather/components/daily-forcast/daily-forcast.component').then((m) => m.DailyForcastComponent),
  },
  {
    path: 'hourly',
    loadChildren: () => import('./features/weather/components/hourly-forcast/hourly-forcast.component').then((m) => m.HourlyForcastComponent),
  },
  {
    path: 'error',
    loadChildren: () => import('./features/weather/pages/error/error.component').then((m) => m.ErrorComponent),
  },
  {
    path: '**',
    loadChildren: () => import('./features/weather/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
