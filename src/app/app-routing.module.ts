import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsConnectedGuard } from './core/is-connected.guard'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component'
import { IsAdminGuard } from './core/is-admin.guard'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };

