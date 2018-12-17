import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { MapsPage } from '../../pages/index.pages';

import { ConfirmPage } from '../../pages/confirm/confirm';

@Injectable()

export class HistoryProvider {

  private history:ScanData[] = []

  constructor(private iab:InAppBrowser,
              private modal:ModalController) {}

  getHistory(){
    return this.history;
  }

  addItemToHistory(text:string){
    let data = new ScanData(text);
    this.history.unshift(data);
    this.openScan(0)
  }

  openScan(i:number){
    let scanData:ScanData = this.history[i];

    switch (scanData.type){
      case "http":
      this.iab.create(scanData.text, "_system");
      break;

      case "geo":
      this.modal.create(MapsPage, {data: scanData.text}).present();
      break;

      case "contact":
      // this.createContact(scanData.text);
      this.modal.create(ConfirmPage, {data:scanData.text}).present();
      break;

      case "email":
      this.sendEmail(scanData.text);
      break;

      default:
      console.log("Not Supported");
    }
  }

  private sendEmail(text:string){
    let mail = text.replace("MATMSG:TO:", "mailto:");
    mail = mail.replace(";SUB:", "?subject=");
    mail = mail.replace(";BODY:","&body=");
    mail = mail.replace(";;", "");
    mail = mail.replace(/ /g, "%20");

    this.iab.create(mail, "_system");
  }

}
