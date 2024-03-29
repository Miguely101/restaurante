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
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReservaEditarComponent } from './reserva-editar/reserva-editar.component';
import {PickListModule} from 'primeng/picklist';
import { MenusAdminComponent } from './menus-admin/menus-admin.component';
import { PratoAdminComponent } from './prato-admin/prato-admin.component';
import {FileUploadModule} from 'primeng/fileupload';
import {InputNumberModule} from 'primeng/inputnumber';
import { MeunItemsComponent } from './meun-items/meun-items.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { ComprarComponent } from './comprar/comprar.component';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { ProfileComponent } from './profile/profile.component';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import { EncomendasAdminComponent } from './encomendas-admin/encomendas-admin.component';
import { EncomendasItemsComponent } from './encomendas-items/encomendas-items.component';
import { ReservaMesasComponent } from './reserva-mesas/reserva-mesas.component';
import { DoarComponent } from './doar/doar.component';
import { DonationComponent } from './donation/donation.component';
import { EncomendaInfoComponent } from './encomenda-info/encomenda-info.component';
import { ApagarConfirmarComponent } from './apagar-confirmar/apagar-confirmar.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';
import { MenuItemsClienteComponent } from './menu-items-cliente/menu-items-cliente.component';

const appRoute: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'comprar', component: ComprarComponent},
  {path: 'home', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {path:'',redirectTo:'/admin/users',pathMatch:'full'},
      {path: 'encomendas', component: EncomendasAdminComponent},
      {path: 'users', component: AdminComponent},
      {path: 'reservas', component: ReservasComponent},
      {path: 'menus', component: MenusAdminComponent},
    ]
  },
];
@NgModule({
  declarations: [

    AppComponent,
    BookTableComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    NavbarAdminComponent,
    ReservasComponent,
    AdminHomeComponent,
    ReservaEditarComponent,
    MenusAdminComponent,
    PratoAdminComponent,
    MeunItemsComponent,
    MenuAddComponent,
    ComprarComponent,
    CarrinhoComponent,
    NavbarsComponent,
    ProfileComponent,
    EncomendasAdminComponent,
    EncomendasItemsComponent,
    ReservaMesasComponent,
    DoarComponent,
    DonationComponent,
    EncomendaInfoComponent,
    ApagarConfirmarComponent,
    MenuDisplayComponent,
    MenuItemsClienteComponent
  ],
  imports: [
    CarouselModule,
    CardModule,
    RatingModule,
    PanelModule,
    PaginatorModule,
    InputNumberModule,
    FileUploadModule,
    DataViewModule,
    PickListModule,
    FullCalendarModule, 
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
