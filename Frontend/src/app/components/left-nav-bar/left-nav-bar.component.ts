import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { projectModel } from '../../model/project';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent {
  constructor(private projectApi:ProjectService)
  {

  }
  
}
