import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main/layout-main.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutMainComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'generate-voice',
      },
      {
        path:'generate-voice',
        loadChildren:()=> import ('./modules/generate/generate.module').then((m)=>m.GenerateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
