export class ScanData {
  constructor(public text:string,
              public type:string = "Not Defined"){
                if (text.startsWith("http")){
                  this.type = "http"
                } else if (text.startsWith("geo")){
                  this.type = "geo"
                } else if (text.startsWith("BEGIN:VCARD")){
                  this.type = "contact"
                } else if (text.startsWith("MATMSG")){
                  this.type = "email"
                }
              }
}
