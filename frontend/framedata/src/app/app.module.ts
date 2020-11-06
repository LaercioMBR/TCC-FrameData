import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

//import { MenuItem } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule} from 'primeng/menu';
import {ToolbarModule} from 'primeng/toolbar';

import { HomeComponent } from './components/views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ManageComponent } from './components/views/manage/manage.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    ToolbarModule, 
//    MenuItem,

    RouterModule.forRoot([
				{path:'',component: AppComponent},
		])
  ],


  declarations: [ 
    AppComponent, 
    NavComponent,
    HomeComponent,
    ManageComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
