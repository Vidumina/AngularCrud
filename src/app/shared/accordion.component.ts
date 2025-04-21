import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
@Input() hasJustViewed:boolean=false;
@Input() title:string|any;
@Input() isHidden:boolean=false


}
