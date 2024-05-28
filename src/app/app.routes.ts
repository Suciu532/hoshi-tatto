import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },  // Route for Home component
    { path: '**', redirectTo: 'home', pathMatch: 'full' }  // Wildcard route to redirect any unknown paths to Home
  ];
