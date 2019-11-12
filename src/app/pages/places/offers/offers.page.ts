import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/services/place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private route: ActivatedRoute, private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.getPlaces();
  }

  onEdit(offerID: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerID]);
    console.log('Edit' + offerID);
  }

  onDelete(offerID: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.offers.filter(m => m.id === offerID);
    console.log('Deleted' + offerID);
  }


}
