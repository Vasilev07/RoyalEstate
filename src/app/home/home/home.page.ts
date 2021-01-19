import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IEstate } from 'src/app/common/interfaces/estate.interface';
import { IEstates } from 'src/app/common/interfaces/estates.iterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private estates: IEstates[] = [];

  constructor(private readonly storage: Storage,
              private readonly router: Router,
              private readonly toastController: ToastController) { }

  public async ngOnInit(): Promise<void> {
    try {
      this.estates = [...await this.storage.get('savedEstate')];
    } catch (error) {
      this.createToastForError('Error while fetching your saved estates.');
    }
  }

  public onEstateClick(id: string) {
    this.router.navigate(['/locations']);
  }

  public onEstateViewClick(estate: IEstate) {
    this.router.navigate([`/estate-details/${estate.id}/overview`]);
  }

  private async createToastForError(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
