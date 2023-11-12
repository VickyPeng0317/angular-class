import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feature', component: FeatureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
