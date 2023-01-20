import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skill[] = [
    {
      name:'Angular',
      level : 'Expert',
      rating : 80,
    },
    {
      name:'Node.js',
      level : 'Moderate',
      rating : 70,
    },
    {
      name:'Express.js',
      level : 'Moderate',
      rating : 70,
    },
    {
      name:'MongoDB',
      level : 'Expert',
      rating : 80,
    },
    {
      name:'HTML',
      level : 'Expert',
      rating : 80,
    },
    {
      name:'CSS',
      level : 'Expert',
      rating : 80,
    },
    {
      name : 'TypeScript',
      level : 'Moderate',
      rating : 72
    },
    {
      name : 'JavaScript',
      level : 'Moderate',
      rating : 70
    },
    {
      name : 'Python',
      level : 'Moderate',
      rating : 65
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
