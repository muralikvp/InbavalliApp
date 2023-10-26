import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ListingComponent } from './listing/listing.component';
import { AddNewComponent } from './add-new/add-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './shared/auth.guard';
import { roleGuard } from './shared/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    {
      path:'customer',
      component:CustomerComponent,
      children:[
        {
          path:'',
          component:ListingComponent
        },
        { path: 'create', component: AddNewComponent },
        { path: 'Edit/:id', component: AddNewComponent },
      ],
      canActivate: [authGuard,roleGuard]
},
{ path: '', component: HomeComponent, canActivate: [authGuard]},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
