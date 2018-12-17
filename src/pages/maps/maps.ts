import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})

export class MapsPage {

  lat:number;
  lng:number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {
    let coords = this.navParams.get("data").split(",");

    this.lat = Number(coords[0].replace("geo:",""));
    this.lng = Number(coords[1]);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
