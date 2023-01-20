import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:Education[]=[
    {
      institute:"Netaji Subhash Engineering College",
      course: 'B.Tech',
      duration : '2015-2019',
      score : '7.63'
    },
    {
      institute:"Md Jan Higher Secondary School",
      course: 'XII',
      duration : '2013-2015',
      score : '88.2%'
    },
    {
      institute:"Momin High Secondary School",
      course: 'X',
      duration : '2013',
      score : '80%'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
