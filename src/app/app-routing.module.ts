import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderAdminComponent } from './header/header-admin/header-admin.component';
import { UserComponent } from './user/user.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DeleteMedicineComponent } from './delete-medicine/delete-medicine.component';
import { SearchComponent } from './home/search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : "", component:UserComponent},
  {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentComponent},
  { path: 'search',component:SearchComponent},
  { path: 'add',component:AddMedicineComponent},
  { path: 'delete',component:DeleteMedicineComponent},
  { path: 'update',component:UpdateMedicineComponent},
  { path: 'admin',component:HeaderAdminComponent},
  { path: 'summary',component:SummaryComponent},
  { path: 'about',component:AboutComponent},
  { path: 'contact',component:ContactComponent},
  { path: 'home/home-admin',component:HomeAdminComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
