import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Projects';
import { Tag } from '../../app/_models/Tag';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RendererFactory2 } from '@angular/core';
import { renderApplication } from '@angular/platform-server';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, PortfolioComponent, CommonModule, ModalModule,CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [ProjectsService, BsModalService]
})
export class PortfolioComponent implements OnInit {
  projects= [] as Project[];
  
  filtering: boolean = false;
  isCollapsed: boolean = true;

  typescript:boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  swift: boolean = false;
  c: boolean = false;
  xamarin: boolean = false;


  

  constructor(private titleService:Title, private projectService: ProjectsService){
    this.titleService.setTitle('Nabil Alhaffar - Portfolio');

  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.swift){
      filterTags.push(Tag.SWIFT)
    }
    if(this.c){
      filterTags.push(Tag.C)
    }
    if(this.xamarin){
      filterTags.push(Tag.XAMARIN)
    }
    if(this.python|| this.xamarin||this.c||this.swift||this.react||this.aspnet||this.nodejs||this.java||this.csharp||this.javascript||this.angular||this.typescript){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.typescript = false;
    this.angular = false;
    this.javascript = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.swift = false;
    this.c = false;
    this.xamarin = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
