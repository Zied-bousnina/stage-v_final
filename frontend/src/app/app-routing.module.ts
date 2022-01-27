import { NotFoundFrontComponent } from './views/Front/not-found-front/not-found-front/not-found-front.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:"", component: FrontLayoutComponent,children: [
    {path:"", loadChildren: ()=>import("./views/Front/front/front.module").then(m=>m.FrontModule)},
    {path:"login", loadChildren: ()=>import("./views/Front/login/login.module").then(m=>m.LoginModule)}

  ]},
  {path:"admin", component: AdminLayoutComponent,
     children:[
      {path:'', loadChildren:()=>import('./views/Admin/front-admin/front-admin.module').then(m=>m.FrontAdminModule)},

       {path:'dashbord', loadChildren:()=>import('./views/Admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
       {path:'addProduct', loadChildren:()=>import('./views/Admin/add-product/add-product.module').then(m=>m.AddProductModule)},
       {path:'**', loadChildren:()=>import('./views/Admin/notfound/notfound.module').then(m=>m.NotfoundModule)}

     ]},
  {path:"user", component: UserLayoutComponent ,
  children: [
    {path:"", loadChildren:()=>import('./views/User/front/front.module').then(m=>m.FrontModule)},
    {path:'**', loadChildren:()=>import('./views/Admin/notfound/notfound.module').then(m=>m.NotfoundModule)}

  ]},
  {path:"**", component:NotFoundFrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
