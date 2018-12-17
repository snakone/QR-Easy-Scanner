import { Component } from '@angular/core';
import { HistoryProvider } from '../../providers/history/history';
import { ScanData } from '../../models/scan-data.model';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})

export class HistorialPage {

  history:ScanData[] = []

  constructor(private _history:HistoryProvider) {
  }

  ionViewDidLoad() {
   this.history = this._history.getHistory();
  }

  openScan(index:number){
    this._history.openScan(index);
  }

  deleteScan(index:number){
    this.history.splice(index,1);
  }

}
