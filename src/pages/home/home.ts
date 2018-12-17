import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
import { HistoryProvider } from '../../providers/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public toastCtrl: ToastController,
              private platform:Platform,
              private _history: HistoryProvider) {
  }

  scan(){
    if (!this.platform.is('cordova')){
       // this._history.addItemToHistory("geo:41.41185880151618,2.2171281293975653");
      // this._history.addItemToHistory("http://www.google.es");
      this._history.addItemToHistory( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      // this._history.addItemToHistory("MATMSG:TO:snak_one@hotmail.com;SUB:Ionic;BODY:QR Test;;");
      return false;
    }

    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data' + JSON.stringify(barcodeData));
     if (barcodeData.cancelled == false && barcodeData.text != null){
       this._history.addItemToHistory(barcodeData.text);
     }
    }).catch(err => {
        this.showError("Error: " + err)
    });
  }

  showError(error:string) {
    const toast = this.toastCtrl.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }

}
