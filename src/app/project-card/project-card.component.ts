import { Component, Input, Renderer2 } from '@angular/core';
import { Project } from '../_models/Projects';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { RendererFactory2 } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { checkMargins } from 'ngx-bootstrap/positioning';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectCardComponent, PortfolioComponent, CommonModule, ModalModule ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [BsModalService]
})
export class ProjectCardComponent {
  @Input() project ={} as Project
  bsModalRef?: BsModalRef;

  constructor (private modalService: BsModalService){

  }

  OpenProjectModal(){
    const modalOptions : ModalOptions ={
      class: "modal-lg",
      initialState:{
        project : this.project
      }
  
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
