import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/weather/pages/not-found/not-found.component';
import { ErrorComponent } from './features/weather/pages/error/error.component';
import { CurrentWeatherComponent } from './features/weather/components/current-weather/current-weather.component';
import { DailyForcastComponent } from './features/weather/components/daily-forcast/daily-forcast.component';
import { HourlyForcastComponent } from './features/weather/components/hourly-forcast/hourly-forcast.component';

export const routes: Routes = [
  { path: 'weather', component: CurrentWeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  {
    path: 'daily',
    component: DailyForcastComponent,
  },
  {
    path: 'hourly',
    component: HourlyForcastComponent,
  },
  { path: 'error', component: ErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];
