import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule,CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean = false; 
  isManagementExperienceOpen: boolean=false;
  isEducationOpen: boolean=false;
  isCertificationsOpen: boolean=false;
  isSkillsOpen: boolean=false;

  constructor(private titleService:Title, private renderer:Renderer2){
    this.titleService.setTitle('Nabil Alhaffar - Resume');
  }
  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume1.pdf');
    link.setAttribute('download', 'Resume.PDF');
    link.click();
    link.remove();
  }
}
