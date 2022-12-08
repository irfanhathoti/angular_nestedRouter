import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UsermailComponent } from './usermail/usermail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',redirectTo:"users" ,pathMatch:'full'
  },
  {
    path:'users',component:UserComponent
  },
  {
    path:'user/:id',component:UsersComponent,
    children:[
      {path:'useremail',component:UsermailComponent}
    ]
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'about',component:AboutComponent
  },
  
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
