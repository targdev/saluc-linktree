import { Component } from '@angular/core';

@Component({
  selector: 'app-direction-dialog',
  templateUrl: './direction-dialog.component.html',
  styleUrls: ['./direction-dialog.component.scss'],
})
export class DirectionDialogComponent {
  isBlank: string = '_blank';

  urlAppBaberAppStore: string =
    'https://apps.apple.com/us/app/appbarber-pro-profissionais/id1602535418?ign-itscg=30200&ign-itsct=apps_box_badge';
  appStore: string = 'AppStore';
  imgAppStore: string = '../../assets/appstore.png';

  urlAppBaberPlayStore: string =
    'https://play.google.com/store/apps/details?id=com.startapp.appbarber';
  playStore: string = 'PlayStore';
  imgPlayStore: string = '../../assets/playstore.png';
}
