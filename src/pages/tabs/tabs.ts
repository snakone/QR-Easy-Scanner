import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistorialPage, HomePage } from '../index.pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home:any = HomePage;
  historial:any = HistorialPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
