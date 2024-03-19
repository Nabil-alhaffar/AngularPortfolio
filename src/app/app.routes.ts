import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import {ModalModule} from 'ngx-bootstrap/modal'
import { NgModule, RendererFactory2 } from '@angular/core';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'resume', component: ResumeComponent},
    {path:'contact', component: ContactComponent},
    {path: '**' , component: HomeComponent, pathMatch: 'full',}
];
export const AppImports = [
    // Import modules here
    ModalModule.forRoot(), // Example of importing module with forRoot()
    RendererFactory2,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    CommonModule,
    
    
];