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
          {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:"/", routerLinkActiveOptions:{exact:true} },
          {label: 'Use', icon: 'pi pi-fw pi-play', routerLink:"use", routerLinkActiveOptions:{exact:true} },
          {label: 'Contribute', icon: 'pi pi-fw pi-pencil', routerLink:"contribute", routerLinkActiveOptions:{exact:true} },
          {label: 'Manage', icon: 'pi pi-fw pi-cog', routerLink:"manage", routerLinkActiveOptions:{exact:true} } 

      ];
  }
}
