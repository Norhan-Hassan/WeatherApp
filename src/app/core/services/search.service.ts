import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchCity(city: string) {
    return this.http.get<any>(environment.geoApiUrl, { params: { name: city, count: 1 } }).pipe(
      switchMap((res) => {
        if (!res.results || res.results.length === 0) {
          return throwError(() => ({ type: 'NOT_FOUND' }));
        }

        const { latitude, longitude } = res.results[0];
        return this.http
          .get<any>(environment.weatherApiBaseUrl, {
            params: {
              latitude,
              longitude,
              current_weather: 'true',
            },
          })
          .pipe(
            map((weatherRes) => ({
              city: city,
              weather: weatherRes.current_weather,
            }))
          );
      }),
      catchError((err) => {
        if (err.type) return throwError(() => err);
        return throwError(() => ({ type: 'API_ERROR' }));
      })
    );
  }
}
