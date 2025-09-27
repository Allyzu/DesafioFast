import { Routes } from '@angular/router';
import { LoginComponent } from './services/features/login/login.component';
import { ColaboradoresListComponent } from './services/features/colaboradores/colaboradores-list.component';
import { ColaboradoresFormComponent } from './services/features/colaboradores/colaboradores-form.component';
import { WorkshopsListComponent } from './services/features/workshops/workshops-list.component';
import { WorkshopsFormComponent } from './services/features/workshops/workshops-form.component';
import { AtasListComponent } from './services/features/atas/atas-list.component';
import { AtasDetailComponent } from './services/features/atas/atas-detail.component'; 
import { ColaboradoresOrdenadosComponent } from '../app/services/features/colaboradores/service';
import { WorkshopColaboradoresComponent } from './services/features/workshops/workshop-colaboradores/workshop-colaboradores.component';
import { GraficosDashboardComponent } from './services/features/graficos/graficos-dashboard/graficos-dashboard.component';
import { AdicionarColaboradorComponent } from './services/features/workshops/adicionar-colaborador.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'colaboradores', component: ColaboradoresListComponent, canActivate: [AuthGuard]},
  { path: 'colaboradores/novo', component: ColaboradoresFormComponent,  canActivate: [AuthGuard]},
  { path: 'colaboradores/ordenados', component: ColaboradoresOrdenadosComponent, canActivate: [AuthGuard]},
  { path: 'workshops', component: WorkshopsListComponent, canActivate: [AuthGuard]},
  { path: 'workshops/novo', component: WorkshopsFormComponent, canActivate: [AuthGuard]},
  { path: 'workshops/adicionar-colaborador', component: AdicionarColaboradorComponent,  canActivate: [AuthGuard]}, 
  { path: 'workshops/:id/colaboradores', component: WorkshopColaboradoresComponent, canActivate: [AuthGuard]},
  { path: 'atas', component: AtasListComponent, canActivate: [AuthGuard]}, 
  { path: 'atas/:id', component: AtasDetailComponent, canActivate: [AuthGuard]},
  { path: 'graficos', component: GraficosDashboardComponent, canActivate: [AuthGuard]},
];

