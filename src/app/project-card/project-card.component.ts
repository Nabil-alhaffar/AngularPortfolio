import { Component, Input } from '@angular/core';
import { Project } from '../_models/Projects';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectCardComponent, PortfolioComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project ={} as Project
}
