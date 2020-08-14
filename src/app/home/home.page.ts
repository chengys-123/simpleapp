import { Component } from '@angular/core';
import { SimpleserviceService } from 'src/app/service/simpleservice.service';
import { ModalController } from '@ionic/angular';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private userList: any;

  constructor(
    private simpleService: SimpleserviceService,
    private modalCtrl: ModalController
    ) { }

  ionViewDidEnter() {
    this.simpleService.getData().subscribe((res: any) => {
      this.userList = res.data;
    })
  }

  async presentModal(id: any): Promise<void> {
    this.simpleService.getDetailsData(id).subscribe(async (res: any) => {
      const userListModal = await this.modalCtrl.create({
        component: UserComponent,
        componentProps: { 
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          email: res.data.email,
          avatar: res.data.avatar
         }
      });
      return userListModal.present();
    })
  }
}
