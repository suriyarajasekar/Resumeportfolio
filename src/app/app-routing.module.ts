import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmpComponent } from './emp/emp.component';
const routes: Routes = [
  {path: 'employee', component: EmpComponent}
];

// const appRoutes: Routes = [
//   {path: 'contact', component: contactComponent}
// ] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
