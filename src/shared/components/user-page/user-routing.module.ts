import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MyParcelsComponent } from './components/my-parcels/my-parcels.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { AddComponent } from './components/parcel-pages/add/add.component';
import { WarehouseComponent } from './components/parcel-pages/warehouse/warehouse.component';
import { OnWayComponent } from './components/parcel-pages/on-way/on-way.component';
import { ReceivedComponent } from './components/parcel-pages/received/received.component';
import { InCountryComponent } from './components/parcel-pages/in-country/in-country.component';
import { AddressGerComponent } from './components/address-pages/address-ger/address-ger.component';
import { AddressPolComponent } from './components/address-pages/address-pol/address-pol.component';
import { SettingsComponent } from '../Setting/settings/settings.component';
import { NoticeComponent } from '../Setting/notice/notice.component';
import { RecipientComponent } from '../Setting/recipient/recipient.component';
import { FileComponent } from '../Setting/file/file.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'myParcels', pathMatch: 'full' },
      {
        path: 'myParcels',
        component: MyParcelsComponent,
        children: [
          { path: '', redirectTo: 'order', pathMatch: 'full' },
          { path: 'order', component: AddComponent },
          { path: 'warehouse', component: WarehouseComponent },
          { path: 'onway', component: OnWayComponent },
          { path: 'recieved', component: ReceivedComponent },
          { path: 'incountry', component: InCountryComponent },
        ],
      },
      {
        path: 'myAddress',
        component: MyAddressesComponent,
        children: [
          { path: '', redirectTo: 'address-ger', pathMatch: 'full' },
          { path: 'address-ger', component: AddressGerComponent },
          { path: 'address-poland', component: AddressPolComponent },
        ],
      },
    ],
  },
  { path: 'addParcel', component: AddParcelComponent },
  { 
    path: 'settings',
    component: SettingsComponent,
    children:[
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings', component: SettingsComponent},
      { path: 'notice', component: NoticeComponent },
      { path: 'recipient', component: RecipientComponent},
      { path: 'file', component: FileComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
