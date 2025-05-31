import { Component, Input, OnInit } from '@angular/core';
import { projectModel } from '../../model/project';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectService } from 'src/app/services/project.service';
import { TempdataserviceService } from 'src/app/services/tempdataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input()
  projectDetailes!: projectModel;
  isAdmin: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private tempservice: TempdataserviceService,
    private route: Router,
    private projectservice: ProjectService
  ) {
    this.isAdmin = this.authService.IsAdmin();
  }
  Edit(project: any) {
    this.tempservice.setSelectedProject(project);
    this.route.navigateByUrl('/project/edit');
  }
  Delete(project: any) {
    console.log(this.projectDetailes);
    this.projectservice
      .deleteProject(this.projectDetailes._id!)
      .subscribe((data: any) => {
        window.location.reload();
      });
  }
}
