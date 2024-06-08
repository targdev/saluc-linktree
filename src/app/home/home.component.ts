import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DirectionDialogComponent } from '../direction-dialog/direction-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isBlank: string = '_blank';
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DirectionDialogComponent);
  }

  //titles
  appBarber: string = 'Agende pelo AppBarber';
  contatoWhatsApp: string = 'Contato pelo WhatsApp';
  contatoAcamedyWhatsApp: string = 'Contato - Saluc Academy';
  localizacao: string = 'Onde estamos localizado';

  //images
  imgAppBarber: string = '../../assets/app-barber.png';
  imgContatoWhatsApp: string = '../../assets/whatsapp-icon.png';
  imgLocalizacao: string = '../../assets/map-localization-icon.png';

  //url links
  urlContatoWhatsApp: string = 'http://wa.me/557788776200';
  urlLocalizacao: string =
    'https://www.google.com/maps/place/R.+Paulino+Xavier+Dias,+94,+Po%C3%A7%C3%B5es+-+BA,+45260-000/@-14.528494,-40.3729557,19z/data=!3m1!4b1!4m6!3m5!1s0x7470a150f4d88f3:0x1973222089426e3c!8m2!3d-14.528494!4d-40.3723106!16s%2Fg%2F11c237p97g?entry=ttu';
  urlContatoAcamedyWhatsApp: string = 'https://wa.me/557798196373';
}
