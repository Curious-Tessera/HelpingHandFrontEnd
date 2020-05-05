import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-popcver',
  templateUrl: './popcver.component.html',
  styleUrls: ['./popcver.component.scss'],
})
export class PopcverComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  async addDonations() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtiltle',
      message: 'This is an alter message',
      buttons: ['add']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  async viewDonations() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtiltle',
      message: 'This is an alter message',
      buttons: ['view']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

 ngOnInit() {}

}
