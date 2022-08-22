
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { DeleteMedicineComponent } from './delete-medicine/delete-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';


import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HeaderAdminComponent } from './header/header-admin/header-admin.component';
import { SummaryComponent } from './summary/summary.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaymentComponent,
    SearchComponent,
    AddMedicineComponent,
    DeleteMedicineComponent,
    UpdateMedicineComponent,
    UserComponent,
    AdminComponent,
    HeaderAdminComponent,
    SummaryComponent,
    AboutComponent,
    ContactComponent,
    HomeAdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
