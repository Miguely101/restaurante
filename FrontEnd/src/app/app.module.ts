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
    DataViewModule,
    MegaMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ApIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
