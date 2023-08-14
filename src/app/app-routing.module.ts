import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/layouts/home/home.component';
import { AboutUsComponent } from './modules/layouts/about-us/about-us.component';
import { PricesComponent } from './modules/layouts/prices/prices.component';
import { ContactsComponent } from './modules/layouts/contacts/contacts.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'tariffs', component: PricesComponent },
  { path: 'tariffs', component: PricesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
