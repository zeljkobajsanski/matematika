import {Component} from "@angular/core";
import {ToastController} from "ionic-angular";

@Component({
  templateUrl: './sabiranje1.html'
})
export class Sabiranje1 {
  sabirak1 = 0;
  sabirak2 = 0;
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
  num6: number;
  num7: number;
  num8: number;

  constructor(private toastCtrl: ToastController) {
    this.restart();
  }

  get isNum1Valid() {
    return this.sabirak1 === +this.num1;
  }
  get isNum2Valid() {
    return 10 - this.sabirak1 === +this.num2;
  }

  get isNum3Valid() {
    return this.sabirak2 === +this.num2 + +this.num3;
  }

  get isNum4Valid() {
    return this.num4 === this.sabirak1;
  }

  get isNum5Valid() {
    return this.num5 === this.num2;
  }

  get isNum6Valid() {
    return this.num6 === this.num3;
  }

  get isNum7Valid() {
    return this.num7 === this.sabirak1 + this.sabirak2 - 10;
  }

  get isNum8Valid() {
    return this.num8 === this.sabirak1 + this.sabirak2;
  }

  ionViewLoaded() {
    this.restart();
  }

  restart() {
    this.sabirak2 = 0;
    this.num1 = this.num2 = this.num3 = this.num4 = this.num5 = this.num6 = this.num7 = this.num8 = null;
    this.sabirak1 = this.getNumber();
    while (this.sabirak1 + this.sabirak2 <= 10) {
      this.sabirak2 = this.getNumber();
    }
  }

  verify() {
    if (this.sabirak1 + this.sabirak2 === +this.num8) {
      var toast = this.toastCtrl.create({message: 'Tacno', duration: 1000});
      setTimeout(() => this.restart(), 1000);
    } else {
      toast = this.toastCtrl.create({message: 'Pokusaj ponovo', duration: 1000});
    }
    toast.present();
  }

  private getNumber() {
    return Math.ceil(Math.random() * 6) + 3;
  }
}
