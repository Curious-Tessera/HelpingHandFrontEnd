import { Component } from '@angular/core';
import { PopcverComponent } from '../popcver/popcver.component';
import { PopoverserviceComponent } from '../popoverservice/popoverservice.component';
import { PopoverController } from '@ionic/angular';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public popoverController: PopoverController , public popoverserviceController: PopoverController ) {}

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopcverComponent,
      componentProps: {

      },
      translucent: true
    });
    return await popover.present();
  }

  async addFormPopover() {
    const popover = await this.popoverController.create({
      component: PopcverComponent,
      componentProps: {

      },
      translucent: true
    });
    return await popover.present();
  }

  async presentservicePopover() {
    const popoverservice = await this.popoverserviceController.create({
      component: PopoverserviceComponent,
      componentProps: {

      },
      translucent: true
    });
    return await popoverservice.present();
  }

}
