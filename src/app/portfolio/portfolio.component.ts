import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Projects';
import { Tag } from '../../app/_models/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RendererFactory2 } from '@angular/core';
import { renderApplication } from '@angular/platform-server';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, PortfolioComponent, CommonModule, ModalModule, CollapseModule, FormsModule,BrowserAnimationsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [CollapseModule,ProjectsService, FormsModule,BrowserAnimationsModule,BsModalService ]
})
export class PortfolioComponent implements OnInit {
  projects= [] as Project[];
  
   isCollapsed: boolean = true;

  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Nabil Alhaffar - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
