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

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'colaboradores', component: ColaboradoresListComponent },
  { path: 'colaboradores/novo', component: ColaboradoresFormComponent },
  { path: 'colaboradores/ordenados', component: ColaboradoresOrdenadosComponent },
  { path: 'workshops', component: WorkshopsListComponent },
  { path: 'workshops/novo', component: WorkshopsFormComponent },
  { path: 'workshops/:id/colaboradores', component: WorkshopColaboradoresComponent},
  { path: 'atas', component: AtasListComponent }, 
  { path: 'atas/:id', component: AtasDetailComponent },
  { path: 'graficos', component: GraficosDashboardComponent },
  {path: 'workshops/:id/colaboradores', component: WorkshopColaboradoresComponent},
  { path: 'workshops/:id/colaboradores', component: WorkshopColaboradoresComponent }
];

