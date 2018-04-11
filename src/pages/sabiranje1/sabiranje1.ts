import {Component} from "@angular/core";

@Component({
  templateUrl: './sabiranje1.html'
})
export class Sabiranje1 {
  sabirak1 = 0;
  sabirak2 = 0;

  ionViewLoaded() {
    this.restart();
  }

  restart() {
    this.sabirak1 = Math.floor(Math.random() * 9) + 1;
    this.sabirak2 = Math.floor(Math.random() * 9) + 1;
  }
}
