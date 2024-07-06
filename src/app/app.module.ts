import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FeatherModule } from 'angular-feather';
import { Github, Linkedin, Instagram } from 'angular-feather/icons';
import { FooterPageComponent } from './footer-page/footer-page.component';

const icons = {
  Linkedin,
  Instagram,
  Github
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderPageComponent,
    SkillPageComponent,
    SkillProgressComponent,
    EducationPageComponent,
    ProjectPageComponent,
    ContactPageComponent,
    SocialMediaComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FeatherModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
