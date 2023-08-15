import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/layouts/home/home.component';
import { AboutUsComponent } from './modules/layouts/about-us/about-us.component';
import { PriceComponent } from './modules/layouts/price/price.component';
import { ContactsComponent } from './modules/layouts/contacts/contacts.component';
import { ServicesComponent } from './modules/layouts/services/services.component';
import { HelpsComponent } from './modules/layouts/helps/helps.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {path: 'shops', loadChildren: () => import('./core/shops/shops.module').then(m => m.ShopsModule)},
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'tariffs', component: PriceComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'helps', component: HelpsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
