import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../../core/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  city: string = '';
  weather: any;
  loading = false;
  error = '';
  @Output() weatherFound = new EventEmitter<any>();

  constructor(private _searchService: SearchService, private router: Router) {}

  // search() {
  //   if (!this.city.trim()) return;

  //   this.loading = true;
  //   this.error = '';

  //   this._searchService.searchCity(this.city).subscribe({
  //     next: (data) => {
  //       this.weather = data;
  //       this.loading = false;
  //       this.weatherFound.emit(data);
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       this.loading = false;

  //       if (err.type === 'NOT_FOUND') {
  //         this.router.navigate(['/not-found']);
  //       } else if (err.type === 'API_ERROR') {
  //         this.router.navigate(['/error']);
  //       }
  //     },
  //   });
  // }
  search() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.error = '';

    this.router.navigate(['/weather'], { queryParams: { city: this.city } });

    this.loading = false;
  }
}
