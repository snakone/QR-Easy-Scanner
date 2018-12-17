import { Component } from '@angular/core';

import { NavController, NavParams,
         Platform, ToastController, ViewController } from 'ionic-angular';

import { ScanData } from '../../models/scan-data.model';

import { Contacts, Contact,
         ContactField,
         ContactName } from '@ionic-native/contacts';

import vCard from 'vcard-parser';

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})

export class ConfirmPage {

  scan: ScanData = <ScanData>{};
  contactName: string;
  contactPhone: string;
  contactEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private contacts: Contacts, private platform: Platform,
              private toastCtrl: ToastController, public viewCtrl: ViewController) {
    this.scan.text = navParams.get("data");

    let fields:any = vCard.parse(this.scan.text);

    this.contactName = fields.fn[0].value;
    this.contactPhone = fields.tel[1].value;
    this.contactEmail = fields.email[0].value;
  }

  ionViewDidLoad() {

  }

    createContact(){

    let contact: Contact = this.contacts.create();

    if (!this.platform.is('cordova')){
      console.warn("Can't create Contact on PC");
      return false;
    }

    contact.name = new ContactName(null, null, this.contactName);
    contact.phoneNumbers = [new ContactField('mobile', this.contactPhone)];
    contact.emails = [new ContactField('email', this.contactEmail)];

    contact.save().then(
      () => {
        this.viewCtrl.dismiss();
        this.createToast("Contact " + this.contactName + " created");
      },
      (error: any) => this.createToast("Error: " + error)
    );
  }

  private createToast(text:string){
    this.toastCtrl.create({
      message: text,
      duration: 3000
    }).present()
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
