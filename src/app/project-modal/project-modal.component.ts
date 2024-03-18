import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Projects';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule, CommonModule, FormsModule, CollapseModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project = {}as Project;
  constructor(public bsModalRef: BsModalRef){

  }
}
