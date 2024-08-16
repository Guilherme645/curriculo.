import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {MatCardModule} from '@angular/material/card';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';






import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IndexComponent } from './pages/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BarraDePesquisaComponent } from './components/barraDePesquisa/barraDePesquisa.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { QmsomosComponent } from './components/qmsomos/qmsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    IndexComponent,
    SidebarComponent,
    BarraDePesquisaComponent,
    RodapeComponent,
    ClientesComponent,
    QmsomosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]), 
    ReactiveFormsModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    InputTextModule,
    InputTextareaModule,
    MatCardModule,
    SidebarModule,
    MegaMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
