import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData:string[][] = [
    ['Name','Md Mairaz'],
    ['DOB','10/04/1998'],
    ['Work Exp','2.5 Years'],
    ['Education','B.Tech(2019)'],
    ['Interests','Football,Gaming'],
  ];

  aboutMe:string[] = [
    'Hi, I am a MEAN stack developer with 2.5 yeasrs of experience in software industry.',
    `Currently working as a software developer in Tata Consultancy Service.`,
    `I have experience in both frontend and backend, on frontend i was responsible
    for designing page layout and dashboard as per the business requirements.`,
    `On backend we are using Nodejs to connect to our data base and responsible for
    creating REST ful APIs using Express.js.`,
    `We are using MongoDB as our data base and performed CRUD opprations and aggregation.`,
    `Currently looking for good opportunity where i can utilise my skills `
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
