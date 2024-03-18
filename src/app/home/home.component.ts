
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Nabil Alhaffar - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(1);
  }
}
