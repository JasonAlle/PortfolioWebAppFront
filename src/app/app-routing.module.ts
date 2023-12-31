import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { TaxPageComponent } from './tax-page/tax-page.component';
import { TaxFormParentComponent } from './tax-form-parent/tax-form-parent.component';

const routes: Routes = [
  {
    path: 'AppComponent',
    component: AppComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Signup',
    component: SignupComponent,
  },
  {
    path: 'PersonPage/:id',
    component: PersonPageComponent,
  },
  {
    path: 'EditPerson/:id',
    component: PersonEditComponent,
  },
  {
    path: 'Tax/:id',
    component: TaxPageComponent,
  },
  {
    path: 'TaxAdd/:id',
    component: TaxFormParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
