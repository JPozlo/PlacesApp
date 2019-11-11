import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/services/place.model';
import { ActivatedRoute } from '@angular/router';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeID'));
    });
  }



}
