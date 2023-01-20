import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workExpList:WorkExperience[] = [
    {
      role:'Software Developer',
      company: 'Tata Consultancy Service',
      duration :'sep 2020 - currently working',
      description : [
        `Responsible for designing page layout and dashboards as per the business requirements.`,
        `On backend we are using Node.js and worked on creating Restful APIs with the help of Express.js
        library.`,
        `Actively involved in developing the methods for Create, Read, Update and Delete(CRUD).`,
        `Also worked on MongoDB, performed aggregation operations on data.`,
        `developed pipe lines to pull the data from Mongo using APIs and populated data in UI`,
        `Worked closely with the other team members to plan , design and robust solutions
        in a timely manner .`,
      ],
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
