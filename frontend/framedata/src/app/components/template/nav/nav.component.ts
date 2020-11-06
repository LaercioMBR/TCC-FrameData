import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/home"},
          {label: 'Use', icon: 'pi pi-fw pi-play'},
          {label: 'Contribute', icon: 'pi pi-fw pi-pencil'},
          {label: 'Manage', icon: 'pi pi-fw pi-cog'} 
      ];
  }
}
