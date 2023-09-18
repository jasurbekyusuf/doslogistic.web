import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyParcelsComponent } from './components2/my-parcels/my-parcels.component';
import { LayoutsComponent } from 'src/shared/components/user-page/layouts/layouts.component';
import { MyShipmentsComponent } from './components2/my-shipments/my-shipments.component';
import { SettingsComponent } from './components2/settings/settings.component';
import { MyAddressesComponent } from './components2/my-addresses/my-addresses.component';
import { PersonalInfoComponent } from './components2/personal-info/personal-info.component';
import { PasswordComponent } from './components2/password/password.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'parcels', pathMatch: 'full' },
      { path: 'parcels', component: MyParcelsComponent},
      {
        path: 'myAddress',
        component: MyAddressesComponent
      },
      {
        path: 'shipments',
        component: MyShipmentsComponent,
        // children: [
        //   { path: '', redirectTo: 'order', pathMatch: 'full' },
        // ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
          { path: 'personal-info', component: PersonalInfoComponent},
          { path: 'password', component: PasswordComponent},
        ],
      },
  //     {
  //       path: 'myAddress',
  //       component: MyAddressesComponent,
  //       children: [
  //         { path: '', redirectTo: 'address-ger', pathMatch: 'full' },
  //         { path: 'address-ger', component: AddressGerComponent },
  //         { path: 'address-poland', component: AddressPolComponent },
  //       ],
  //     },
  //   ],
  // },
  // { path: 'addParcel', component: AddParcelComponent },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  //   children:[
  //     { path: '', redirectTo: 'settings', pathMatch: 'full' },
  //     { path: 'settings', component: SettingsComponent},
  //     { path: 'notice', component: NoticeComponent },
  //     { path: 'recipient', component: RecipientComponent},
  //     { path: 'file', component: FileComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
