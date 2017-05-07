import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ProjectsComponent } from './projects.component';

@NgModule({
    declarations: [ProjectsComponent],
    imports:[CommonModule],
    exports:[ProjectsComponent],
    providers:[]
})
export class ProjectsModule{

}