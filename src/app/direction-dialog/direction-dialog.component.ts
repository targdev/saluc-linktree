import { Component } from '@angular/core';

@Component({
  selector: 'app-direction-dialog',
  templateUrl: './direction-dialog.component.html',
  styleUrls: ['./direction-dialog.component.scss']
})
export class DirectionDialogComponent {
  isBlank: string = "_blank";

  urlAppBaberAppStore: string = "https://apps.apple.com/app/id1079972583";
  appStore: string = "AppStore";
  imgAppStore: string = "../../assets/appstore.png";

  urlAppBaberPlayStore: string = "https://play.google.com/store/apps/details?id=com.startapp.appbarber";
  playStore: string = "PlayStore";
  imgPlayStore: string = "../../assets/playstore.png";
}
