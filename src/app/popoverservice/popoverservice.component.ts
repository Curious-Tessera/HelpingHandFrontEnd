import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-popoverservice',
  templateUrl: './popoverservice.component.html',
  styleUrls: ['./popoverservice.component.scss'],
})
export class PopoverserviceComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  async offerService() {
    const alert = await this.alertController.create({
      header: 'Offer Service',
      inputs: [
          {
            name: 'Type of Service',
            type: 'textarea',
            placeholder: 'Type of service offering'
          },
          {
            name: 'Description',
            type: 'textarea',
            placeholder: 'Description of the type of service offering'
          },
          {
            name: 'Full Name',
            type: 'textarea',
            placeholder: 'Full Name '
          },
          {
            name: 'Contacts',
            type: 'textarea',
            placeholder: 'Contact Detials'
          }
      ],
      buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Confirm cancel');
            }
          }, {
            text: 'offer',
            handler: () => {
              console.log('Confirm Offer');
            }
          }
      ]

      // buttons: ['offer']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  async acceptService() {
    const alert = await this.alertController.create({
      header: 'Services offered',
      subHeader: 'Subtiltle',
      message: 'This is an alter message',
      buttons: ['accept']

    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  ngOnInit() {}

}
