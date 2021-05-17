import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { GeneralComponent } from './general/general.component';
import { HeaderComponent } from './header/header.component';
import { MblComponent } from './mbl/mbl.component';
import { HblComponent } from './hbl/hbl.component';
import { McReferenceComponent } from './mc-reference/mc-reference.component';
import { LoactionCustomComponent } from './loaction-custom/loaction-custom.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorCodeComponent } from './error-code/error-code.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TranspotDocComponent } from './transpot-doc/transpot-doc.component';
import { McTransDocMsrComponent } from './mc-trans-doc-msr/mc-trans-doc-msr.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TransportEquipmentComponent } from './transport-equipment/transport-equipment.component';
import { ConsignerComponent } from './consigner/consigner.component';
import { ListConsignerComponent } from './list-consigner/list-consigner.component';
import { ItrnyComponent } from './itrny/itrny.component';
import { EditConsignerComponent } from './edit-consigner/edit-consigner.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ListFilterPipe } from './list-consigner/list-consignor-filter';
import { DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import { HcReferenceComponent } from './hc-reference/hc-reference.component';
import { ListMcrefComponent } from './list-mcref/list-mcref.component';
import { HcTransportDocMsrComponent } from './hc-transport-doc-msr/hc-transport-doc-msr.component';
import { HcTransportEquipmentComponent } from './hc-transport-equipment/hc-transport-equipment.component';
import { HcTranspotDocComponent } from './hc-transport-doc/hc-transport-doc.component';
import { ListMcTransDocComponent } from './list-mc-trans-doc/list-mc-trans-doc.component';
import { ListMcTransDocMsrComponent } from './list-mc-trans-doc-msr/list-mc-trans-doc-msr.component';
import { ListMcTransEquipmentComponent } from './list-mc-trans-equipment/list-mc-trans-equipment.component';
import { ListMcItrnyComponent } from './list-mc-itrny/list-mc-itrny.component';
import { ListHcItrnyComponent } from './list-hc-itrny/list-hc-itrny.component';
import { ListHcTransEquipmentComponent } from './list-hc-trans-equipment/list-hc-trans-equipment.component';
import { ListHcTransDocMsrComponent } from './list-hc-trans-doc-msr/list-hc-trans-doc-msr.component';
import { ListHcTransDocComponent } from './list-hc-trans-doc/list-hc-trans-doc.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TransmitComponent } from './transmit/transmit.component';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { SafeJsonPipe } from 'angular2-prettyjson/src/json.pipe';
import { HcItnryComponent } from './hc-itnry/hc-itnry.component';
import { EditMcrefComponent } from './edit-mcref/edit-mcref.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorCodeComponent,
    RegisterUserComponent,
    SelectLocationComponent,
    GeneralComponent,
    HeaderComponent,
    MblComponent,
    HblComponent,
    McReferenceComponent,
    LoactionCustomComponent,
    TranspotDocComponent,
    McTransDocMsrComponent,
    ItemDetailsComponent,
    TransportEquipmentComponent,
    ConsignerComponent,
    ListConsignerComponent,
    ItrnyComponent,
    EditConsignerComponent,
    ListFilterPipe, HcReferenceComponent, ListMcrefComponent,
    HcTranspotDocComponent,
    HcTransportDocMsrComponent,
    HcTransportEquipmentComponent,
    HcItnryComponent,
    ListMcTransDocComponent,
    ListMcTransDocMsrComponent,
    ListMcTransEquipmentComponent,
    ListMcItrnyComponent,
    ListHcItrnyComponent,
    ListHcTransEquipmentComponent,
    ListHcTransDocMsrComponent,
    ListHcTransDocComponent,
    TransmitComponent,
    EditMcrefComponent,
  ],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning', // set defaults here
    }),
    PrettyJsonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [DecimalPipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
