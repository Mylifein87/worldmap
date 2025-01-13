import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';




@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryInfo: any = null;
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  
  handleClick(event: MouseEvent): void {
    const target = (event.target as HTMLElement).id;

    if (target){

      const allPaths = document.querySelectorAll('path');
      allPaths.forEach((path) => path.classList.remove('active'));

      const clickedPath = document.getElementById(target);
      if (clickedPath) {
        clickedPath.classList.add('active');
      }

      this.loading = true;

      this.apiService.getCountryData(target).subscribe((data: any) => {
        console.log("API response:", data);


        if (data && data[1] && data[1].length > 0) {
        const country = data[1][0];

        console.log("Country data:", country);

        this.countryInfo = {
          name: country.name || 'N/A',
          capital: country.capitalCity || 'N/A',
          region: country.region?.value || 'N/A',
          incomeLevel: country.incomeLevel?.value || 'N/A',
          latitude: country.latitude || 'N/A',
          longitude: country.longitude || 'N/A',
          population: country.population || 'N/A'
        };
      }
    
      
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching country data:', error);
        this.loading = false; 
        }
      );
    }
  }
}
    
  




    