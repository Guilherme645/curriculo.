import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      {
        name: 'HTML',
        icon: 'pi pi-html5'
      },
      {
        name: 'CSS',
        icon: 'pi pi-css3'
      },
      {
        name: 'JavaScript',
        icon: 'pi pi-js'
      },
      {
        name: 'Angular',
        icon: 'pi pi-angular'
      },
      {
        name: 'TypeScript',
        icon: 'pi pi-code'
      }
    ];
  }
}