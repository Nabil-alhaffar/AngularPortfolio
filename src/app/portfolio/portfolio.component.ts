import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Projects';
import { Tag } from '../../app/_models/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, PortfolioComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects= [] as Project[];
  

  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Nabil Alhaffar - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
