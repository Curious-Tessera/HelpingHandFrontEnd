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
      header: 'Add Donation',
      inputs: [
        {
          name: 'Type of Donation',
          type: 'textarea',
          placeholder: 'Medical supplier'
        },
        {
          name: 'Quantity',
          type: 'textarea',
          placeholder: '30'
        },
        {
          name: 'Name of the product',
          type: 'textarea',
          placeholder: 'Face mask'
        },
        {
          name: 'Contact details',
          type: 'textarea',
          placeholder: 'example@helpinghand.org'
        },
        {
          name: 'Description',
          type: 'textarea',
          placeholder: 'Cotton cloth mask for covering the face'
        }
    ],
    
    buttons: ['add']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  async viewDonations() {
    const alert = await this.alertController.create({
      header: 'View by type',
      buttons: ['view']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

 ngOnInit() {}

}
