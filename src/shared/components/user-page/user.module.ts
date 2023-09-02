import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { MyParcelsComponent } from './components/my-parcels/my-parcels.component';
import { UserRoutingModule } from './user-routing.module';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { AddComponent } from './components/parcel-pages/add/add.component';
import { InCountryComponent } from './components/parcel-pages/in-country/in-country.component';
import { OnWayComponent } from './components/parcel-pages/on-way/on-way.component';
import { ReceivedComponent } from './components/parcel-pages/received/received.component';
import { WarehouseComponent } from './components/parcel-pages/warehouse/warehouse.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { AddressGerComponent } from './components/address-pages/address-ger/address-ger.component';
import { AddressPolComponent } from './components/address-pages/address-pol/address-pol.component';


@NgModule({
  declarations: [
    MainComponent,
    MyParcelsComponent,
    AddParcelComponent,
    AddComponent,
    InCountryComponent,
    OnWayComponent,
    ReceivedComponent,
    WarehouseComponent,
    MyAddressesComponent,
    AddressGerComponent,
    AddressPolComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
