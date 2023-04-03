import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DirectionDialogComponent } from '../direction-dialog/direction-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isBlank: string = "_blank";
  constructor(
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(DirectionDialogComponent);
  }

  //titles
  appBarber: string = "Agende pelo AppBarber";
  contatoWhatsApp: string = "Contato pelo WhatsApp";
  contatoAcamedyWhatsApp: string = "Contato - Saluc Academy";
  localizacao: string = "Onde estamos localizado";

  //images
  imgAppBarber: string = "../../assets/app-barber.png";
  imgContatoWhatsApp: string = "../../assets/whatsapp-icon.png";
  imgLocalizacao: string = "../../assets/map-localization-icon.png";

  //url links
  urlContatoWhatsApp: string = "http://wa.me/557788776200";
  urlLocalizacao: string = "https://www.google.com.br/maps/place/R.+R%C3%A9gis+Pach%C3%AAco,+65+-+Centro,+Po%C3%A7%C3%B5es+-+BA,+45260-000/@-14.5296028,-40.3695438,19z/data=!3m1!4b1!4m6!3m5!1s0x7470a6adef18f7d:0x87504522f5cc4c52!8m2!3d-14.5296041!4d-40.3689966!16s%2Fg%2F11rz1fjvy1";
  urlContatoAcamedyWhatsApp: string = "https://wa.me/557798196373";

}
