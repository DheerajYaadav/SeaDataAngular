import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConsignerComponent } from './consigner/consigner.component';
import { EditConsignerComponent } from './edit-consigner/edit-consigner.component';
import { ErrorCodeComponent } from './error-code/error-code.component';
import { GeneralComponent } from './general/general.component';
import { HblComponent } from './hbl/hbl.component';
import { HcItnryComponent } from './hc-itnry/hc-itnry.component';
import { HcReferenceComponent } from './hc-reference/hc-reference.component';
import { HcTransportDocMsrComponent } from './hc-transport-doc-msr/hc-transport-doc-msr.component';
import { HcTranspotDocComponent } from './hc-transport-doc/hc-transport-doc.component';
import { HcTransportEquipmentComponent } from './hc-transport-equipment/hc-transport-equipment.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ItrnyComponent } from './itrny/itrny.component';
import { ListConsignerComponent } from './list-consigner/list-consigner.component';
import { ListHcTransDocMsrComponent } from './list-hc-trans-doc-msr/list-hc-trans-doc-msr.component';
import { ListMcItrnyComponent } from './list-mc-itrny/list-mc-itrny.component';
import { ListMcTransDocComponent } from './list-mc-trans-doc/list-mc-trans-doc.component';
import { ListMcTransEquipmentComponent } from './list-mc-trans-equipment/list-mc-trans-equipment.component';
import { ListMcrefComponent } from './list-mcref/list-mcref.component';
import { LoactionCustomComponent } from './loaction-custom/loaction-custom.component';
import { LoginComponent } from './login/login.component';
import { MblComponent } from './mbl/mbl.component';
import { McReferenceComponent } from './mc-reference/mc-reference.component';
import { McTransDocMsrComponent } from './mc-trans-doc-msr/mc-trans-doc-msr.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { TransmitComponent } from './transmit/transmit.component';
import { TransportEquipmentComponent } from './transport-equipment/transport-equipment.component';
import { TranspotDocComponent } from './transpot-doc/transpot-doc.component';
const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: LoginComponent },
  { path: 'select-location', component: SelectLocationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'errorCode', component: ErrorCodeComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'mbl', component: MblComponent },
  { path: 'mc-reference', component: McReferenceComponent },
  { path: 'list-mc-reference', component: ListMcrefComponent },
  { path: 'mbl', component: MblComponent },
  { path: 'mbl/transmit', component: TransmitComponent },
  { path: 'mbl/list-mc-transdoc', component: ListMcTransDocComponent },
  { path: 'mbl/list-mc-transdocmsr', component: ListHcTransDocMsrComponent },
  { path: 'mbl/list-mc-transequpmnt', component: ListMcTransEquipmentComponent },
  { path: 'mbl/ list-mc-itrny', component: ListMcItrnyComponent },

  { path: 'hbl', component: HblComponent },
  { path: 'hbl/hc-reference', component: HcReferenceComponent },
  { path: 'hbl/hc-itrny', component: HcItnryComponent },
  { path: 'hbl/hc-transequipment', component: HcTransportEquipmentComponent },
  { path: 'hbl/hc-transdoc', component: HcTranspotDocComponent },
  { path: 'hbl/hc-transdoc-msr', component: HcTransportDocMsrComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'location-custom', component: LoactionCustomComponent },
  { path: 'transport-doc', component: TranspotDocComponent },
  { path: 'mctrans-doc-msr', component: McTransDocMsrComponent },
  { path: 'mctrans-eqpmnt', component: TransportEquipmentComponent },
  { path: 'add-consigner', component: ConsignerComponent },
  { path: 'list-consignor', component: ListConsignerComponent },
  { path: 'mbl/itrny', component: ItrnyComponent },
  { path: 'edit-consigner', component: EditConsignerComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
