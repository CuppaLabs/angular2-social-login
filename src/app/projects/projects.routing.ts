import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AuthService }                from '../cuppaOAuth/auth.service';

const projectsRoutes: Routes = [
    {path:'projects', component: ProjectsComponent, canActivate:[AuthService] }
];

@NgModule({
    imports: [RouterModule.forRoot(projectsRoutes)],
    exports: [RouterModule]
})
export class ProjectsRouter{

}