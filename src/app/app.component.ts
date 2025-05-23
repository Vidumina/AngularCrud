import { Component } from '@angular/core';
import {Event, Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCrud';
showLoadingIndicator=true;
  constructor(private _router:Router){

    this._router.events.subscribe((routerEvent:Event)=>{

      if(routerEvent instanceof NavigationStart){

        this.showLoadingIndicator=true;
      }


     else if(routerEvent instanceof NavigationEnd||routerEvent instanceof NavigationCancel ||routerEvent instanceof NavigationError ){

        this.showLoadingIndicator=false;
      }

    });
  }
}
