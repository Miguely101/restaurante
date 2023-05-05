import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookTableComponent } from './book-table/book-table.component';
import { Routes ,RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { ApIServiceService } from './api-service.service';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {DataViewModule} from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {CalendarModule} from 'primeng/calendar';
import {GMapModule} from 'primeng/gmap';


const appRoute: Routes = [
  {path:'home',component: MainComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookTableComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    GMapModule,
    CalendarModule,
    DynamicDialogModule,
    RippleModule,
    MessageModule,
    MessagesModule,
    BrowserAnimationsModule,
    ToastModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    DataViewModule,
    MegaMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ButtonModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ApIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
