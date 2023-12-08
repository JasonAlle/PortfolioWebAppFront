import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonPageComponent } from './person-page/person-page.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { TaxFormParentComponent } from './tax-form-parent/tax-form-parent.component';
import { TaxPersoninfoChildComponent } from './tax-personinfo-child/tax-personinfo-child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, LoginComponent, PersonPageComponent, PersonEditComponent, PersonAddComponent, PersonDeleteComponent, TaxFormParentComponent, TaxPersoninfoChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
