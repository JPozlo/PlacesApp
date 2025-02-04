import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'places', loadChildren: './pages/places/places.module#PlacesPageModule', canLoad: [AuthGuard] },
  { path: 'bookings', loadChildren: './pages/bookings/bookings.module#BookingsPageModule', canLoad: [AuthGuard] },
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
