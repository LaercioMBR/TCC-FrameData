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
import {InputTextModule} from 'primeng/inputtext';

/**/


import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { GameService } from './gameservice';
import { DataService } from './dataservice';
import {SchemaService } from './schemaservice';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
/**/


import { HomeComponent } from './components/views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ManageComponent } from './components/views/manage/manage.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { ContributeComponent } from './components/views/contribute/contribute.component';
import { UseComponent} from './components/views/use/use.component';
import { ManagementTableComponent } from './components/actions/management-table/management-table.component';
import { ManageGameComponent } from './components/actions/manage-game/manage-game.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    SidebarModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    ToolbarModule,
    InputTextModule,
//    MenuItem,
    FormsModule,
    HttpClientModule,

    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,

    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
/*
*/
    RouterModule.forRoot([
        { path: '' , component: HomeComponent },
        { path: 'manage', component:ManageComponent },
        { path: 'contribute', component:ContributeComponent },
        { path: 'use', component:UseComponent },
        { path: 'manage/:game' , component:ManageGameComponent}
    ])
    /*
    */
  ],


  declarations: [ 
    AppComponent, 
    NavComponent,
    HomeComponent,
    ManageComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UseComponent,
    ContributeComponent,
    ManageGameComponent,
    ManagementTableComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ GameService, MessageService, ConfirmationService, DataService, SchemaService]
})

export class AppModule { }
