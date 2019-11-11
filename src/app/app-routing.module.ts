import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'places', loadChildren: './pages/places/places.module#PlacesPageModule' },
  { path: 'bookings', loadChildren: './pages/bookings/bookings.module#BookingsPageModule' },
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthPageModule' },
  { path: 'discover', loadChildren: './pages/places/discover/discover.module#DiscoverPageModule' },
  { path: 'place-detail', loadChildren: './pages/places/discover/place-detail/place-detail.module#PlaceDetailPageModule' },
  { path: 'offers', loadChildren: './pages/places/offers/offers.module#OffersPageModule' },
  { path: 'new-offer', loadChildren: './pages/places/offers/new-offer/new-offer.module#NewOfferPageModule' },
  { path: 'edit-offer', loadChildren: './pages/places/offers/edit-offer/edit-offer.module#EditOfferPageModule' },
  { path: 'offer-bookings', loadChildren: './pages/places/offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
