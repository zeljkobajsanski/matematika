import {Component, ViewChild} from "@angular/core";
import {ToastController} from "ionic-angular";

@Component({
  templateUrl: './sabiranje.html'
})
export class Sabiranje {
  sabirak1 = 0;
  sabirak2 = 0;
  result = '';
  toast;
  @ViewChild('input') input;

  constructor(private toastController: ToastController) {
    this.restart();
  }

  ionViewLoaded() {
    this.restart();
  }

  restart() {
    this.sabirak1 = Math.floor(Math.random() * 9) + 1;
    this.sabirak2 = Math.floor(Math.random() * 9) + 1;
    this.result = '';
    if (this.input) {
      this.input.setFocus();
    }
  }

  verify() {
    if (this.sabirak1 + this.sabirak2 === +this.result) {
      this.toast = this.toastController.create({message: 'Tacno', duration: 1000});
      setTimeout(() => this.restart(), 1000);
    } else {
      this.toast = this.toastController.create({message: 'Pokusaj ponovo', duration: 1000});
    }
    this.toast.present();
  }
}
