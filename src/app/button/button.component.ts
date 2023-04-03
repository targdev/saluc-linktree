import { Component, Input } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
    title: string = '';
  
  @Input()
    srcImg: string = '';

  @Input()
    directionUrl: undefined | string;

  @Input()
    isBlank: string = "";
}
