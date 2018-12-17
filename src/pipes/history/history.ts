import { Pipe, PipeTransform } from '@angular/core';

import vCard from 'vcard-parser';

@Pipe({
  name: 'history',
})

export class HistoryPipe implements PipeTransform {
  transform(value: string, ...args) {
    if (value.startsWith("BEGIN:VCARD")){
      let contact = vCard.parse(value);
      return value = contact.fn[0].value + ": " + contact.tel[1].value;
    }

    if (value.startsWith("MATMSG:TO")){
      value = value.replace("MATMSG:TO:", "");
      let cut = value.indexOf(";")
      return value = value.substring(0,cut);
    }

    return value;
  }
}
