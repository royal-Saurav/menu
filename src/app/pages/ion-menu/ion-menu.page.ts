import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.page.html',
  styleUrls: ['./ion-menu.page.scss'],
})
export class IonMenuPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  _openSideNav() {
  this.menu.enable(true, 'menu-content');  
  this.menu.open('menu-content');
  }

  open() {
  this.menu.enable(true, 'menu-content');  
  this.menu.open('menu-content');
  	alert("hi");
  }

} 
