import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from 'src/app/services/place.model';
import { PlacesService } from 'src/app/services/places.service';
import { CreateBookingComponent } from 'src/app/components/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modaltrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeID')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeID'));
    })
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover'); // Displays backward navigation on screen instead of forward
    this.modaltrl
      .create({ component: CreateBookingComponent, componentProps: { selectedPlace: this.place } })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
  }

}
