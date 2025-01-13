
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },  
  { path: 'map', component: MapComponent },
  
];

